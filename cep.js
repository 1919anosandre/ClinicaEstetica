function buscarEndereco(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao buscar o CEP");
        }
        return response.json();
      })
      .then(data => {
        if (data.erro) {
          alert("CEP não encontrado!");
        } else {
          console.log(data);
          // Preencher os campos com os dados retornados
          document.getElementById("logradouro").value = data.logradouro;
          document.getElementById("bairro").value = data.bairro;
          document.getElementById("cidade").value = data.localidade;
          document.getElementById("estado").value = data.uf;
        }
      })
      .catch(error => console.error("Erro:", error));
  }
  
  // Exemplo de uso com um botão de busca
  document.getElementById("buscarCepBtn").addEventListener("click", () => {
    const cep = document.getElementById("cep").value.replace(/\D/g, "");
    if (cep.length === 8) {
      buscarEndereco(cep);
    } else {
      alert("CEP inválido!");
    }
  });
  