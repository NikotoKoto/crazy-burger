import styled from "styled-components";
import Tab from "../../../reusable-ui/Tab";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
export default function AdminTab() {
  return (
    <AdminTabStyled>
      <Tab Logo={<IoChevronDownSharp/>}/>

    </AdminTabStyled>
  );
}

const AdminTabStyled = styled.div`

  display: flex;
  padding: 0 20px;


`;
