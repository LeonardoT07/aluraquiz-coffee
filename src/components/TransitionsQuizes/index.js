/* eslint-disable react/prop-types */
import React from 'react';
import Widget from '../Widget';

function TransitionsQuizes({ projectName, gitHubUser }) {
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" */}
        <h3>
          {`Carregando ${projectName} de  ${gitHubUser}...`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
        src="https://media.giphy.com/media/5Ztn33chuvutW/giphy.gif"
      />
    </Widget>
  );
}

export default TransitionsQuizes;
