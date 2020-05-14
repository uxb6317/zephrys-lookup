const fs = require("fs")
const request = require("request")

const ZEPH_DATA = require("./src/data/zephrys_cards.json")
const CARDS_DATA = require("./src/data/cards.collectible.json")

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback)
  })
}

const getData = cards => {
  return CARDS_DATA.filter(({ name, type }) => {
    return cards.find(card => card.name === name) && type !== "HERO"
  }).map(card => {
    card.image = `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${card.id}.png`
    card.intent = cards.find(zephCard => zephCard.name === card.name).intent
    return card
  })
}

const data = getData(ZEPH_DATA)
// data.forEach(d => {
//   if (d.name.includes("Arcane Shot")) {
//     console.log(d.image)
//   }
// })

data.forEach(card => {
  const url = card.image
  const path = `./src/images/${card.name.replace(":", " ")}.png`
  download(url, path, () => {
    console.log(`${card.name} downloaded!`)
  })
})
