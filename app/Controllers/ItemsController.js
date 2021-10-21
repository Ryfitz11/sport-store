import { ProxyState } from "../AppState.js";
import { itemsService } from "../Services/ItemsService.js";


function _draw() {
  const items = ProxyState.Items
  let template = ''
  items.forEach(i => template += i.Template)
  document.getElementById('card').innerHTML = template
}

export class ItemsController {
  constructor() {
    _draw()
  }
}