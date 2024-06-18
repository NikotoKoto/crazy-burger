import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import { IoChevronDownSharp, IoChevronUp } from "react-icons/io5";
import { theme } from "../../../../theme";

export default function AdminTab({ isCollapsed, setIsCollapsed}) {

  //state

  //comportement
const handleClick = ()=>{
  console.log("bonjour", isCollapsed)
  setIsCollapsed(!isCollapsed)
}
  //render
  return (
    <AdminTabStyled>
      <Tab className={isCollapsed ? "is-actived" : ""} Logo={isCollapsed ? <IoChevronUp/> : <IoChevronDownSharp/>} onClick={handleClick}/>

    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`

  display: flex;
  padding: 0 20px;

  .is-actived{
    background: ${theme.colors.background_dark};
    border-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }

`;
