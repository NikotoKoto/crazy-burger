import styled from 'styled-components'
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../../../reusable-ui/Logo";
import { refreshPage } from '../../../../utils/window';
import RightSide from './RightSide';
import { theme } from '../../../../theme';
export default function Navbar() {

  //state
  
  //comportement

  //render
  return (
    <NavbarStyled>
      <Logo
      // Appel de l'util refreshPage
      onClick={refreshPage}
      className="logoNavbar"/>
      <RightSide
      IconNav={<FaRegUserCircle className='iconNav' />
    }/> 
  </NavbarStyled>
  )
}

const NavbarStyled = styled.div`

      background-color: #fff;
      height: 10vh;
      display: flex;
      justify-content: space-between;
      padding: 0 20px 0 20px;
      border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;

    .logoNavbar{
      cursor: pointer;
    }
`
