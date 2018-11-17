
// OLD VERSION
// import { EventSubscriber } from "decentraland-api"

// export namespace EventManager {
//   let eventSubscriber: EventSubscriber

//   export function init(_eventSubscriber: EventSubscriber) {
//     eventSubscriber = _eventSubscriber
//   }

//   export function emit(eventType: string, ...params: any[]) {
//     eventSubscriber.emit(eventType, ...params)
//   }
// }

// DANI VERSION
// export namespace EventManager {

//   const subscriptions: Record<string, Array<() => void> > = {}

//   export function on(evt: string, callback: () => any) {
//     if (subscriptions[evt].length === 0) subscriptions[evt] = []
//     subscriptions[evt].push(callback)
//   }

//   export function emit(evt: string) {
//     subscriptions[evt].forEach(c => c())
//   }

// }


// MY VERSION
export namespace EventManager {

  const subscriptions: Record<string, Array<() => void> > = {}

  export function on(evt: string, callback: (...args: any[]) => void) {
    if (!subscriptions[evt]){
      subscriptions[evt] = []    
    }
    subscriptions[evt].push(callback)
  }

  export function emit(evt: string, ...params: any[]) {
    if (subscriptions[evt]){
      subscriptions[evt].forEach(c => c())
    }
  }

}