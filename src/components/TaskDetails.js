import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

 const descricoes = {
  "Revisar funções em JavaScript": "Praticar funções anônimas, arrow functions e callbacks.",
  "Estudar Arrays e Objetos": "Aprender métodos como map, filter e reduce para manipular dados.",
  "Praticar CSS Flexbox e Grid": "Construir layouts responsivos com alinhamentos avançados.",
  "Criar um CRUD simples": "Desenvolver um app que permita criar, listar, editar e excluir itens.",
  "Explorar Fetch API": "Aprender a consumir dados de uma API usando requisições HTTP.",
  "Trabalhar com módulos": "Organizar o código em diferentes arquivos e importar/exportar funções.",
  "Estudar DOM": "Manipular elementos da página e responder a eventos de usuário.",
  "Aprender Git Branches": "Criar ramificações para testar novas funcionalidades sem quebrar o código.",
  "Usar GitHub Pages": "Publicar um site estático gratuitamente direto do repositório.",
  "Praticar responsividade": "Adaptar layouts para celular, tablet e desktop.",
};


  const descricao =
    descricoes[params.taskTitle] || "Descrição não disponível para esta tarefa.";

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>{descricao}</p>
      </div>
    </>
  );
};

export default TaskDetails;
