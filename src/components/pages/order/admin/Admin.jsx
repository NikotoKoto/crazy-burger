import styled from "styled-components";

import { theme } from "../../../../theme";
import AdminTab from "./AdminTab";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  return (
    <AdminStyled>

      <AdminTab />
      <AdminPanel />
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
    bottom: 0;
  left: 0;
  right: 0;
  height: 300px;

`;
