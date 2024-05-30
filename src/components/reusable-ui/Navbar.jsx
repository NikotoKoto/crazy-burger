import {  useParams } from 'react-router-dom'
import styled from 'styled-components'
import RightSide from './navbarContent/RightSide'
import { FaRegUserCircle } from "react-icons/fa";
import { theme } from '../../theme';
import Logo from "../reusable-ui/Logo";
export default function Navbar() {

  //state
  
  //comportement

  //render
  return (
    <NavbarStyled>
      <Logo/>
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

    
`
