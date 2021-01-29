/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */

/*
    Arquivo sem USO!!!!!
*/

/*
    Arquivo sem USO!!!!!
*/

/*
    Arquivo sem USO!!!!!
*/
import React from 'react';
import Widget from '../Widget';

function QuizResult({ results }) {
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" */}
        <h3>
          {'Você acertou: '}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)}
          {' de 5'}
        </h3>
      </Widget.Header>
      <Widget.Content>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true
                ? 'Acertou'
                : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

export default QuizResult;
