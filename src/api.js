
const API = "http://localhost:8000"


export function getMessage() {
  return fetch(API+"/message")
    .then((response) => response.json())
    .catch((error) => {
      return "Server is down :( Please tweet @stayfun_"
    })
}

export function getImage() {
  return fetch(API+"/image")
      .then((response) => response.json())
      .catch((error) => {
        console.log(error)
        return ""
      })
}