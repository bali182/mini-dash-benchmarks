const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

const counter = (start = 0) => {
  let current = start
  return () => current++
}

const randomString = (length, chars = CHARS) => {
  let string = ""
  for (let i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return string
}

const randomObject = (entryCount, createKey = () => randomString(10), createValue = () => randomString(10)) => {
  const object = {}
  let added = 0

  while (added != entryCount) {
    const key = createKey()
    const value = createValue()
    if (!object.hasOwnProperty(key)) {
      object[key] = value
      added += 1
    }
  }

  return object
}

const createArray = (length, createElement) => {
  const array = []
  for (let i = 0; i < length; i++) {
    array.push(createElement())
  }
  return array
}

module.exports = {
  randomString,
  randomObject,
  createArray,
  counter
}