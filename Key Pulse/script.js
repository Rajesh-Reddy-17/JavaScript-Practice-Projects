 let h1 = document.querySelector("h1");
        let sound = document.querySelector("#sound");

        window.addEventListener("keydown", function (dets) {

            if (dets.key === " ") {
                h1.textContent = "SPC";
            } else {
                h1.textContent = dets.key;
            }

            // Stop the music when NumLock is pressed
            if (dets.key === "NumLock") {
                sound.pause();
                return;
            }

            // Play music if stopped
            if (sound.paused) {
                sound.play();
            }
        });
