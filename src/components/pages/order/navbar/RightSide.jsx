import { useParams } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import { theme } from "../../../../theme";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import {  ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
export default function RightSide({  IconNav, ...restProps }) {
  //state
  const { username } = useParams();
  const [isModeAdmin, setisModeAdmin] = useState(false)
  //comportement
  const displayToastNotification = () =>{
    if (!isModeAdmin){
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
      setisModeAdmin(!isModeAdmin)
}
  //render
  return (
    <RightSideStyled className="toggle-button">
      <ToggleButton
      labelIfUnchecked="Désactiver le mode Admin"
      labelIfChecked="Activer le mode Admin"
      onToggle={displayToastNotification}/>
     <Profile
     username={username}/>
      {IconNav && IconNav}  
      <ToastContainer />
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

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`