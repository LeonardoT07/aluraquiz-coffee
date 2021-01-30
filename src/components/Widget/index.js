import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3em;
    margin-bottom: 0;
  }

  h2 {
    font-size: 15px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Alternativa = styled.a`
  outline: 0;
  text-decoration: none;
  font-size: 15px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}80`};
  padding: 7px 10px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .25s;
  display: block;

  &:hover {
    transform: translateX(10px);
  }

  &:hover,
    &:focus {
      background-color: ${({ theme }) => `${theme.colors.primary}90`};
    }
`;

export default Widget;
