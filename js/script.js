// ODONTO PRIME — interações do site

// MENU PARA CELULAR
const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    });
  });
}

// ANO AUTOMÁTICO NO RODAPÉ
const year = document.querySelector("#currentYear");

if (year) {
  year.textContent = new Date().getFullYear();
}

// AGENDAMENTO PELO WHATSAPP
const bookingForm = document.querySelector("#whatsappBooking");
const feedback = document.querySelector("#formFeedback");

// IMPORTANTE:
// Substitua pelo número real da clínica.
// Use código do país + DDD + número, somente números.
// Exemplo fictício: 5531999999999

const whatsappNumber = "5531999999999";

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const servico = document.querySelector("#servico").value;
    const periodo = document.querySelector("#periodo").value;

    if (!nome || !servico || !periodo) {
      if (feedback) {
        feedback.textContent = "Preencha todos os campos para continuar.";
      }

      return;
    }

    // Verifica se o número fictício ainda está configurado
    if (whatsappNumber === "5531999999999") {
      if (feedback) {
        feedback.textContent =
          "Configure o número correto do WhatsApp no arquivo js/script.js antes de publicar.";
      }

      return;
    }

    const mensagem =
      `Olá! Meu nome é ${nome}.\n` +
      `Gostaria de informações para agendar: ${servico}.\n` +
      `Minha preferência de período é: ${periodo}.\n` +
      `Poderiam me informar os horários disponíveis?`;

    const url =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    if (feedback) {
      feedback.textContent = "";
    }
  });
}
