let pitch = 0
let sound_enabled = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        sound_enabled = false
        music.stopAllSounds()
    }
    if (input.buttonIsPressed(Button.B)) {
        sound_enabled = true
    }
    if (sound_enabled) {
        pitch = Math.map(input.rotation(Rotation.Roll), 100, -100, 131, 1046)
        music.setVolume(Math.map(input.rotation(Rotation.Pitch), -50, 20, 50, 255))
        music.ringTone(pitch)
    }
})
