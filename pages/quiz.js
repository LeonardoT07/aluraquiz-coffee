/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import LoadingWidget from '../src/components/LoadingWidget';
import QuizResult from '../src/components/QuizResult';

function QuestionWidget({
  question, questionIndex, totalQuestions, onSubmit,
}) {
  const questionId = `question___${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeindex) => {
            const alternativeID = `alternative__${alternativeindex}`;
            return (
              <Widget.Alternativa
                as="label"
                htmlFor={alternativeID}
              >
                <input
                  style={{
                    marginRight: '12px',
                  }}
                  id={alternativeID}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Alternativa>
            );
          })}
          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualiza = willUpdate
  // morre = willUnmount

  // nasce = didMount (só irá chamar uma vez, na hora que o componente acaba de montar)
  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 5 * 1000);
  }, []); // o array irá executar a funcao quando o que estiver dentro dele mudar, ou seja, está vazio, só ira executar uma vez

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;

    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>

      {screenState === screenStates.QUIZ && (
        <QuizContainer>
          <QuizLogo />
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        </QuizContainer>
      )}
      {screenState === screenStates.LOADING && (
        <QuizContainer>
          <QuizLogo />
          <LoadingWidget />
        </QuizContainer>
      )}
      {screenState === screenStates.RESULT && (
        <QuizContainer>
          <QuizLogo />
          <QuizResult />
        </QuizContainer>
      )}

      <GitHubCorner projectUrl="https://github.com/LeonardoT07" />
    </QuizBackground>
  );
}
