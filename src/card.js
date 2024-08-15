function addCardElements(card) {
  const value = card.dataset.value
  // const suit = card.dataset.suit

  if (value == "back") {
    card.classList.remove("card")
    card.classList.add("card-complete")

    card.append(createCornerNumber("top", "?"))
    card.append(createCornerNumber("bottom", "?"))

    return;
  }

  const valueAsNumber = parseInt(value)
  if (isNaN(valueAsNumber)) {
    card.append(createPip())
  } else {
    for (let i = 0; i < valueAsNumber; i++) {
      card.append(createPip())
    }
  }

  card.append(createCornerNumber("top", value))
  card.append(createCornerNumber("bottom", value))

  card.classList.remove("card")
  card.classList.add("card-complete")
}

function createCornerNumber(position, value) {
  const corner = document.createElement("div")
  corner.textContent = value
  corner.classList.add("corner-number")
  corner.classList.add(position)
  return corner
}

function createPip() {
  const pip = document.createElement("div")
  pip.classList.add("pip")
  return pip
}

setInterval(function () {
  var cards = document.querySelectorAll(".card")
  cards.forEach(addCardElements)
}, 500);