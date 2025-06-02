function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

// Inicializa o EmailJS
(function () {
  emailjs.init("pRicgC8zG9631d-pH");
})();

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.elements["name"].value;
  const email = form.elements["email"].value;

  // Enviar email com EmailJS
  emailjs.sendForm("default_service", "template_90gy7se", form)
    .then(function () {
      formMessage.style.color = "white";
      formMessage.textContent = "Inscrição realizada com sucesso! 🚀 Bem-vindo ao SilverGate!";
      form.reset();
    }, function (error) {
      formMessage.style.color = "red";
      formMessage.textContent = "Erro ao enviar sua inscrição. Tente novamente.";
      console.error("EmailJS error:", error);
    });
});









/*
  // Enviar para Google Sheets
  fetch("https://script.google.com/macros/s/AKfycbybZh8_DTtcNicCyFAJ8zHutirEZDwne3Wyyy0roGzZ4hMsAFQZf9w8UhS8O1L3WoL0/exec", {
    method: "POST",
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log("Enviado para o Google Sheets:", data);
    })
    .catch(error => {
      console.error("Erro ao enviar para o Google Sheets:", error);
    });

*/