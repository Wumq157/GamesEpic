document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página após o envio do formulário
    
    // Obtém os dados do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('fone').value;
    var mensagem = document.getElementById('msm').value;
    var contato = document.querySelector('input[name="contato"]:checked').value;
    var horario = document.querySelector('select[name="horario"]').value;
    var receberNovidades = document.getElementById('novidades').checked ? 'Sim' : 'Não';
    
    // Abre uma nova janela com as informações enviadas
    var novaJanela = window.open('', '_blank');
    novaJanela.document.write('<h2>Dados do Formulário</h2>');
    novaJanela.document.write('<p>Nome: ' + document.createTextNode(nome).textContent + '</p>');
    novaJanela.document.write('<p>Email: ' + document.createTextNode(email).textContent + '</p>');
    novaJanela.document.write('<p>Telefone: ' + document.createTextNode(telefone).textContent + '</p>');
    novaJanela.document.write('<p>Mensagem: ' + document.createTextNode(mensagem).textContent + '</p>');
    novaJanela.document.write('<p>Contato preferido: ' + document.createTextNode(contato).textContent + '</p>');
    novaJanela.document.write('<p>Horário preferido: ' + document.createTextNode(horario).textContent + '</p>');
    novaJanela.document.write('<p>Gostaria de receber novidades por email? ' + document.createTextNode(receberNovidades).textContent + '</p>');
    novaJanela.document.close();
  });
  