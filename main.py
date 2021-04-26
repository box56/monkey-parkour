scene.set_background_color(9)
scene.set_background_image(assets.image("""
    log12
"""))
monkey = sprites.create(assets.image("""
    myImage
"""), SpriteKind.player)
controller.move_sprite(monkey, 100, 100)
