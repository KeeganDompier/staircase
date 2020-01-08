let juan = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . e e e e e . . . . . 
. . . . . . e f e f e . . . . . 
. . . . . . e e e e e . . . . . 
. . . . . . e f f f e . . . . . 
. . . . . . e e e e e . . . . . 
. . . e e e e e e e e e e e . . 
. . . . . . e e e e e . . . . . 
. . . . . . e e e e e . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . e . . . e . . . . . 
`, SpriteKind.Player)
let Carlita = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . . f e e e e f f . . . . . 
. . . . f e e e e e f . . . . . 
. . . . f e f e f e f . . . . . 
. . . . f e e e e e f . . . . . 
. . . . f e f f f e f . . . . . 
. e e e 5 5 5 5 5 5 5 e e e e . 
. . . . f f 5 5 5 f f . . . . . 
. . . . f f 5 5 5 f f . . . . . 
. . . . . f 5 5 5 f . . . . . . 
. . . . . . 5 5 5 . . . . . . . 
. . . . . . 8 . 8 . . . . . . . 
. . . . . . 8 . 8 . . . . . . . 
. . . . . . 8 . 8 . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(12)
// Stairs are going up
for (let index = 0; index < 9; index++) {
    juan.y += -4
    pause(100)
    juan.x += 4
    pause(100)
}
// Stairs are going down
for (let index = 0; index < 9; index++) {
    juan.y += 4
    pause(100)
    juan.x += -4
    pause(100)
}
// Stairs are going down
for (let index = 0; index < 9; index++) {
    Carlita.y += 4
    pause(100)
    Carlita.x += 4
    pause(100)
}
// Stairs are going up
for (let index = 0; index < 9; index++) {
    Carlita.y += -4
    pause(100)
    Carlita.x += -4
    pause(100)
}
