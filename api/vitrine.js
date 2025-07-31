const express = require('express');
const router = express.Router();
const pool = require('../db');

// Rota da API de produtos
router.get('/produtos', async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT id, nome, descricao, preco, categoria, imagem_url 
      FROM produtos 
      WHERE estoque > 0
      ORDER BY data_cadastro DESC
      LIMIT 20
    `);
    
    const produtos = rows.map(produto => ({
      ...produto,
      preco: Number(produto.preco).toFixed(2)
    }));
    
    res.json(produtos);
  } catch (err) {
    console.error('Erro no servidor:', err);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

module.exports = router;
