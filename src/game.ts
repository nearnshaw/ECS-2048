
import {Board} from 'src/board'
import {EventManager} from 'ts/EventManager'

const input = Input.instance

const camera = Camera.instance

const values = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]


export enum Directions {
  LEFT = "left",
  UP = "up",
  RIGHT = "right",
  DOWN = "down"
}

let TileId: number = 0;

// CUSTOM COMPONENTS

@Component('openLerp')
export class OpenLerp {
  closedPos: Vector3 = new Vector3(5, 0, 5)
  openPos: Vector3 = new Vector3(5, 5.5, 5)
  closedScale: number = 0.05
  openScale: number = 0.45
  fraction: number = 0
  open: boolean = false
}

@Component('swipeDetection')
export class SwipeDetection {
  buttonPressed: boolean = false
  posOnDown: Vector3
  posOnUp: Vector3
  minDistance: number = 5
}

@Component('tileData')
export class TileData {
  id:number
  val: number
  pos: Vector2    //maybe not needed
  nextPos: Vector2
  oldPos: Vector2
  lerp: number = 1
  sizeLerp: number = 0
}

@Component('boardData')
export class BoardData {
  tiles: Entity[] = []
  //cells: Entity[][]
  won : boolean
  size: number = 4
  fourProbability: number = 0.1
  deltaX : number[] = [-1, 0, 1, 0]
  deltaY: number[] = [0, -1, 0, 1]
}


///////////////////////////
// Entity groups

const gems = engine.getComponentGroup(Transform, TileData)



///////////////////////////
// Systems

// Open Chest
export class OpenBoard implements ISystem {
  update(dt: number) {
      let transform = boardWrapper.get(Transform)
      let state = boardWrapper.get(OpenLerp)
      if (state.open == true && state.fraction < 1){
        transform.position = Vector3.Lerp(state.closedPos, state.openPos, state.fraction)
        transform.scale.setAll(Scalar.Lerp(state.closedScale, state.openScale, state.fraction))
        state.fraction += 1/30
      } 
      else if (state.open == false && state.fraction > 0){
        transform.position = Vector3.Lerp(state.closedPos, state.openPos, state.fraction)
        transform.scale.setAll(Scalar.Lerp(state.closedScale, state.openScale, state.fraction))
        state.fraction -= 1/30
      }
  }
}


engine.addSystem(new OpenBoard)

// Move tiles

export class MoveTiles implements ISystem {
  update(dt: number) {
    for (let gem of gems.entities) {
      let data = gem.get(TileData)
      let transform = gem.get(Transform)
      if (data.lerp < 1){
        data.lerp += dt * 2
        data.pos = Vector2.Lerp(data.oldPos, data.nextPos, data.lerp)
        transform.position = gridToScene(data.pos.x, data.pos.y)
      }
    }
  }
}

engine.addSystem(new MoveTiles)

// Grow tiles

export class GrowTiles implements ISystem {
  update(dt: number) {
    for (let gem of gems.entities) {
      let data = gem.get(TileData)
      let transform = gem.get(Transform)
      if (data.sizeLerp < 1){
        data.sizeLerp += dt
        transform.scale.setAll(Scalar.Lerp(0.1, 0.5, data.sizeLerp))
        //log(transform.position)
      }
    }
  }
}

engine.addSystem(new GrowTiles)

//////////////////////////////
// OTHER FUNCTIONS

function openChest(){
  let state = boardWrapper.get(OpenLerp)
  state.open = !state.open
  switch (state.open){
    case true :
      //board = new Board()
      chestOpen.play()
      chestLightOpen.play()
      // play sounds

      //spawner.spawnGem("2", 4, 4)
      break
    case false:
      chestClose.play()
      chestLightClose.play()
      // end sounds
      break
  }
}




