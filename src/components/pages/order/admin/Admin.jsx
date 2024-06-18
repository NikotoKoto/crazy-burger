import styled from "styled-components";
import AdminTab from "./AdminTab";
import AdminPanel from "./AdminPanel";
import { useState } from "react";

export default function Admin() {

  //state
  const [isCollapsed, setIsCollapsed] = useState(false)
  //comportement

  //render
  return (
    <AdminStyled>

      <AdminTab isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
      {!isCollapsed && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
    bottom: 0;
  left: 0;
  right: 0;


`;
