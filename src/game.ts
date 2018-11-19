
import {Board} from 'src/board'
import {EventManager} from 'ts/EventManager'

const input = Input.instance

const camera = Camera.instance

const values = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]


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
  pos: Vector2
  nextPos: Vector2
  oldPos: Vector2
  lerp: number = 1
  sizeLerp: number = 0
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
        data.lerp += 0.01
        data.pos = Vector2.Lerp(data.oldPos, data.nextPos, data.lerp)
        transform.position = gridToScene(data.pos.x, data.pos.y)
        log(transform.position)
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
        data.sizeLerp += 0.05
        transform.scale.setAll(Scalar.Lerp(0.1, 0.5, data.sizeLerp))
        log(transform.position)
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
      board = new Board()
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

  spawnGem(id: number, model: number, x: number, y: number) {
    const ent = spawner.getEntityFromPool()

    if (!ent) return


    if (!ent.getOrNull(GLTFShape)) {
      const modelPath = "models/" + model + ".gltf"
      const shape = new GLTFShape(modelPath)
      ent.set(shape)
    }


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
      p.val = model
      p.pos = new Vector2(x, y)
      p.sizeLerp = 0
    } else {
      const p = ent.get(TileData)
      p.id = id
      p.val = model
      p.pos = new Vector2(x, y)
      p.sizeLerp = 0
    }


    engine.addEntity(ent)
  }
}


function gridToScene(row: number, col: number){
  let convertedPos = new Vector3(
    (row ) - 2.5 ,
    (col ) - 2.5,
    0
  )
  return convertedPos
}


function shiftBlocks(direction:number){
  board.move(direction)
}



///////////////////////////
// INITIAL POSITIONS OF STUFF

// Board object
let board = new Board()



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

///////////////////////////////
// Event based functions



// Swipe detection

input.subscribe("BUTTON_A_DOWN", e => {
  //log("pointerUp", e)
  let swipes = swipeChecker.get(SwipeDetection)
  swipes.buttonPressed = true
  swipes.posOnDown = camera.rotation.eulerAngles
})

// button up event
input.subscribe("BUTTON_A_UP", e => {
  //log("pointerDown", e)
  let swipes = swipeChecker.get(SwipeDetection)
  swipes.buttonPressed = false
  swipes.posOnUp = camera.rotation.eulerAngles
  let deltaX : number = swipes.posOnDown.x - swipes.posOnUp.x
  let deltaY : number = swipes.posOnDown.y - swipes.posOnUp.y
  let direction: number = -1
  if(  Math.abs(deltaY) < 3 && deltaX < -5){
    direction = 0
  } else if (deltaY > 5 && Math.abs(deltaX) < 3){
    direction = 1
  } else if (  Math.abs(deltaY) < 3 && deltaX > 5){
    direction = 2
  } else if (deltaY < -5 && Math.abs(deltaX) < 3){
    direction = 3
  }
  log(direction)
  shiftBlocks(direction)
})


EventManager.on("newTile", e => {
  let id = Math.floor(Math.random() * 10) + 1
  let index = Math.floor(Math.random() * values.length)
  let val = values[index]
  let x = Math.floor(Math.random() * 4) + 1
  let y = Math.floor(Math.random() * 4) + 1
  spawner.spawnGem(id, val, x, y)
})

EventManager.on("moveTile", e => {
  let newX = Math.floor(Math.random() * 4) + 1
  let newY = Math.floor(Math.random() * 4) + 1
  let oldX = Math.floor(Math.random() * 4) + 1
  let oldY = Math.floor(Math.random() * 4) + 1
  let tileId = Math.floor(Math.random() * 10) + 1
  let tile = gems.entities.filter( function(gem) { 
    return gem.getOrNull(TileData).id == tileId})[0]
  let tileData = tile.getOrNull(TileData)
  tileData.oldPos = new Vector2(oldX, oldY)
  tileData.nextPos = new Vector2(newX, newY)
  tileData.lerp = 0
})

// EventManager.on("deleteTile", e => {
  
// })

EventManager.on("merge", e => {
  let old = Math.floor(Math.random() * 10) + 1
  let target = Math.floor(Math.random() * 10) + 1
  let oldGem = gems.entities.filter( function(gem) { 
    return gem.getOrNull(TileData).id == old})[0]
  let targetGem = gems.entities.filter( function(gem) { 
    return gem.getOrNull(TileData).id == target})[0]
  engine.removeEntity(oldGem)
  let newModel = targetGem.getOrNull(TileData).val * 2
  targetGem.set(new GLTFShape("models/" + newModel + ".gltf"))
})


EventManager.on("win", e => {
 log("WIN!!")
})

EventManager.on("loose", e => {
  log("LOOSE!!")
 })