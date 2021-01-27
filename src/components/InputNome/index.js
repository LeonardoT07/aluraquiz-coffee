import styled from 'styled-components';

const InputNome = styled.input.attrs('onChange', 'placeholder')`
    width: 100%;
    color: ${({ theme }) => theme.colors.torrao};
    
    font-size: 15px;
    padding: 7px 10px;
    border: 1px solid ${({ theme }) => theme.colors.darkYellow} !important;
    border-radius: 4px;
    margin-bottom: 10px;
    font-family: 'Maven Pro', sans-serif;

    &:focus {
        border: 0;
        color: ${({ theme }) => theme.colors.torrao};
    }
`;

export default InputNome;
