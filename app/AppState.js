import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Item } from "./Models/Item.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  Items = [
    new Item({ name: "baseball", quantity: 12, price: 2.00, description: "its round", imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Baseball_%28crop%29.jpg/440px-Baseball_%28crop%29.jpg" }),
    new Item({ name: "bat", quantity: 12, price: 100, description: "swing away", imgUrl: "https://themanregistry.com/wp-content/uploads/2015/12/bat.jpg" }),
    new Item({ name: "glove", quantity: 12, price: 20, description: "gotta catch em all", imgUrl: "https://m.media-amazon.com/images/I/71bZ9TfEK+L._AC_SL1500_.jpg" }),
    new Item({ name: "hat", quantity: 12, price: 10, description: "put it on your head", imgUrl: "https://cdn.shopify.com/s/files/1/0583/1799/6216/products/Screenshot_44_126f152a-0394-47ca-bafe-b5d29ecb2aca_600x.png?v=1629928083" })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
