
import styled from 'styled-components'
import {theme} from "../../../../theme/index.jsx"
export default function AdminPanel() {
  return (
    <AdminPanelStyled>
        <p> Ajouter un produit</p>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
background-color: ${theme.colors.white};
  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtle};
`

  