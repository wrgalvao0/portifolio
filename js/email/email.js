// Inicializa o EmailJS com a sua chave de API
emailjs.init("809i1U5skqwGS0ddoT1ux"); // Substitua pela chave gerada no painel do EmailJS

// Função para enviar o e-mail
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    from_name: document.getElementById("email").value,
    from_email: document.getElementById("whatsapp").value,
    message: document.getElementById("mensagem").value,
  };

  emailjs.send("service_a6z9his", "template_q2vnpp4", formData)
    .then(function(response) {
      console.log('Mensagem enviada com sucesso!', response);
      alert('Mensagem enviada com sucesso!');
    }, function(error) {
      console.log('Erro ao enviar mensagem:', error);
      alert('Erro ao enviar mensagem.');
    });
});