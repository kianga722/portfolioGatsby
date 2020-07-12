import styled from 'styled-components';

const NavStyles = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;

  background-color: #abcbff;
  .nav-fixed {
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    margin: 0 auto;

    font-size: 1.2rem;

    .email-address {
      display: none;
    }

    .brand {
      display: flex;
      align-items: center;
    
      font-weight: 700;
    }

    .email,
    .github {
      display: inline-block;
      padding: 0.375rem 0.55rem;

      border: 1px solid black;
      border-radius: 0.25rem;
      transition: all 0.15s ease;
    }

    a.email {
      margin-right: 10px;
    }

    .brand:hover,
    .email:hover,
    .github:hover {
      color: green;
      border-color: green;
      transform: scale(1.05);
    }

    .fa-github {
      margin-right: 5px;
    }

    .highlight:hover {
      text-shadow: 0 0 3px #ffcfcf;
    }
  }

    @media (max-width: 750px) {
      .nav-fixed {
        .email-address {
          display: block;
          margin: 0 auto;
          font-weight: 700;
        }

        .brand,
        .email-wrapper,
        .github {
          display: none;
        }
      }
    }

  }
`

export default NavStyles;