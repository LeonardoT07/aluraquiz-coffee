import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
// import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import LinkQuiz from '../src/components/LinkQuiz';
import BtJogar from '../src/components/BtJogar';
import InputNome from '../src/components/InputNome';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [nome, setNome] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push(`/quiz?name=${nome}`);
            }}
            >
              <InputNome
                onChange={(e) => {
                  setNome(e.target.value);
                }}
                placeholder="Digite seu nome para começar!"
                required
              />
              <BtJogar
                type="submit"
                disabled={nome.length === 0}
              >
                Jogar
              </BtJogar>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            {/* eslint-disable-next-line max-len */}
            <p>Dá uma olhada nos Quizes que a comunidade fez durante a Imersão React Next.js da Alura:</p>

            <LinkQuiz
              href="https://quiz-pokemon.vercel.app/"
              target="_blank"
            >
              Quiz Pokemon
            </LinkQuiz>
            <LinkQuiz
              href="https://rpdr-quiz.vercel.app/"
              target="_blank"
            >
              Quiz Rupaulshttps://internet-quiz.johnmaroeli.vercel.app/
            </LinkQuiz>
            <LinkQuiz
              href="https://internet-quiz.johnmaroeli.vercel.app/"
              target="_blank"
            >
              Quiz Internet
            </LinkQuiz>
            <LinkQuiz
              href="https://internet-quiz.johnmaroeli.vercel.app/"
              target="_blank"
            >
              Quiz Internet
            </LinkQuiz>
            <LinkQuiz
              href="https://hogwarts-quiz.juliocarvalhos.vercel.app/"
              target="_blank"
            >
              Quiz Hodwarts
            </LinkQuiz>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/LeonardoT07" />
    </QuizBackground>
  );
}
