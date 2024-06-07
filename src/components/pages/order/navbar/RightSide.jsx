import { useParams } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useContext } from "react";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";
import AdminPanel from "../admin/AdminPanel"
import OrderContext from "../../../../context/OrderContext";
export default function RightSide({ IconNav, ...restProps }) {
  //state
  const { username } = useParams();
 const {isModeAdmin, setisModeAdmin} = useContext(OrderContext)
  //comportement
  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setisModeAdmin(!isModeAdmin);
  };


 
    
  
  //render
  return (
    <RightSideStyled className="toggle-button">
      <ToggleButton
        labelIfUnchecked="Activer le mode Admin"
        labelIfChecked="Désactiver le mode Admin"
        onToggle={displayToastNotification}
        isChecked={isModeAdmin}
             />
      <Profile username={username} />
      {IconNav && IconNav}
      <ToastAdmin />
          
      
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  display: flex;
  align-items: center;

  .iconNav {
    width: 40px;
    height: 40px;
    color: ${theme.colors.greyMedium};
  }
`;
