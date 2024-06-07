import { IoChevronDownSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import styled from 'styled-components';
export default function AdminTab() {
  return (
    <AdminTabStyled>
        <div className="zone">
        <button className="premier"><IoChevronDownSharp /></button>
        <button className="deuxieme"> <span><FaPlus /></span> Ajouter un produit</button>
        <button className="troisieme"><span>
          <FaPen />
        </span>
        Modifier un produit</button>
          </div>
    </AdminTabStyled>
  )
}

const AdminTabStyled = styled.div`
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

`
