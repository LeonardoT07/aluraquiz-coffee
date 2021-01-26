import styled from 'styled-components';

const QuizesGalera = styled.a.attrs('href', 'target')`
    display: block;
    color: ${({ theme }) => theme.colors.torrao};
    background-color: ${({ theme }) => theme.colors.darkYellow};

    font-size: 15px;
    font-weight: 600;
    padding: 7px 10px 7px 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    text-decoration: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darkYellowHover};
    }
`;

export default QuizesGalera;
