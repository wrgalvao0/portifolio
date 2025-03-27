emailjs.init("8OqhN0y-l5lqa5FlN"); // Substitua pela chave gerada no painel do EmailJS

// Função para enviar o e-mail
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value,
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