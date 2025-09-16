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