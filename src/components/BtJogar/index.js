import styled from 'styled-components';

const BtJogar = styled.button.attrs('type')`
    display: block;
    width: 100%;
    color: ${({ theme }) => theme.colors.torrao};
    background-color: ${({ theme }) => theme.colors.darkYellow};
    font-size: 15px;
    font-weight: 700;
    padding: 7px 10px;
    border: 0;
    border-radius: 3.5px;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.darkYellowHover};
    }

    &:disabled{
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.colors.darkYellowDisabled};
    }
`;

export default BtJogar;
