import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";


class HousesService {

  async getHouses() {
    console.log("Getting Houses")
    const res = await api.get("api/houses")
    console.log("Houses gotten:", res.data)
    const newHouses = res.data.map(housePOJO => new House(housePOJO))
    console.log("New houses to add to the AppState", newHouses)
    AppState.houses = newHouses
    console.log(AppState.houses)
  }

  async createHouse(houseFormData) {
    const res = await api.post("https://sandbox.codeworksacademy.com/api/houses", houseFormData)
    console.log("Created house", res.data)
    let newHouse = new House(res.data)
    console.log("Created house as House", newHouse)
    AppState.houses.push(newHouse)
    AppState.emit("houses")
  }

  async removeHouse(houseId) {
    let res = await api.delete(`api/houses/${houseId}`)
    console.log("Deleted House:", res.data)
    let houseIndex = AppState.houses.findIndex(house => houseId == house.id)
    if (houseIndex == -1) {
      return
    }
    AppState.houses.splice(houseIndex, 1)
    AppState.emit("houses")
  }

}

export const housesService = new HousesService()