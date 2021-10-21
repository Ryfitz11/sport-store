import { generateId } from "../Utils/generateId.js";

export class Item {
  constructor({ name, quantity, price, description, imgUrl }) {
    this.name = name,
      this.quantity = quantity,
      this.price = price,
      this.description = description,
      this.imgUrl = imgUrl,
      this.id = generateId()
  }
  get Template() {
    return /*html*/`
    <div class="col-3 shadow-lg p-3 m-3 bg-primary rounded">
      <div class="row">
        <div class="col-12 text-center"><img src="${this.imgUrl}" alt="https://thiscatdoesnotexist.com" style="width:17em">
        </div>
        <div class="col-12">
          <h3 class="text-center">${this.name}</h3>${this.description}
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-4 bg-warning">cost: $${this.price}</div>
            <div class="col-4 bg-info">In stock: ${this.quantity}</div>
            <button class="col-4 btn btn-danger"> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>`
  }
}
