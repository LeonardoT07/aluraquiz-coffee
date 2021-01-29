import React from 'react';

export default function QuizDaGaleraPage(props) {
  return (
    <div>
      Desafio da próxima aula junto com as animações
    </div>
  );
}

export async function getServerSideProps(context) {
  const dbExterno = await fetch('https://aluraquiz-coffee.leonardot07.vercel.app/api/db')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((errServer) => {
      console.log('Erro do servidor: ', errServer);
    });

  console.log('dbExterno: ', dbExterno);
  console.log('Infos next: ', context.query.id);
  return {
    props: {
      dbExterno,
    },
  };
}
