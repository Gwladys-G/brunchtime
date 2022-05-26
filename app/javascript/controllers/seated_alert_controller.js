import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]

  connect() {
    console.log("connected")
  }

  popup(event) {
    console.log(event)
  }
}
