function playerWinsOn (p1Item: number, p2Item: number) {
    if (itemPlayer1 == p1Item) {
        if (itemPlayer2 == p2Item) {
            showWinner()
        } else {
            showLoser()
        }
    }
}
function checkWinner () {
    if (itemPlayer1 == itemPlayer2) {
        showDraw()
    } else {
        playerWinsOn(1, 3)
        playerWinsOn(2, 1)
        playerWinsOn(3, 2)
    }
    itemPlayer1 = 0
    itemPlayer2 = 0
    newGame = 0
}
radio.onReceivedNumber(function (receivedNumber) {
    itemPlayer2 = receivedNumber
    if (itemPlayer1 != 0) {
        checkWinner()
    }
})
function showDraw () {
    music.playTone(988, music.beat(BeatFraction.Half))
    music.playTone(988, music.beat(BeatFraction.Half))
    music.playTone(988, music.beat(BeatFraction.Half))
}
function showWinner () {
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    music.playMelody("C5 B A G F E D C ", 500)
}
input.onGesture(Gesture.Shake, function () {
    if (newGame == 0) {
        newGame = 1
        music.playTone(262, music.beat(BeatFraction.Half))
        itemPlayer1 = randint(1, 3)
        radio.sendNumber(itemPlayer1)
        showItem()
        if (itemPlayer2 != 0) {
            checkWinner()
        }
    }
})
function showLoser () {
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
}
function showItem () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (itemPlayer1 == 1) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (itemPlayer1 == 2) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
}
let itemPlayer2 = 0
let itemPlayer1 = 0
let newGame = 0
radio.setGroup(64)
newGame = 0
itemPlayer1 = 0
itemPlayer2 = 0
