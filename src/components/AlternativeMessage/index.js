import styled from 'styled-components';

const AlternativeMessage = styled.p`
    color: ${({ theme }) => theme.colors.contrastText};
    font-size: 15px !important;
    font-weight: 700;
    text-align: center;
    padding: 0;
`;

export default AlternativeMessage;
