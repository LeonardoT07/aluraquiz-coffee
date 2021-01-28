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
import QuizForm from '../src/components/QuizForm';

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
              {`Pergunta 0${index + 1}: `}
              {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question, questionIndex, totalQuestions, onSubmit, addResult,
}) {
  const [selectedAlternativa, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const [hasAlternativeSelected, setHasAlternativeSelected] = React.useState(false);
  const questionId = `question___${questionIndex}`;
  const isCorrect = selectedAlternativa === question.answer;

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

        <QuizForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);

            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setHasAlternativeSelected(false);
              setIsQuestionSubmited(false);
            }, 2 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeindex) => {
            const alternativeID = `alternative__${alternativeindex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternativa === alternativeindex;

            return (
              <Widget.Alternativa
                as="label"
                key={alternativeID}
                htmlFor={alternativeID}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{
                    marginRight: '12px',
                  }}
                  id={alternativeID}
                  name={questionId}
                  onChange={() => {
                    setHasAlternativeSelected(true);
                    setSelectedAlternative(alternativeindex);
                  }}
                  type="radio"
                />

                {alternative}
              </Widget.Alternativa>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          {isQuestionSubmited && isCorrect && <p>Muito bem, está fazendo um ótimo café!</p>}
          {isQuestionSubmited && !isCorrect && <p>Humm... desse jeito vai queimar o café!</p>}
        </QuizForm>
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

  const [results, setResults] = React.useState([]);

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  // [React chama de: Efeitos || Effects]
  // React.useEffect
  // atualiza = willUpdate
  // morre = willUnmount

  // nasce = didMount (só irá chamar uma vez, na hora que o componente acaba de montar)
  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 4.5 * 1000);
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

      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.QUIZ
          && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
          )}

        {screenState === screenStates.LOADING && <LoadingWidget /> }

        {screenState === screenStates.RESULT && <QuizResult results={results} /> }

      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/LeonardoT07" />
    </QuizBackground>
  );
}
