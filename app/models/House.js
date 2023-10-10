import { AppState } from "../AppState.js";


export class House {
  constructor(data) {
    this.id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl || ""
    this.year = data.year
    this.price = data.price
    this.description = data.description || ""
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }

  get HouseCardTemplate() {
    return `                       
    <div class="col-12 d-flex border my-2 py-2 bg-dark text-light fs-5">
      <div>
        <img
          src="${this.imgUrl}"
          alt="House Picture" class="house-img">
      </div>
      <div>
        <div class="d-flex justify-content-around cabin-font mt-1">
          <div>
            <p>Bedrooms: ${this.bedrooms}</p>
            <p>Bathrooms: ${this.bathrooms}</p>
            <p>Levels: ${this.levels}</p>
            <p>Year: ${this.year}</p>
          </div>
          <div class="mx-5">
            <p>Posted at: ${this.createdAt.toLocaleDateString()}</p>
            <p>Updated at: ${this.updatedAt.toLocaleDateString()}</p>
          </div>
        </div>
        <div>
          <p class="fs-4 my-4">Price: $${this.price}</p>
          <p class="mt-4">${this.description}</p>
        </div>
        <div>
          <p>Posted by: ${this.creator.name}</p>
          <img src="${this.creator.picture}" alt="user picture" class="user-img rounded-circle">
        </div>
        ${this.ComputeDeleteButton}
      </div>
    </div>`
  }


  get ComputeDeleteButton() {
    if (AppState.account?.id == this.creator.id) {
      return `
      <button type="button" class="btn btn-danger" onclick="app.HousesController.removeHouse('${this.id}')">Delete Listing</button>`
    }
    return ''
  }



  static get houseFormTemplate() {
    return `              <div class="col-12 p-4">
    <form onsubmit="app.HousesController.createHouse(event)">

      <div class="mb-2">
        <label for="bedrooms">Bedrooms</label>
        <input id="bedrooms" type="text" required maxlength="2" name="bedrooms"
          placeholder="Number of Bedrooms">
      </div>

      <div class="mb-2">
        <label for="bathrooms">Bathrooms</label>
        <input id="bathrooms" type="text" required maxlength="2" name="bathrooms"
          placeholder="Number of Bathrooms">
      </div>

      <div class="mb-2">
        <label for="levels">Levels</label>
        <input id="levels" type="text" required maxlength="2" placeholder="Levels" name="levels">
      </div>


      <div class="mb-2">
        <label for="imgUrl">Image URL</label>
        <input id="imgUrl" type="url" maxlength="500" name="imgUrl" placeholder="House ImgUrl...">
      </div>


      <div class="mb-2">
        <label for="year">Year</label>
        <input id="year" type="text" name="year" required maxlength="4" placeholder="Year Built">
      </div>


      <div class="mb-2">
        <label for="price">Price</label>
        <input id="price" type="text" required name="price" minlength="0" maxlength="1000000000" placeholder="Price">
      </div>

      <div class="mb-2">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="5" placeholder="Describe your house!"
          maxlength="5000"></textarea>
      </div>


      <div>
        <button class="btn btn-success" type="submit">Submit</button>
      </div>
    </form>
  </div>`
  }

}

const houseData = `
{
  "_id": "645d60f381faf24223ae886b",
  "bedrooms": 3,
  "bathrooms": 2,
  "levels": 2,
  "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
  "year": 2003,
  "price": 230000,
  "description": "Super sick house",
  "creatorId": "63f7d6202d1cf882287f12e2",
  "createdAt": "2023-05-11T21:41:07.979Z",
  "updatedAt": "2023-05-11T21:41:07.979Z",
  "__v": 0,
  "creator": {
      "_id": "63f7d6202d1cf882287f12e2",
      "name": "Charles Francis Xavier",
      "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
      "id": "63f7d6202d1cf882287f12e2"
  },
  "id": "645d60f381faf24223ae886b"
}`