// Create gems using object pool
const spawner = {
  MAX_POOL_SIZE: 20,
  pool: [] as Entity[],

  getEntityFromPool(): Entity | null {
    for (let i = 0; i < spawner.pool.length; i++) {
      if (!spawner.pool[i].alive) {
        return spawner.pool[i]
      }
    }

    if (spawner.pool.length < spawner.MAX_POOL_SIZE) {
      const instance = new Entity()
      instance.setParent(map)
      spawner.pool.push(instance)
      return instance
    }

    return null
  },

  spawnGem(id: number, val: number, x: number, y: number) {
    const ent = spawner.getEntityFromPool()

    if (!ent) return

    let shapeIndex = values.indexOf(val)
    ent.set(gemModels[shapeIndex])

    if (!ent.getOrNull(Transform)) {
      const t = new Transform()
      ent.set(t)
      t.scale.setAll(0.5)
      t.position = gridToScene(x, y)
    } else {
      const t = ent.get(Transform)
      t.position = gridToScene(x, y)
    }

    if (!ent.getOrNull(TileData)) {
      const p = new TileData()
      ent.set(p)
      p.id = id
      p.val = val
      p.pos = new Vector2(x, y)
      p.lerp = 1
      p.sizeLerp = 0
    } else {
      const p = ent.get(TileData)
      p.id = id
      p.val = val
      p.pos = new Vector2(x, y)
      p.lerp = 1
      p.sizeLerp = 0
    }

    board.get(BoardData).tiles.push(ent)
    engine.addEntity(ent)
  }
}


function gridToScene(x: number, y: number){
  let convertedPos = new Vector3(
    (x + 1  ) - 2.5,
    (-y + 1 ) + 0.5,
    0
  )
  return convertedPos
}

function addRandomGem(){
  var emptyCells: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,15]
  var boardData = board.get(BoardData)
  for (let tile in boardData.tiles){
    let tileData = boardData.tiles[tile].get(TileData)
    let tilePos = tileData.pos.x + (tileData.pos.y * 4)
    let index = emptyCells.indexOf(tilePos)
    emptyCells.splice(index, 1)
  }
  //log(emptyCells)
  if (emptyCells.length  == 0){
    loose()
  }

  var index = ~~(Math.random() * emptyCells.length);
  var cell = emptyCells[index];
  var newValue = Math.random() < boardData.fourProbability ? 4 : 2;
  var cellY = Math.floor(cell/4)
  var cellX = cell % 4
  var id = TileId++
  log("new cell added, pos: " + cell + "  "  + cellX + " & " + cellY)
  spawner.spawnGem(id, newValue, cellX , cellY )
}


function shiftBlocks(direction:number){
  //board.move(direction)
  // if  (moved() ){
    addRandomGem()
  //}
}



///////////////////////////
// INITIAL POSITIONS OF STUFF

// Board object
//let board = new Board()
const board = new Entity()
board.set(new BoardData())


// Island
const island = new Entity()
island.set(new GLTFShape("models/Island.gltf"))
island.set(new Transform())
island.get(Transform).position.set(5, 0, 5)
island.get(Transform).rotation.setEuler(0, 90, 0)
engine.addEntity(island)

// Banner
const bannerImage = new BasicMaterial()
bannerImage.texture = "textures/Logo2048.png"

const banner = new Entity()
banner.set(bannerImage)
banner.set(new PlaneShape())
banner.set(new Transform())
banner.get(Transform).position.set(5, 9, 5)
banner.get(Transform).scale.setAll(6)
engine.addEntity(banner)


// Chest
const chest = new Entity()
chest.set(new Transform())
chest.get(Transform).position.set(5, 0.2, 5)
chest.get(Transform).rotation.setEuler(0, 90, 0)
chest.get(Transform).scale.setAll(0.8)
chest.set(new GLTFShape("models/Chest.gltf"))
const chestOpen = new AnimationClip("Open",{loop:false})
const chestClose = new AnimationClip("Close",{loop:false})
chest.get(GLTFShape).addClip(chestOpen)
chest.get(GLTFShape).addClip(chestClose)
chest.set(new OnClick( e => {
  openChest()
}))

engine.addEntity(chest)

// Chest Light
const chestLight = new Entity()
chestLight.set(new Transform())
chestLight.setParent(chest)
chestLight.set(new GLTFShape("models/Light.gltf"))
const chestLightOpen = new AnimationClip("Light_Open",{loop:false})
const chestLightClose = new AnimationClip("Light_Close",{loop:false})
chestLight.get(GLTFShape).addClip(chestLightOpen)
chestLight.get(GLTFShape).addClip(chestLightClose)
engine.addEntity(chestLight)

