import styled from 'styled-components'
import { theme } from '../../theme'

export default function Main() {
  return (
    <MainStyled>Main</MainStyled>
      
  )
}


const MainStyled = styled.div`
      background-color: ${theme.colors.white};
      box-shadow: 0 8px 20px 8px rgba(0,0,0, 0.2) inset;
      flex: 1; // permet d'utiliser toute la page de flex
      border-radius : 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} ;
`
    
