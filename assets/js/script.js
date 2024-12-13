(function () {
  document.querySelectorAll(".control").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-ctrl").classList.remove("active-ctrl")
      this.classList.add("active-ctrl")
      document.querySelector(".active").classList.remove("active")
      document.getElementById(button.dataset.id).classList.add("active")
    })
  })
  document.querySelector(".theme-switch").addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
  })
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impedisce il comportamento predefinito
  });

  document.getElementById("submitButton").addEventListener("click", async function () {
    const formMessage = document.getElementById("form-message");
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const oggetto = document.getElementById("oggetto");
    const testo = document.getElementById("testo");

    // Validazione
    let valid = true;
    let errorMessage = "";

    [nome, email, oggetto, testo].forEach((field) => {
      field.style.border = "";
    });

    if (nome.value.trim() === "") {
      valid = false;
      errorMessage += "Il nome è obbligatorio.\n";
      nome.style.border = "2px solid red";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "" || !emailRegex.test(email.value)) {
      valid = false;
      errorMessage += "Inserisci un'email valida.\n";
      email.style.border = "2px solid red";
    }

    if (oggetto.value.trim() === "") {
      valid = false;
      errorMessage += "L'oggetto è obbligatorio.\n";
      oggetto.style.border = "2px solid red";
    }

    if (testo.value.trim() === "") {
      valid = false;
      errorMessage += "Il messaggio è obbligatorio.\n";
      testo.style.border = "2px solid red";
    }

    if (!valid) {
      alert(errorMessage);
      return;
    }

    // Invio dei dati con fetch
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mdorjgbq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        formMessage.style.display = "block";
        formMessage.style.color = "green";
        formMessage.textContent = "Messaggio inviato con successo!";
        form.reset();
      } else {
        throw new Error("Errore nell'invio del modulo.");
      }
    } catch (error) {
      formMessage.style.display = "block";
      formMessage.style.color = "red";
      formMessage.textContent = "Si è verificato un errore. Riprova.";
    }
  });
})()