// Board
const boardWrapper = new Entity()
boardWrapper.set(new Transform())
boardWrapper.get(Transform).position.set(5, 0, 5)
boardWrapper.get(Transform).scale.setAll(0.05)
boardWrapper.set(new OpenLerp())
//board.set(new OpenLerp(new Vector3(5, 5.5, 5), new Vector3(5, 0, 5), 0))
// board.set(new SizeLerp(0.05, 0.45, 0))
engine.addEntity(boardWrapper)

// Map
const map = new Entity()
map.setParent(boardWrapper)
map.set(new Transform())
map.get(Transform).position.set(0, 1, 0)
map.get(Transform).scale.setAll(2)
map.set(new GLTFShape("models/Map.gltf"))
engine.addEntity(map)


// Swipe detector singleton

let swipeChecker = new Entity()
swipeChecker.set(new SwipeDetection)


// 3D models for gems

let gemModels = []

let gemVal = 2
for (let i = 0 ; i < values.length; i++){
  let gemMod = new GLTFShape("models/" + gemVal + ".gltf")
  gemModels.push(gemMod)
  gemVal *= 2
}



///////////////////////////////
// Event based functions



// Swipe detection

input.subscribe("BUTTON_A_DOWN", e => {
  
  let swipes = swipeChecker.get(SwipeDetection)
  swipes.buttonPressed = true
  swipes.posOnDown = camera.rotation.eulerAngles
})

// button up event
input.subscribe("BUTTON_A_UP", e => { 
  let swipes = swipeChecker.get(SwipeDetection)
  swipes.buttonPressed = false
  swipes.posOnUp = camera.rotation.eulerAngles
  let deltaX : number = swipes.posOnDown.x - swipes.posOnUp.x
  let deltaY : number = swipes.posOnDown.y - swipes.posOnUp.y
  let direction: Directions
  if(  Math.abs(deltaY) < 3 && deltaX < -5){
    direction = Directions.LEFT
  } else if (deltaY > 5 && Math.abs(deltaX) < 3){
    direction = Directions.UP
  } else if (  Math.abs(deltaY) < 3 && deltaX > 5){
    direction = Directions.RIGHT
  } else if (deltaY < -5 && Math.abs(deltaX) < 3){
    direction = Directions.DOWN
  }
  log("direction " + direction)
  shiftBlocks(direction)
})


function loose(){
  log("YOU LOST")
}

// EventManager.on("newTile", e => {
//   let id = Math.floor(Math.random() * 10) + 1
//   let index = Math.floor(Math.random() * values.length)
//   let val = values[index]
//   let x = Math.floor(Math.random() * 4) + 1
//   let y = Math.floor(Math.random() * 4) + 1
//   spawner.spawnGem(id, val, x, y)
//   // sound
// })

// EventManager.on("newTile", e => {
//   //debugger
//   spawner.spawnGem(e.id, e.val, e.x , e.y )
//   log("new tile ID: " + e.id + "  X:" + e.x + " Y: " + e.y)
//   // sound
// })

// EventManager.on("moveTile", e => {
//   let tile = gems.entities.filter(function (gem) {
//     return gem.getOrNull(TileData).id == e.id;
//   })[0];
//   if (tile){
//     let tileData = tile.getOrNull(TileData)
//     tileData.oldPos = new Vector2(e.oldX, e.oldY)
//     tileData.nextPos = new Vector2(e.newX, e.newY)
//     tileData.lerp = 0
//     log("moved tile: " + e.id)
//     //debugger
//   }
//   else{
//     log("moved unidentified tile, ID: " + e.id )
//   }
// })


// EventManager.on("merge", e => {
//   let oldGem = gems.entities.filter(function (gem) {
//     return gem.getOrNull(TileData).id == e.oldId;
// })[0];
//   let targetGem = gems.entities.filter(function (gem) {
//   return gem.getOrNull(TileData).id == e.targetId;
// })[0];
// if (oldGem && targetGem){
//   engine.removeEntity(oldGem)
//   let targetModelVal = targetGem.getOrNull(TileData).val * 2
//   let shapeIndex = values.indexOf(targetModelVal)
//   targetGem.set(gemModels[shapeIndex])
// } else {
//   log("merged unidentified tiles, old: " + e.oldID + " target: " + e.targetID )
// }
 
//   //debugger
//   // sound
// })


// EventManager.on("win", e => {
//  log("WIN!!")
// })

// EventManager.on("loose", e => {
//   log("LOOSE!!")
//  })


 