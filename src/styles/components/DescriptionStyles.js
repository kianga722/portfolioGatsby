import styled from 'styled-components';

const DescriptionStyles = styled.div`
  margin-left: 1rem;
  p {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    margin: 1.5rem 0 0 0;
    p {
      font-size: 1.5rem;
    }
  }
`

export default DescriptionStyles;