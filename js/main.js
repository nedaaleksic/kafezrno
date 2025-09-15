/* JQUERY PLUGIN (VRAĆA SE NA VRH STRANICE SMOOTH) */
$('.navbar-brand').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 800);
});

/* JQUERY ZA PRIKAZ KONTAKT PODATAKA AUTORA */

$(document).ready(function() {
    $('#kontakt-btn').click(function() {
        $('#kontakt-info').slideToggle();
    });
});

/* DINAMIČKI ISPIS MENIJA */

document.addEventListener("DOMContentLoaded", function () {
  const menuContainer = document.querySelector(".navbar-nav.ms-lg-auto");
  const buttonContainer = document.querySelector(".collapse.navbar-collapse .ms-lg-3");

  if (!menuContainer) {
    console.error("Navbar <ul> nije pronađen!");
    return;
  }

  const menuItems = [
    { name: "Početna", link: "index.html" },
    { name: "O nama", link: "index.html#section_2" },
    { name: "Meni", link: "index.html#section_3" },
    { name: "Recenzije", link: "index.html#section_4" },
    { name: "Kontakt", link: "index.html#section_5" },
    { name: "Autor", link: "author.html" }
  ];

  menuItems.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("nav-item");

    const a = document.createElement("a");
    a.classList.add("nav-link");
    a.href = item.link;
    a.textContent = item.name;

    li.appendChild(a);
    menuContainer.appendChild(li);
  });

  if (buttonContainer) {
    const a = document.createElement("a");
    a.className = "btn custom-btn custom-border-btn";
    a.href = "reservation.html";
    a.innerHTML = `Rezervacija <i class="bi-arrow-up-right ms-2"></i>`;
    buttonContainer.appendChild(a);
  }
});

/* DINAMIČKI ISPIS IKONICA U FOOTERU */

document.addEventListener("DOMContentLoaded", () => {
  const socialLinks = [
    { href: "#", target: "_new", iconClass: "bi-facebook" },
    { href: "#", target: "_new", iconClass: "bi-instagram" },
    { href: "#", target: "_new", iconClass: "bi-whatsapp" },
    { href: "sitemap.xml", target: "_new", iconClass: "fa-solid fa-sitemap" },
    { href: "Dokumentacija.png", target: "_new", iconClass: "fa-solid fa-book" }
  ];

  const container = document.getElementById("social-links");

  if (container) {
    socialLinks.forEach(link => {
      const li = document.createElement("li");
      li.className = "social-icon-item";

      li.innerHTML = `
        <a href="${link.href}" target="${link.target}" class="social-icon-link ${link.iconClass.includes('bi-') ? link.iconClass : ''}">
          ${!link.iconClass.includes('bi-') ? `<i class="${link.iconClass}"></i>` : ''}
        </a>
      `;

      container.appendChild(li);
    });
  }
});

/* DINAMIČKI ISPIS SEKCIJE O BARISTIMA */

