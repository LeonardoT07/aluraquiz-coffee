import styled from 'styled-components';

const QuizForm = styled.form`
    label {
        &[data-selected="true"]{
            background-color: ${({ theme }) => theme.colors.primary};
        
            &[data-status="SUCCESS"] {
                background-color: ${({ theme }) => theme.colors.success};
            }

            &[data-status="ERROR"] {
                background-color: ${({ theme }) => theme.colors.wrong};
            }
        }
        &:focus {
            opacity: 1;
        }
    }
`;

export default QuizForm;
