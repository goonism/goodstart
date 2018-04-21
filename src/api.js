
const API = ""

const emptyLiteral = {
  backgroundColor: "", 
  positiveMessage: ""
}

export function getPage() {
  return fetch(API+"/getPage")
    .then((response) => response.json())
    .catch((error) => emptyLiteral)
}

export function imageURL() {
  return API+"/positiveImage"
}