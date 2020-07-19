import styled from 'styled-components';

const DarkModeToggleStyles = styled.div`
  margin-right: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .light-icon,
  .dark-icon {
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
    }
  }
  .toggle-control {
    position: relative;
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    .dmcheck {
      position: absolute;
      left: -9999px;
    }
    label {
      position : relative ;   
      display : inline-block;   
      width : 40px;   
      height : 20px;   
      background-color: #ff9205;   
      border-radius: 20px;
      cursor: pointer;
      &::after {
        content: '';  
        position: absolute;  
        width: 18px;  
        height: 18px;  
        border-radius: 50%;  
        background-color: white;  
        top: 1px;
        left: 1px; 
        transition: all 0.3s;
      }
    }
    .dmcheck:checked + label::after {  
      left : 20px; 
    }
    .dmcheck:checked + label {  
      background-color: #0013fb;
    }
  }

  @media (max-width: ${props => props.theme.mobileWidth}) {
    margin-right: 0;
  }
`;

export default DarkModeToggleStyles;