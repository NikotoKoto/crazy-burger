import styled from 'styled-components'
import { theme } from '../../theme'

export default function Main() {
  return (
    <MainStyled>Main</MainStyled>
      
  )
}


const MainStyled = styled.div`
      background-color: green;
      box-shadow: 0 0 50px ${theme.colors.greyDark} inset;
      flex: 1; // permet d'utiliser toute la page de flex 
`
    
