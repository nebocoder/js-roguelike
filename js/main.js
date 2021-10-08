tileSize = 64
numTiles = 9
uiWidth = 4
level = 1
maxHp = 6

x = y = 0

spritesheet = new Image()
spritesheet.src = "sprites/spritesheet.png"
spritesheet.onload = showTitle
gameState = "loading"

startingHp = 3
numLevels = 6
shakeAmount = 0
shakeX = 0
shakeY = 0

document.querySelector("html").onkeypress = function (e) {
  if (gameState === "title") {
    startGame()
  } else if (gameState === "dead") {
    showTitle()
  } else if (gameState === "running") {
    if (e.key == "w") player.tryMove(0, -1)
    if (e.key == "s") player.tryMove(0, 1)
    if (e.key == "a") player.tryMove(-1, 0)
    if (e.key == "d") player.tryMove(1, 0)
    if (e.key >= 1 && e.key <= 9) player.castSpell(e.key - 1)
  }
}

setInterval(draw, 20)

setupCanvas()
initSounds()
