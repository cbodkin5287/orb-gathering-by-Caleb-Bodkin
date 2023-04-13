namespace SpriteKind {
    export const PowerUp = SpriteKind.create()
    export const Explosive = SpriteKind.create()
    export const HealthUp = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Explosive, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.setPosition(randint(15, 160), randint(15, 110))
})
sprites.onOverlap(SpriteKind.Explosive, SpriteKind.Explosive, function (sprite2, otherSprite2) {
    sprite2.setPosition(randint(15, 160), randint(15, 110))
})
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`SkullyR`)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`Skully2R`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite5, otherSprite5) {
    Orb.setPosition(randint(5, 160), randint(5, 110))
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 1)
})
info.onCountdownEnd(function () {
    for (let index = 0; index < 3; index++) {
        Bomb = sprites.create(assets.image`Bomb`, SpriteKind.Explosive)
        Bomb.setPosition(randint(0, 160), randint(15, 110))
    }
    info.startCountdown(20)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.HealthUp, function (sprite6, otherSprite6) {
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, 1)
    sprites.destroyAllSpritesOfKind(SpriteKind.HealthUp)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HealthUp, function (sprite6, otherSprite6) {
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, 1)
    sprites.destroyAllSpritesOfKind(SpriteKind.HealthUp)
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Skully1`)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`Skully2`)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.PowerUp, function (sprite3, otherSprite3) {
    sprites.destroyAllSpritesOfKind(SpriteKind.PowerUp)
    sprites.destroyAllSpritesOfKind(SpriteKind.Explosive)
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`Skully1L`)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`Skully2L`)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Explosive, function (sprite4, otherSprite4) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(50, 7)
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, -1)
})
mp.onLifeZero(function (player2) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUp, function (sprite3, otherSprite3) {
    sprites.destroyAllSpritesOfKind(SpriteKind.PowerUp)
    sprites.destroyAllSpritesOfKind(SpriteKind.Explosive)
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(assets.image`SkullyU`)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setImage(assets.image`SkullyU`)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Food, function (sprite5, otherSprite5) {
    Orb.setPosition(randint(5, 160), randint(5, 110))
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Explosive, function (sprite4, otherSprite4) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(35, 7)
    mp.changePlayerStateBy(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, -1)
})
let LifeStone: Sprite = null
let PowerStone: Sprite = null
let Bomb: Sprite = null
let listHealth: number[] = []
let listPower: number[] = []
let Orb: Sprite = null
music.play(music.stringPlayable("A B C5 A B C5 G G ", 250), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff77
    66f6676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776f67
    66f6666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777f66
    66f666ffffffff6ffffffff7fffffff76666fffffffff6666666ffff667766ffffffffffff6f666666f6fffffffff7ffffffff6ffffffffff6ff66666f6fffffffff6766667ffff77677667766666f66
    66f666f666666f6f666666f7f67776f76666f66666b666666666f66f666666ffffffffffff6f666666f6f666666666f666666f67667ff66766ff66666fbf6666666666666fff55fff677766766666f66
    66f666f666666f6f666666f6fb6776f66666f66666b666666666f66f666666666b6ff666666f666666f6f666666666f666666f666b6ff66666f6f6666fbf6666666666664444ffffff67766666666f66
    66f666f666666f6f666666f6fbb676f66666f66666b66666666ff66ff66666666bbff666666f666666f6f666666666f666666f666bbff66666f6f6666fbf66666666666f444422211ff6766666666f66
    66f666f6669bbf6f666669f6fffffff66666f66666b66666669fb666f66669966bbff666666f666666f6f666669bb6f666666f966bbff66666f6f6666fbf6666669bb6644444222115fb666666666f66
    66f666f6699dbf6ffffffff6f6bb666f6666f66666b6666669ffbb66ff66999666bff666666f666666f6f6666999bbffffffff9666bff66666f66f666fbf66666999bbf44442222255ff666666666f66
    6bf666f669966fbff9666d99f6bb666f6666f666ffffff9669f66bbb6f666d9966bff666666f66666bf6f69669966bff69666d9966bff66666f66f666fbf669ffffffbf444222ffff5ff666666666f66
    6bf666f96696dfbfbf966d99f6bbb66f6666f6666bb66fd96ff6d9bbbff66d9966bff666666ffffffff6ffffff96d9fbf9966d9966bff66666f666f66fbf66d96696f9ff4422ffffffffb66666666f66
    6bf66df9999d9f6fb9fddd96f66bb66f6666f6666bb66fd99ffffffffffddd96666ff666666f66666bf6fdd9999d99fbf99ddd96666ff66666f666f66fbf6dd9999df9f24422ffffffffb66666666f66
    bbf666f9999d9f6fb9fdd996f9dbbb6f9666f666bbb66fd99f9d996bb9fdd99669dffb66966f6666bbf6f6d9999d99fbbf9dd99669dffb6696f6666fbfbf66d9999df96f2442fffff2fbbb6696666f66
    bbfdd6f9999d9f9fbb9fd999f96bbb6f9996f666bbbddfd9ff9d999bbbffd999996ffb66999f6666bbfdf6d9999d99fbbbfdd999996ffb6699f6666fbfbfd6d9999df99f22422fff2ffbbb6699966f66
    bbf6ddf9999d9f9fbb9df999fd6bbb9f9966f666bbb6dfd9ff9d9999bbffd9999d6ffb96996f6666bbf6fdd9999d99f9bb9fd9999d6ffb9699f6666fbfbfddd9999df999f22222222f6bbb9699666f66
    bbf6ddf999d99f9fbbbdf999fd9bbb9f9966f966bbb6dfd9f9d99999bbbfd9999d9ffb99996f9966bbf6fdd999d999f9bbbfd9999d9ffb9999f69966ffbfddd999d9f999bff2222ffd9bbb9999669f66
    bbfdddf999d99f9f9bbddf99fd9bbbbf999df996bbbddfdff9d999999bbff9999d9ffbb9999f9996bbfdfdd999d999f99bbdf9999d9ffbb999fd9996ffbfddd999d9f9999bbffff99d9bbbb9999d9f96
    bbfdddffffffff9f99bb99f9ffffffff999dffffffffffdf9dd9999999bbf999dd9ffbb9999f9999bbfdfffffffff9f999bb9f9ffffffffff9fd9999bf9ffffffffff99999bb9999dd9bbbb9999d9f99
    bbf9ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9f99
    bbf9dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d9f9b
    bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99ccccc
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbccccccccc
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bccccccccccc
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd9999999999999ccccccccccccc
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd99999999999ccccccccccccccc
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd999999999ccccccccccccccccc
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd99999999cccccccccccccccccc
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999cccccccccccccccccccc
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999cccccccccccccccccccc
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd99999ccccccccccccccccccccc
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd9999cccccccccccccccccccccc
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd999ccccccccccccccccccccccc
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd999ccccccccccccccccccccccc
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99cccccccccccccccccccccccc
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd9ccccccccccccccccccccccccc
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd9ccccccccccccccccccccccccc
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999dddddcccccccccccccccccccccccccc
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999dddddccccccccccccccccccccccffff
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999ddddccccccccccccccccccccfffffff
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999ddddccccccccccccccccccfffffffff
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddcccccccccccccccfffffffffffff
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999ddccccccccccccccccfffffffffffff
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999cccccccccccccccccffffffffffffff
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd9999999ccccccccccccccccccffffffffffffff
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd9999999ccccccccccccccccccfffffffffffffff
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999cccccccccccccccccccfffffffffffffff
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd99999ccccccccccccccccccccfffffffffffffff
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd9999ccccccccccccccccccccffffffffffffffff
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd99cccccccccccccccccccccfffffffffffffffff
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd99ccccccccccccccccccccccfffffffffffffffff
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9ccccccccccccccccccccffffffffffffffffffff
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddcccccccccccccccccccfffffffffffffffffffff
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddccccccccccccccccccccffffffffffffffffffffff
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddccccccccccccccccccccfffffffffffffffffffffff
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddcccccccccccccccccccffffffffffffffffffffffff
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddccccccccccccccccccffffffffffffffffffffffffff
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdccccccccccccccccccfffffffffffffffffffffffffff
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdccccccccccccccccccfffffffffffffffffffffffffff
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbccccccccccccccccccffffffffffffffffffffffffffff
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbcccccccccccccccccfffffffffffffffffffffffffffff
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbcccccccccccccccccffffffffffffffffffffffffffffff
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbcccccccccccccccccffffffffffffffffffffffffffffff
    ddddddddddddddddddd7777777777bbbbbbddddddddddddddddddddddd77777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbccccccccccccccccfffffffffffffffffffffffffffffff
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd7777777777777777777cccccccccccccffffffffffffffffffffffffffffffffff
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd777777777777777777777ccccccccccccffffffffffffffffffffffffffffffffffff
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777ccccccccccccffffffffffffffffffffffffffffffffffff
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd777777777777777777777777777ccccccccccccffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777777777777ffff7777777777777777777777777777777777777777777777777ccccccccccccffffffffffffffffffffffffffffffffffff
    777777777777777777777777777777777777777777777777777777777ff1111ff77777777777777777777777777777777777777777777777ccccccccccccffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777777777fb111111bf7777777777777777777777777777777777777777777777ccccccccccccffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777777777fd1111111f7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777fdd1111111df777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777fddd111111df777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777fdddddd111df777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777fbddddbfd1df777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777fcbbbdcfddbf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777fcbb11111f7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777fffff1b1f7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777fb111cfbf7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777ffb1b1ff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777f7fffbfbf777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777ffffffff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777fffff777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777fff7777fff7777fff7
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f777777f777777f7
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f7f7fff7777fff7777fff7
    777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f7f7f777777f77777777f7
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f77fff7f77fff77f7fff7
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.setDialogCursor(img`
    f 1 1 1 1 1 f f 
    1 f f f f f 1 f 
    1 f f f f f 1 f 
    1 f f f f f 1 f 
    1 f f f 1 f 1 f 
    1 f f f f 1 1 f 
    f 1 1 1 1 1 f 1 
    f f f f f f f f 
    `)
pause(3000)
game.splash("Welcome to Orb Gathering!")
game.splash("Use arrow keys to move", "(Can move diagonally)")
game.splash("Collect 100 Orbs", "Avoid Bombs")
game.splash("Power Stones destroy Bombs", "Stones appear at scores of 25, 50, and 75")
game.splash("Health Stones give a life", "Stones appear at scores of 50")
game.splash("Press Q key to Begin")
if (controller.A.isPressed()) {
    scene.setBackgroundImage(assets.image`Dungeon`)
    music.stopAllSounds()
    music.play(music.stringPlayable("E D E G B G F A ", 150), music.PlaybackMode.LoopingInBackground)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Skully1`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Skully2`, SpriteKind.Player2))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(35, 7)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life, 5)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(50, 7)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life, 5)
    Orb = sprites.create(assets.image`Orb`, SpriteKind.Food)
    Orb.setPosition(randint(15, 140), randint(20, 110))
    listPower = [10, 30, 50]
    listHealth = [30, 50]
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score, 0)
    mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score, 0)
    info.startCountdown(20)
}
forever(function () {
    for (let value of listPower) {
        if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == value) {
            PowerStone = sprites.create(assets.image`Power Up`, SpriteKind.PowerUp)
            PowerStone.setPosition(randint(15, 150), randint(20, 110))
            listPower.shift()
        } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == value) {
            PowerStone = sprites.create(assets.image`Power Up`, SpriteKind.PowerUp)
            PowerStone.setPosition(randint(15, 150), randint(20, 110))
            listPower.shift()
        } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == value) {
            PowerStone = sprites.create(assets.image`Power Up3`, SpriteKind.PowerUp)
            PowerStone.setPosition(randint(15, 150), randint(20, 110))
            listPower.shift()
        }
    }
    for (let value2 of listHealth) {
        if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == value2) {
            LifeStone = sprites.create(assets.image`Power Up2`, SpriteKind.HealthUp)
            LifeStone.setPosition(randint(15, 150), randint(20, 110))
            listHealth.shift()
        } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score) == value2) {
            LifeStone = sprites.create(assets.image`Power Up2`, SpriteKind.HealthUp)
            LifeStone.setPosition(randint(15, 150), randint(20, 110))
            listHealth.shift()
        }
    }
})
forever(function () {
    for (let value of listPower) {
        if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == value) {
            PowerStone = sprites.create(assets.image`Power Up`, SpriteKind.PowerUp)
            PowerStone.setPosition(randint(15, 150), randint(20, 110))
            listPower.shift()
        } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == value) {
            PowerStone = sprites.create(assets.image`Power Up`, SpriteKind.PowerUp)
            PowerStone.setPosition(randint(15, 150), randint(20, 110))
            listPower.shift()
        } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == value) {
            PowerStone = sprites.create(assets.image`Power Up3`, SpriteKind.PowerUp)
            PowerStone.setPosition(randint(15, 150), randint(20, 110))
            listPower.shift()
        }
    }
    for (let value2 of listHealth) {
        if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == value2) {
            LifeStone = sprites.create(assets.image`Power Up2`, SpriteKind.HealthUp)
            LifeStone.setPosition(randint(15, 150), randint(20, 110))
            listHealth.shift()
        } else if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.score) == value2) {
            LifeStone = sprites.create(assets.image`Power Up2`, SpriteKind.HealthUp)
            LifeStone.setPosition(randint(15, 150), randint(20, 110))
            listHealth.shift()
        }
    }
})
forever(function () {
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.life) == 0) {
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    }
    if (mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.Two), MultiplayerState.life) == 0) {
        sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    }
})
