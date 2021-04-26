namespace SpriteKind {
    export const pizza = SpriteKind.create()
    export const secrit = SpriteKind.create()
    export const losee = SpriteKind.create()
    export const win = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.losee, function (sprite, otherSprite) {
    game.over(false, effects.melt)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero_jump_count <= 1) {
        monkey.vy = -150
        hero_jump_count += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.win, function (sprite, otherSprite) {
    game.over(true, effects.dissolve)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.secrit, function (sprite, otherSprite) {
    info.changeScoreBy(30)
})
function everthing () {
    if (currintlevel == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else {
        tiles.setTilemap(tilemap`level7`)
    }
    scene.cameraFollowSprite(monkey)
    scene.setBackgroundColor(9)
    hero_jump_count = 0
    statusbar = statusbars.create(50, 10, StatusBarKind.Health)
    statusbar.positionDirection(CollisionDirection.Top)
    statusbar.setLabel("HP", 15)
    statusbar.setColor(7, 2)
    tiles.placeOnRandomTile(monkey, assets.tile`myTile11`)
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        tiles.setTileAt(value, assets.tile`myTile11`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        gold_pizza = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 2 5 5 5 f . . . . 
            . . f 5 5 e 5 5 e 5 5 5 f . . . 
            . f 5 5 2 5 5 2 5 2 5 e 5 f . . 
            . f 2 5 5 e 5 e 5 2 5 5 2 f . . 
            . f 5 5 5 5 5 5 2 5 e 5 5 f . . 
            . f 5 2 5 2 5 2 5 5 5 2 5 f . . 
            . f 5 5 e 5 2 5 e 5 5 5 5 f . . 
            . f 5 5 5 5 5 e 5 5 e 5 5 f . . 
            . f 2 5 5 2 5 5 5 2 5 5 5 f . . 
            . . f 5 5 5 2 5 2 2 5 2 f . . . 
            . . . f 5 5 5 5 2 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.pizza)
        tiles.placeOnTile(gold_pizza, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        secrit_gold_pizza = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 2 5 5 5 f . . . . 
            . . f 5 5 e 5 5 e 5 2 5 f . . . 
            . f 5 5 2 5 5 2 5 2 5 e 5 f . . 
            . f 2 5 5 e 5 e 5 2 5 5 2 f . . 
            . f 5 5 5 5 5 5 2 5 e 5 5 f . . 
            . f 5 2 5 2 5 2 5 5 5 2 5 f . . 
            . f 5 5 e 5 2 5 e 5 5 5 5 f . . 
            . f 5 5 5 5 5 e 5 5 e 5 5 f . . 
            . f 2 5 5 2 5 5 5 2 5 5 5 f . . 
            . . f 5 5 5 2 5 2 2 5 2 f . . . 
            . . . f 5 5 5 5 2 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.secrit)
        tiles.placeOnTile(secrit_gold_pizza, value)
        tiles.setTileAt(value, assets.tile`myTile1`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        lose = sprites.create(assets.tile`myTile12`, SpriteKind.losee)
        tiles.placeOnTile(lose, value)
        tiles.setTileAt(value, assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        WIN = sprites.create(assets.tile`myTile13`, SpriteKind.win)
        tiles.placeOnTile(WIN, value)
        tiles.setTileAt(value, assets.tile`myTile3`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.pizza, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    currintlevel += 1
    everthing()
})
let WIN: Sprite = null
let lose: Sprite = null
let secrit_gold_pizza: Sprite = null
let gold_pizza: Sprite = null
let statusbar: StatusBarSprite = null
let hero_jump_count = 0
let currintlevel = 0
let monkey: Sprite = null
monkey = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(monkey, 100, 0)
monkey.ay = 350
currintlevel = 0
everthing()
game.onUpdate(function () {
    monkey.setImage(assets.image`myImage`)
    if (monkey.vx < 0) {
        monkey.setImage(assets.image`forestMonkey0`)
        if (monkey.vy < 0) {
            monkey.setImage(assets.image`jump`)
        } else if (monkey.vy > 0) {
            monkey.setImage(assets.image`forestMonkey1`)
        } else {
        	
        }
    }
})
game.onUpdate(function () {
    if (monkey.isHittingTile(CollisionDirection.Bottom)) {
        hero_jump_count = 0
    }
})
