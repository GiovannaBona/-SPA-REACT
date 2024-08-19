import React from 'react';
import { styled } from 'styled-components';

// Componente de produto individual
const Produto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ccc;
  :last-child {
    border-bottom: none;
  }
`;

const NomeProduto = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PrecoProduto = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #666;
  margin-bottom: 10px;
`;

const DescricaoProduto = styled.p`
  font-size: 14px;
  color: #999;
`;

// Componente de lista de produtos
const ListaProdutos = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProdutoItem = ({ produto }) => {
  return (
    <Produto>
      <NomeProduto>{produto.nome}</NomeProduto>
      <PrecoProduto>R$ {produto.preco}</PrecoProduto>
      <DescricaoProduto>{produto.descricao}</DescricaoProduto>
    </Produto>
  );
};

const ListaDeProdutos = () => {
  const produtos = [
    { id: 1, nome: 'Produto 1', preco: 19.99, descricao: 'Descrição do produto 1' },
    { id: 2, nome: 'Produto 2', preco: 29.99, descricao: 'Descrição do produto 2' },
    { id: 3, nome: 'Produto 3', preco: 39.99, descricao: 'Descrição do produto 3' },
  ];

  return (
    <ListaProdutos>
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </ListaProdutos>
  );
};

export default ListaDeProdutos;