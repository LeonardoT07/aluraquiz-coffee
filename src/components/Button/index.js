import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;
    
    width: 100%;
    padding: 7px 10px;
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    outline: 0;
    transition: .25s;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${({ theme }) => `${theme.colors.primary}90`};
    }

    &:disabled{
        cursor: not-allowed;
        background-color: ${({ theme }) => `${theme.colors.primary}60`};
    }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
