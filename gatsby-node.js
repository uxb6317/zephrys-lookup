const CARD_DATA = require("./src/data/cards.collectible.json")
const ZEPHRYS_CARDS = require("./src/data/zephrys_cards.json")

const INTENTS = ["aoe", "silence", "heal"]

exports.createPages = async ({ actions: { createPage } }) => {
  const data = getData(ZEPHRYS_CARDS).sort((a, b) => {
    if (a.cost < b.cost) return -1
    if (a.cost > b.cost) return 1
    if (a.cost === b.cost) return 0
  })

  const cardsByGroup = {}
  const allCardsByName = {}

  data.forEach(card => {
    allCardsByName[card.name] = card

    // create intent properties
    if (!cardsByGroup[INTENTS[0]]) {
      INTENTS.forEach(intent => {
        cardsByGroup[intent] = []
      })
    }

    if (card.intent) {
      cardsByGroup[card.intent].push(card)
    }

    if (!cardsByGroup[card.cost]) {
      cardsByGroup[card.cost] = []
    }

    cardsByGroup[card.cost].push(card)
  })

  for (const group in cardsByGroup) {
    if (cardsByGroup.hasOwnProperty(group)) {
      createPage({
        path: `/${group}`,
        component: require.resolve("./src/templates/group.js"),
        context: { cards: cardsByGroup[group] },
      })
    }
  }
}

const getData = cards => {
  return CARD_DATA.filter(({ name, type }) => {
    return cards.find(card => card.name === name) && type !== "HERO"
  }).map(card => {
    card.image = `https://art.hearthstonejson.com/v1/render/latest/enUS/512x/${card.id}.png`
    card.intent = cards.find(zephCard => zephCard.name === card.name).intent
    return card
  })
}
