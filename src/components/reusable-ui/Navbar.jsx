import {  useParams } from 'react-router-dom'
import styled from 'styled-components'
import RightSide from './navbarContent/RightSide'
import LeftSide from './navbarContent/LeftSide'
import { FaRegUserCircle } from "react-icons/fa";
import { theme } from '../../theme';

export default function Navbar() {

  //state
  
  //comportement

  //render
  return (
    <NavbarStyled>
      <LeftSide/>
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
      border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0 0;
      box-shadow: 0 0 5px ${theme.colors.greyDark}
    
`
