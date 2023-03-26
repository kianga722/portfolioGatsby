import styled from 'styled-components';

const ResumeBtnStyles = styled.article`
    display: block;

    a {
        padding: 0.375rem 0.75rem;

        background: ${props => props.theme.black};
        color: ${props => props.theme.highlight};
        font-weight: 700;
        border: 1px solid ${props => props.theme.highlight};
        border-radius: 0.25rem;
        transition: all 0.15s ease;

        &:hover {
            transform: scale(1.05);
        }
    }

`

export default ResumeBtnStyles;