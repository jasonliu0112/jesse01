basic.showString("OAO")
basic.showString("QAQ")
basic.forever(function () {
    basic.showString("LOL")
    basic.showLeds(`
        # # # # #
        . . # . .
        # # # # #
        . . # . .
        # # # # #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(100)
    basic.showNumber(100)
    basic.showIcon(IconNames.Target)
    basic.showIcon(IconNames.Butterfly)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    basic.showIcon(IconNames.LeftTriangle)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.EigthNote)
})
