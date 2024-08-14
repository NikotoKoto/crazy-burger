
import styled from 'styled-components'
import { theme } from '../../theme'

export default function Container({children}) {
  return (
    <ContainerStyled>{children}</ContainerStyled>
  )
}

const ContainerStyled = styled.div`

    
    height: 70px;
    background: ${theme.colors.dark};
    

    
  
`