import styled from 'styled-components'
import { IoChevronDownSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { theme } from '../../../../theme';


export default function Admin() {
  return (
    <AdminPanelStyled>container
      <div className="zone">
        <button className="premier"><IoChevronDownSharp /></button>
        <button className="deuxieme"> <span><FaPlus /></span> Ajouter un produit</button>
        <button className="troisieme"><span>
          <FaPen />
        </span>
 Modifier un produit</button>
      </div>
      <div className="champ">Ajouter un produit</div>
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
position: absolute;
background-color: white;
border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 250px;

  border: 1px solid black;

  .premier{
    width: 60px;
    height: 43px;
    border-radius: 5px 5px 0 0;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .deuxieme {
    width: 212px;
    height: 43px;
    border-radius: 5px 5px 0 0;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    span {
      margin-right: 8px;
    }
  }
  
  .troisieme {
    width: 212px;
    height: 43px;
    border-radius: 5px 5px 0 0;
    cursor: pointer;
    span{
      margin-right: 8px;
    }

    &:active{
      transform: scale(0.95);
      border-radius: 5px 5px 0 0;
    }
  }

  .champ{
    border: 1px solid black;
    height: 100%;
    padding-top: 10px;

  }

`