basic.showString("3-2-1-go")
let cupcake = game.createSprite(2, 2)
let plate = true
let torleance = 200
while (plate) {
    if (input.acceleration(Dimension.X) > torleance) {
        if (cupcake.get(LedSpriteProperty.X) == 4) {
            plate = false
        } else {
            cupcake.change(LedSpriteProperty.X, 1)
            basic.pause(200)
        }
    }
    if (input.acceleration(Dimension.X) < -1 * torleance) {
        if (true) {
            plate = false
        } else {
            cupcake.change(LedSpriteProperty.X, -1)
            basic.pause(200)
        }
    }
    if (input.acceleration(Dimension.X) > torleance) {
        if (cupcake.get(LedSpriteProperty.Y) == 4) {
            plate = false
        } else {
            cupcake.change(LedSpriteProperty.X, -1)
            basic.pause(100)
        }
    }
    if (input.acceleration(Dimension.X) < -1 * torleance) {
        if (true) {
            plate = false
        } else {
            cupcake.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
        }
    }
}
basic.showString("you lose")
