import Popup from 'reactjs-popup';
import styled from 'styled-components';

const SPopup= styled(Popup)`
  &-content {
    margin: auto;
    color: ${({ theme }) => theme.colors.contrastText};
    background: ${({ theme }) => theme.colors.mainBg};
    width: 50%;
    padding: 5px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  &-arrow {
    color: ${({ theme }) => theme.colors.secundary};;
  }
  [role='tooltip']&-content {
    width: 250px;
  }

  &-overlay {
    background: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 344px) and (min-width:280px){
    &-content{
      padding:0;
    }
    }`

export default SPopup;