import styled from 'styled-components'
import { theme } from '../../theme'
export default function inputFields({Icon, className, placeholder,onChange, value, ...restProps}) {
//state

//comportement


//render
  return (
    <InputFieldsStyled className={className}>
{Icon && <div className='Icons'>{Icon}</div> }
 <input 
 type="text"
 value={value}
 onChange={onChange}
 placeholder={placeholder}
 {...restProps}/>

    </InputFieldsStyled>
  )
}

const InputFieldsStyled = styled.div`

    width: 645px;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    background-color: #F5F5F7;
    margin-bottom: 5px;

    input{
        margin-left: 15px;
        width: 577px;
        height: 19px;
        border: none;
        outline: none;
        background-color: #F5F5F7;

        &::placeholder{
            color: ${theme.colors.greyMedium};
        }
    }

    .Icons{
        width: 15px;
        height: 13px;
        color: #747B91;
    }

`