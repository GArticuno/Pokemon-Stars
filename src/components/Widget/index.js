import styled from 'styled-components';


const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
`;

Widget.Name = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  justify-content:center;
  align-items: center;
  padding-top:10px;
  padding-left:10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  
  * {
    margin: 0;
  }
  div{
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 15px;
  }
  #name{
  }
  #ability{
    width:170px;
  }
  
`;

Widget.Gif = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:10px;
  padding-bottom:10px;
  height:150px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

Widget.Item = styled.div`
  padding: 14px 22px 2px 12px;
  div{
    font-size: 15px;
  }
  section{
    display:grid;
    grid-row-gap: 1em;
    grid-column-gap:1em;
    grid-template-columns: 30px 130px 70px;
    align-items: center;
    padding-bottom:10px;
    margin-bottom:5px;
  }
  #icon{
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius:50px;
    height:32px;
    width:32px;
    align-items: center;
  }
`;
Widget.Content = styled.div`
  padding: 14px 22px 32px 12px;
  div{
    font-size: 15px;
  }
  section{
    display:grid;
    grid-row-gap: 1em;
    grid-column-gap:1em;
    grid-template-columns: 140px 140px;
  }
  #moves{
    
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 5px 10px 5px 5px;
    justify-items:center;
    border-radius: 7px;
  }
`;
export default Widget;
