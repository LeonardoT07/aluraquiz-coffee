import React from 'react';

import Widget from '../Widget';

function QuizResult() {
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" */}
        <h3>
          Você acertou:
        </h3>
      </Widget.Header>
      <Widget.Content>
        <h2>
          0 de 5 (Resultado fake)
        </h2>
        <p>
          Ainda melhorando os resultados
        </p>
      </Widget.Content>
    </Widget>
  );
}

export default QuizResult;
