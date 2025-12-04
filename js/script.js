var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
document.addEventListener("DOMContentLoaded", function () {
  mostrarModal();
  // muestro el texto de servicios
  document.querySelectorAll('button[id$="-btn"]').forEach((boton) => {
    boton.addEventListener("click", () => mostrar(boton));
  });


  const servCard = document.querySelectorAll(".service-card");
  const description = document.querySelector(".description-us");
  const services = document.querySelector(".services");
  function checkScroll() {
    //const sectionPos = teamSection.getBoundingClientRect().top;
    const descPos = description.getBoundingClientRect().top;
    const servPos = services.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    // mueve el que hacemos
    if (descPos < screenPos) {
      let text = document.querySelectorAll(".text");
      let heading = document.getElementById("heading-us");
      let logo = document.getElementById("img-us");
      heading.classList.add("visible");
      logo.classList.add("visible");
      text.forEach((member, index) => {
        setTimeout(() => {
          member.classList.add("visible");
        }, index * 500);
      });
    }

    //muevo los servicios
    if (servPos < screenPos) {
      const navBar = document.querySelector("header");
      servCard.forEach((member, index) => {
        setTimeout(() => {
          member.classList.add("visible");
        }, index * 500);
      });
    }

    
  }

  window.addEventListener("scroll", checkScroll);
});

let bars = document.querySelector(".bars");
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

function mostrar(boton) {
  const parrafoId = boton.id.replace("-btn", "");
  const parrafo = document.getElementById("parrafo-" + parrafoId);
  const img = document.getElementById("img-" + parrafoId);
  parrafo.classList.toggle("todo");
  img.classList.remove("todo");
  img.classList.remove("nada");

  if (boton.innerHTML === "ver más") {
    img.classList.add("todo");
    boton.innerHTML = "ver menos";
    boton.style.backgroundImage = 'url("/img/iconos/arrow-up.webp")';
  } else {
    img.classList.add("nada");
    boton.style.backgroundImage = 'url("/img/iconos/arrow-down.webp")';
    boton.innerHTML = "ver más";
  }
}

function mostrarModal() {
  const form = document.querySelector('.formulario');
  if (form) {
      form.addEventListener('submit', (event) => {
          event.preventDefault();
          const modal = document.querySelector('.modal');
          if (modal) {
              modal.style.display = 'flex';
              const revolver = document.querySelector('.revolver');
              const parrafo = document.querySelector('.modal p');
              const formData = new FormData(form);

              fetch('email.php', {
                  method: 'POST',
                  body: formData
              })
              .then(response => response.json())
              .then(data => {
                  revolver.style.display = 'none';
                  parrafo.innerHTML = data.message;
                  setTimeout(() => {
                      modal.style.display = 'none';
                      if (data.status === 'success') {
                          form.reset();
                      }
                  }, 3000);
              })
              .catch(error => {
                  revolver.style.display = 'none';
                  parrafo.innerHTML = 'Hubo un error. Intenta nuevamente más tarde.';
                  setTimeout(() => {
                      modal.style.display = 'none';
                  }, 3000);
                  console.error('Error:', error);
              });
          }
      });
  }
}

}
/*
     FILE ARCHIVED ON 04:21:01 Mar 04, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:31:21 Nov 26, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.729
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.02
  cdx.remote: 8.888
  LoadShardBlock: 161.905 (3)
  PetaboxLoader3.datanode: 203.428 (4)
  PetaboxLoader3.resolve: 83.974 (2)
  load_resource: 138.611
*/