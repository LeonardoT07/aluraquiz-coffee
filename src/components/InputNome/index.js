import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input.attrs('onChange', 'placeholder')`
    width: 100%;
    color: ${({ theme }) => theme.colors.torrao};
    
    font-size: 15px;
    padding: 7px 10px;
    border: 1px solid ${({ theme }) => theme.colors.primary} !important;
    border-radius: 4px;
    margin-bottom: 15px;
    outline: 0;

    &:focus {
        border: 0;
        color: ${({ theme }) => theme.colors.torrao};
    }
`;

// eslint-disable-next-line react/prop-types
export default function InputNome({ onChange, placeholder, ...props }) {
  return (
    <div>
      <Input
        onChange={onChange}
        placeholder={placeholder}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

InputNome.defaultProps = {
  value: '',
};

InputNome.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
