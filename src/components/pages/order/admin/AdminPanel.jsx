import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "./TabConfig";
import { theme } from "../../../../theme";
import { EMPTY_PRODUCT } from "../../../../enums/product";

export default function AdminPanel() {
  const { currentTabSelected,productSelected } = useContext(OrderContext);

  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT
  const tabs = getTabsConfig(hasAlreadyBeenClicked)
  const tabSelected = getTabSelected(tabs, currentTabSelected);

  return (
    <AdminPanelStyled>
      {tabSelected && tabSelected.Content} </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 251px;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  border-top: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`;
