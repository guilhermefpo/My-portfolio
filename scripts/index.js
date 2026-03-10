// EmailJS

emailjs.init("HT8oi2t04uQRp3Lz9");

const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitButton.textContent = "Enviando...";

    const urlParams = new URLSearchParams(window.location.search);
    const templateParams = {
      subject: urlParams.get("subject") || form.subject.value,
      name: urlParams.get("name") || form.name.value,
      message: urlParams.get("message") || form.message.value,
      email: urlParams.get("email") || form.email.value,
    };

    const serviceID = "service_viqe6lt";
    const templateID = "template_sfafh0o";

    emailjs
      .send(serviceID, templateID, templateParams)
      .then(() => {
        if (msg) msg.innerHTML = "Mensagem enviada com sucesso!";
        form.reset();
      })
      .catch((err) => {
        console.error("Erro no envio:", err);
        if (msg) msg.innerHTML = "Erro ao enviar mensagem. Tente novamente.";
      })
      .finally(() => {
        submitButton.textContent = "Enviar";
      });
  });

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("subject") || urlParams.get("name")) {
    form.dispatchEvent(new Event("submit"));
  }
}
