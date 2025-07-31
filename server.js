// 1. Importar os módulos necessários
const express = require('express');
const mysql = require('mysql2'); // Usando mysql2 (mais simples)
const path = require('path');

// 2. Criar a aplicação Express
const app = express();
app.use(express.json()); // Permite ler JSON do corpo das requisições

// 3. Criar conexão com o MySQL (substitua com seus dados)
const connection = mysql.createConnection({
  host: 'localhost',       // Endereço do servidor
  user: 'root',            // Seu usuário do MySQL
  password: 'asdf',   // Sua senha do MySQL
  database: 'dados'       // Nome do banco criado
});
app.use(express.static(path.join(__dirname, 'arquivos')));

// 5. Criar uma rota básica que consulta o banco
app.get('/pessoas', (req, res) => {
    connection.query('SELECT * FROM pessoas', (err, result)=>{
      res.json(result)
    })
    //res.sendFile(path.join(__dirname, 'arquivos'));
});
// 8. Iniciar o servidor
app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
});