document.addEventListener("DOMContentLoaded", () => {
  const team = [
    {
      name: "Srđan",
      role: "Gazda",
      desc: "prijatan domaćin i stručnjak za kafe.",
      img: "images/team/portrait-elegant-old-man-wearing-suit.jpg"
    },
    {
      name: "Tara",
      role: "Menadžerka",
      desc: "brine o gostima i detaljima.",
      img: "images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg"
    },
    {
      name: "Filip",
      role: "Konobar",
      desc: "veseo, energičan i ljubazan profesionalac.",
      img: "images/team/small-business-owner-drinking-coffee.jpg"
    },
    {
      name: "Nađa",
      role: "Šankerica",
      desc: "brza, vedra i uvek nasmejana.",
      img: "images/team/smiley-business-woman-working-cashier.jpg"
    }
  ];

  const container = document.getElementById("team-container");

  if (container) {
    team.forEach(member => {
      const html = `
        <div class="col-lg-3 col-md-6 col-12 mb-4">
          <div class="team-block-wrap">
            <div class="team-block-info d-flex flex-column">
              <div class="d-flex mt-auto mb-3">
                <h4 class="text-white mb-0">${member.name}</h4>
                <p class="badge ms-4"><em>${member.role}</em></p>
              </div>
              <p class="text-white mb-0">${member.desc}</p>
            </div>
            <div class="team-block-image-wrap">
              <img src="${member.img}" class="team-block-image img-fluid" alt="${member.name}">
            </div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", html);
    });
  }
});

// DINAMIČKI ISPIS CENOVNIKA

const menuData = [
    {
        title: "Doručak",
        items: [
            { name: "Palačinke", price: "450 RSD" },
            { name: "Vafl", price: "550 RSD" },
            { name: "Tortilja sa piletinom", price: "590 RSD" },
            { name: "Sendvič sa pršutom", price: "450 RSD" },
            { name: "Banana hleb", price: "690 RSD" }
        ]
    },
    {
        title: "Kafa",
        items: [
            { name: "Crna Kafa", price: "190 RSD" },
            { name: "Espresso", price: "220 RSD" },
            { name: "Espresso sa mlekom", price: "250 RSD" },
            { name: "Cappuccino", price: "270 RSD" },
            { name: "Nes kafa", price: "270 RSD" }
        ]
    }
];

const menuContainer = document.getElementById("menu-container");
menuData.forEach(section => {
    const col = document.createElement("div");
    col.className = "col-lg-6 col-12 mb-4 mb-lg-0";
    const wrap = document.createElement("div");
    wrap.className = "menu-block-wrap";
    const titleDiv = document.createElement("div");
    titleDiv.className = "text-center mb-4 pb-lg-2";
    titleDiv.innerHTML = `<h4 class="text-white">${section.title}</h4>`;
    wrap.appendChild(titleDiv);
    section.items.forEach((item, index) => {
        const menuBlock = document.createElement("div");
        menuBlock.className = "menu-block" + (index % 2 !== 0 ? " my-4" : "");

        menuBlock.innerHTML = `
            <div class="d-flex">
                <h6>${item.name}</h6>
                <span class="underline"></span>
                <strong class="ms-auto">${item.price}</strong>
            </div>
            <div class="border-top mt-2 pt-2"></div>
        `;
        wrap.appendChild(menuBlock);
    });

    col.appendChild(wrap);
    menuContainer.appendChild(col);
});

/* DINAMIČKI ISPIS RECENZIJA */

document.addEventListener("DOMContentLoaded", () => {
  const reviews = [
    {
      name: "Anja",
      role: "Gost",
      img: "images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg",
      text: "Kafa je odlična, osoblje prijatno, a atmosfera topla i opuštajuća; mesto je savršeno za kratke pauze i druženja sa prijateljima.",
      rating: 4.5
    },
    {
      name: "Boban",
      role: "Gost",
      img: "images/reviews/senior-man-white-sweater-eyeglasses.jpg",
      text: "Prostor je uređen sa stilom, kolačići su divni, a muzika i svetlo stvaraju prijatnu, opuštajuću atmosferu za sve goste.",
      rating: 4.5
    },
    {
      name: "Irena",
      role: "Gost",
      img: "images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
      text: "Stabilan Wi-Fi i prijatan ambijent čine ovo mesto savršenim za kratke pauze ili rad van kuće.",
      rating: 5.0
    }
  ];

  const reviewsContainer = document.getElementById("reviews-container");

  if (reviewsContainer) {
    reviews.forEach((review, index) => {
      const sideClass = index % 2 === 0 ? "timeline-container-left" : "timeline-container-right";

      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(i <= Math.floor(review.rating) ? '<i class="bi-star-fill"></i>' : '<i class="bi-star"></i>');
      }

      const html = `
        <div class="timeline-container ${sideClass}">
          <div class="timeline-content">
            <div class="reviews-block">
              <div class="reviews-block-image-wrap d-flex align-items-center">
                <img src="${review.img}" class="reviews-block-image img-fluid" alt="${review.text}">
                <div>
                  <h6 class="text-white mb-0">${review.name}</h6>
                  <em class="text-white">${review.role}</em>
                </div>
              </div>
              <div class="reviews-block-info">
                <p>${review.text}</p>
                <div class="d-flex border-top pt-3 mt-4">
                  <strong class="text-white">${review.rating} <small class="ms-2">Ocena</small></strong>
                  <div class="reviews-group ms-auto">
                    ${stars.join("")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      reviewsContainer.insertAdjacentHTML("beforeend", html);
    });
  }
});

/* VALIDACIJA KONTAKT FORME */

document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("contactForm") || document.querySelector(".contact-form");
  if (!form) {
    console.error("Forma nije pronađena. Proveri da li forma ima id='contactForm' ili klasu 'contact-form'.");
    return;
  }

  const find = (id, sel) => document.getElementById(id) || form.querySelector(sel);

  const nameInput = find("name", 'input[name="name"]');
  const emailInput = find("email", 'input[name="email"]');
  const phoneInput = find("phone", 'input[name="phone"]');
  const messageInput = find("message", 'textarea[name="message"]');

  function ensureErrorEl(id, inputEl) {
    const errId = id + "Error";
    let err = document.getElementById(errId);
    if (!err) {
      err = document.createElement("p");
      err.className = "error";
      err.id = errId;
      if (inputEl && inputEl.parentNode) {
        inputEl.parentNode.insertBefore(err, inputEl.nextSibling);
      } else {
        form.appendChild(err);
      }
    }
    return err;
  }

  const nameError = ensureErrorEl("name", nameInput);
  const emailError = ensureErrorEl("email", emailInput);
  const phoneError = ensureErrorEl("phone", phoneInput);
  const messageError = ensureErrorEl("message", messageInput);

  let successMessage = document.getElementById("successMessage");
  if (!successMessage) {
    successMessage = document.createElement("div");
    successMessage.id = "successMessage";
    form.appendChild(successMessage);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // REGEX
    const nameRegex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)?$/;

    const emailRegex = /(@gmail\.com|@yahoo\.com|@ict\.edu\.rs)$/;

    const name = (nameInput && nameInput.value || "").trim();
    const email = (emailInput && emailInput.value || "").trim();
    const message = (messageInput && messageInput.value || "").trim();

    [nameError, emailError, messageError].forEach(el => { if (el) el.textContent = ""; });
    successMessage.textContent = "";
    successMessage.style.color = "";

    let valid = true;

    if (!name || !nameRegex.test(name)) {
      nameError.textContent = "Unesite svoje ime (prvo slovo veliko).";
      if (nameInput) nameInput.focus();
      valid = false;
    }

    if (!email || !emailRegex.test(email)) {
      emailError.textContent = "Unesite važeći email (npr. vaseime@gmail.com).";
      if (valid && emailInput) emailInput.focus();
      valid = false;
    }

    if (!message || message.length < 10) {
      messageError.textContent = "Poruka mora imati najmanje 10 karaktera.";
      if (valid && messageInput) messageInput.focus();
      valid = false;
    }

    if (!valid) return;
    successMessage.textContent = "Vaša poruka je poslata!";
    form.reset();
  });

});

 // VALIDACIJA FORME ZA REZERVACIJU

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("booking-form-name").value.trim();
    const phone = document.querySelector('input[name="booking-form-phone"]').value.trim();
    const time = document.querySelector('input[name="booking-form-time"]').value;
    const date = document.getElementById("booking-form-date").value;
    const number = document.getElementById("booking-form-number").value;

    // REGEX
    const nameRegex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)?$/;
    const phoneRegex = /^[0-9]{9,15}$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const numberRegex = /^[1-9][0-9]*$/;

    let valid = true;

    if (!nameRegex.test(name)) {
        document.getElementById("nameError").innerText = "Unesite ime (prvo slovo veliko).";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").innerText = "Unesite validan broj telefona (min 9, max 15 cifara).";
        valid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

if (!time) {
    document.getElementById("timeError").innerText = "Izaberite vreme.";
    valid = false;
} else {
    const [hours, minutes] = time.split(":").map(Number);
    if (hours < 12 || hours > 21) {
        document.getElementById("timeError").innerText = "Rezervacije su moguće samo od 12:00 do 21:00.";
        valid = false;
    } else {
        document.getElementById("timeError").innerText = "";
    }
}
if (!date) {
    document.getElementById("dateError").innerText = "Izaberite datum.";
    valid = false;
} else {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0,0,0,0);

    if (selectedDate < today) {
        document.getElementById("dateError").innerText = "Datum ne sme biti iz prošlosti.";
        valid = false;
    } else {
        document.getElementById("dateError").innerText = "";
    }
}

    if (!numberRegex.test(number)) {
        document.getElementById("numberError").innerText = "Unesite validan broj ljudi (1 ili više).";
        valid = false;
    } else {
        document.getElementById("numberError").innerText = "";
    }

    if (valid) {
        document.getElementById("bookingSuccess").innerText = "Rezervacija je uspešno poslata!";
        this.reset();
    } else {
        document.getElementById("bookingSuccess").innerText = "";
    }
})

