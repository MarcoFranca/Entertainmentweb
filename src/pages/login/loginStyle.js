import styled from "styled-components";
import {colors} from "../../assets/global/colors";
import {Link} from "react-router-dom";

export const MainLogin = styled.main`
  display: flex;
  justify-content: center;
  background-color: ${colors.darkblue};
  height: 100vh;
`
export const MainLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.pureWhite};
  img{
    margin-top: 78px;
    margin-bottom: 83px;
    width: 32px;
  }
`
export const MainLoginFormContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${colors.semiDarkBlue};
  border-radius: 20px;
  h1{
    margin-bottom: 40px;
    font-weight: 300;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
  input{
    background-color: transparent;
    margin-bottom: 24px;
    padding: 0 0 18px 16px;
    cursor: pointer;
    border: none;
    border-bottom: solid 1px ${colors.greyishBlue};
    color: white;
    caret-color: ${colors.red}; 
    outline: none; 
    :focus {
    border-bottom: solid 1px white;
    }
    ::placeholder{
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 19px;
    }
  }
  p{
    margin-top: 24px;
    align-self: center;
  }
}
`

export const LinkStyle = styled(Link)`
  color: red;
  text-decoration: none;
  margin-left: 9px;
`

export const ButtonRed = styled.button`
  width: 336px;
  height: 48px;
  background-color: ${colors.red};
  color: ${colors.pureWhite};
  border: none;
  border-radius: 6px;
  font-weight: 300;
  font-size: 15px;
  line-height: 19px;
  :hover{
    color: ${colors.darkblue};
    background-color: ${colors.pureWhite};
    cursor: pointer;
  }
`