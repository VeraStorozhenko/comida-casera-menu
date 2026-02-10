let currentPage = 0;
const pages = document.querySelectorAll(".page");
const totalPages = pages.length;

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });

  updateButtons();
}

function updateButtons() {
  if (!startBtn) return;
  startBtn.style.display = currentPage === 0 ? "block" : "none";
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
    updateButtons();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    showPage(currentPage);
    updateButtons();
  }
});

/* 🍽 Ver menú */
if (startBtn) {
  console.log("Start button found");
  startBtn.addEventListener("click", () => {
    console.log("Start button clicked");
    currentPage = 1;
    showPage(currentPage);
    updateButtons();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const dishImages = document.querySelectorAll('.dish img');
  console.log("Dish images found:", dishImages.length);

  dishImages.forEach(img => {
    console.log('Dish image found:', img);
    img.addEventListener('click', () => {
      console.log('clicked:', img.alt);
      const modal = document.createElement('div');
      modal.className = 'modal';
      modal.innerHTML = `<img src="${img.src}" alt="${img.alt}"><span class="close">×</span>`;
      document.body.appendChild(modal);

      modal.querySelector('.close').addEventListener('click', () => {
        modal.remove();
      });
    });
  });
});

document.querySelector('.cup').addEventListener('mouseover', function() {
  this.style.transform = 'translateY(-5px) rotate(-2deg)';
});
document.querySelector('.cup').addEventListener('mouseout', function() {
  this.style.transform = '';
});

document.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.eye');
  
  eyes.forEach(eye => {
    const pupil = eye.querySelector('.pupil');
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width/2;
    const eyeCenterY = rect.top + rect.height/2;

    const dx = e.clientX - eyeCenterX;
    const dy = e.clientY - eyeCenterY;
    const angle = Math.atan2(dy, dx);

    const radius = 3;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const chatToggle = document.querySelector(".chat-toggle");
  const chatWindow = document.querySelector(".chat-window");
  const chatClose = document.querySelector(".chat-close");
  const sendBtn = document.querySelector(".send-btn");
  const input = document.querySelector(".chat-input input");
  const messages = document.querySelector(".chat-messages");

  chatToggle.addEventListener("click", () => {
    chatWindow.style.display = "flex";
  });

  chatClose.addEventListener("click", () => {
    chatWindow.style.display = "none";
  });

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
      addMessage(getBotReply(text), "bot");
    }, 1000);
  }

  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function addMessage(text, sender) {
    const message = document.createElement("div");
    message.textContent = text;
    message.style.marginBottom = "8px";
    message.style.padding = "6px 8px";
    message.style.borderRadius = "8px";
    message.style.maxWidth = "80%";

    if (sender === "user") {
      message.style.background = "#ffb703";
      message.style.alignSelf = "flex-end";
    } else {
      message.style.background = "#eee";
      message.style.alignSelf = "flex-start";
    }

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function getBotReply(userText) {
    userText = userText.toLowerCase();

    if (userText.includes("hola"))
      return "¡Hola! 😊 ¿En qué puedo ayudarte?";

    if (userText.includes("vegetar"))
      return "Sí 🥕 Tenemos arroz con verduras y crema de verduras.";

    if (userText.includes("precio"))
      return "Los precios dependen del menú del día.";

    return "Gracias por tu mensaje 💛 Te responderemos pronto.";
  }

  function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    addMessage(getBotReply(text), "bot");
  }, 1500);
}

function showTypingIndicator() {
  const typing = document.createElement("div");
  typing.textContent = "Escribiendo";
  typing.classList.add("typing");
  typing.id = "typing-indicator";

  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById("typing-indicator");
  if (typing) typing.remove();
}
});

showPage(currentPage);
updateButtons();
