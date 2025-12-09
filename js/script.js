// -------------------------
// Animaciones iniciales
// -------------------------
document.addEventListener("DOMContentLoaded", function () {

  // Mostrar textos y animaciones al hacer scroll
  const servCard = document.querySelectorAll(".service-card");
  const description = document.querySelector(".description-us");
  const services = document.querySelector(".services");

  function checkScroll() {
    const descPos = description?.getBoundingClientRect().top;
    const servPos = services?.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    // Animación de "Qué hacemos"
    if (descPos < screenPos) {
      let text = document.querySelectorAll(".text");
      let heading = document.getElementById("heading-us");
      let logo = document.getElementById("img-us");

      heading?.classList.add("visible");
      logo?.classList.add("visible");

      text.forEach((member, index) => {
        setTimeout(() => {
          member.classList.add("visible");
        }, index * 500);
      });
    }

    // Animación de servicios
    if (servPos < screenPos) {
      servCard.forEach((member, index) => {
        setTimeout(() => {
          member.classList.add("visible");
        }, index * 500);
      });
    }
  }

  window.addEventListener("scroll", checkScroll);

  // Botones ver más / ver menos
  document.querySelectorAll('button[id$="-btn"]').forEach((boton) => {
    boton.addEventListener("click", () => mostrar(boton));
  });

});


// -------------------------
// Menú móvil
// -------------------------
let bars = document.querySelector(".bars");
if (bars) {
  bars.onclick = function () {
    let navbar = document.querySelector(".nav-bar");
    const links = document.querySelectorAll(".link");

    navbar.classList.toggle("active");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
      });
    });
  };
}


// -------------------------
// Función mostrar/ver más
// -------------------------
function mostrar(boton) {
  const parrafoId = boton.id.replace("-btn", "");
  const parrafo = document.getElementById("parrafo-" + parrafoId);
  const img = document.getElementById("img-" + parrafoId);

  parrafo.classList.toggle("todo");
  img.classList.remove("todo", "nada");

  if (boton.innerHTML === "ver más") {
    img.classList.add("todo");
    boton.innerHTML = "ver menos";
    boton.style.backgroundImage = 'url("/img/iconos/arrow-up.webp")';
  } else {
    img.classList.add("nada");
    boton.innerHTML = "ver más";
    boton.style.backgroundImage = 'url("/img/iconos/arrow-down.webp")';
  }
}


// -------------------------
// Formulario de contacto (Resend)
// -------------------------
const form = document.getElementById("contact-form");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());

    modal.style.display = "block";
    modalText.textContent = "Enviando mensaje...";

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Error");

      modalText.textContent = "✅ Mensaje enviado correctamente";
      form.reset();

    } catch (err) {
      console.error(err);
      modalText.textContent = "❌ Error al enviar. Intenta nuevamente.";
    }
  });
}
