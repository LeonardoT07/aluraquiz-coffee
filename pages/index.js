import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import LinkQuiz from '../src/components/LinkQuiz';
import Button from '../src/components/Button';
import InputNome from '../src/components/InputNome';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [nome, setNome] = useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
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
                name="nomeDoUsuario"
                onChange={(e) => { setNome(e.target.value); }}
                placeholder="Digite seu nome para começar!"
                value={nome}
              />
              <Button
                type="submit"
                disabled={nome.length === 0}
              >
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            {/* eslint-disable-next-line max-len */}
            <p>Dá uma olhada nos Quizes que a comunidade fez durante a Imersão React Next.js da Alura:</p>

            {db.external.map((urlQuiz) => {
              const [projectName, gitHubUser] = urlQuiz
                .replace(/\//g, '')
                .replace('https:', '')
                .replace('.vercel.app', '')
                .split('.');

              return (
                <LinkQuiz
                  key={urlQuiz}
                  href={`${urlQuiz}`}
                  target="_blank"
                >
                  {`${gitHubUser}/${projectName}`}
                </LinkQuiz>
              );
            })}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/LeonardoT07" />
    </QuizBackground>
  );
}
