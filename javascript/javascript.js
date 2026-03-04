      //Barra lateral
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }

      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

      // Audio Himnos

              const audio = document.getElementById("audio");
        const playBtn = document.getElementById("playBtn");
        const volumen = document.getElementById("volumen");

        // volumen inicial
        audio.volume = volumen.value / 50;

        // play / pause
        playBtn.addEventListener("click", () => {
          if (audio.paused) {
            audio.play();
            playBtn.textContent = "⏸";
          } else {
            audio.pause();
            playBtn.textContent = "▶";
          }
        });

        // cambiar volumen
        volumen.addEventListener("input", () => {
          audio.volume = volumen.value / 100;
        });

                const audio1 = document.getElementById("audio1");
        const playBtn1 = document.getElementById("playBtn1");
        const volumen1 = document.getElementById("volumen1");

        // volumen inicial
        audio1.volume = volumen.value / 100;

        // play / pause
        playBtn1.addEventListener("click", () => {
          if (audio1.paused) {
            audio1.play();
            playBtn1.textContent = "⏸";
          } else {
            audio1.pause();
            playBtn1.textContent = "▶";
          }
        });

        // cambiar volumen
        volumen1.addEventListener("input", () => {
          audio1.volume = volumen1.value / 100;
        });

              function toggleGaleria(id, boton) {
        const seccion = document.getElementById(id);

        if (seccion.style.display === "none") {
          seccion.style.display = "flex";
          boton.textContent = "▲"; // mostrar
        } else {
          seccion.style.display = "none";
          boton.textContent = "▼"; // ocultar
        }
      }

