import styled from "styled-components";
import mobileLight from "../images/bg-mobile-light.jpg";
import check from '../images/icon-check.svg';



function Header() {
  return (
    <HeaderDiv>
      <ThemeImg src={mobileLight} />
      <NewTodoDiv>
        <label htmlFor="1">
            <CheckInputNewTodo id="1" type="checkbox"/>
            <CheckNewTodoSpan/>
        </label>
        <NewTodoInput placeholder="Create a new todo"></NewTodoInput>
      </NewTodoDiv>
    </HeaderDiv>
  );
};

const CheckNewTodoSpan = styled.span`
    display: block;
    width: 20px;
    height: 20px;
    background: transparent;
    mix-blend-mode: normal;
    border-radius: 50%;
    border: 1px solid #E3E4F1;
`

const CheckInputNewTodo = styled.input`
    display: none;
    &:checked ~ span{
        background: url(${check}), linear-gradient(135deg, #55DDFF 0%, #C058F3 100%);
        background-repeat: no-repeat;
        background-position: center;
    }
`

const NewTodoInput = styled.input`
    text-align: left;
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: -0.166667px;
    color: #393A4B;
    margin-left: 24px;
    width: 215px;
    border: 0;
    outline: none;
`

const NewTodoDiv = styled.div`
    display: flex;
    align-items: center;
    width: 327px;
    height: 48px;
    position: absolute;
    top: 108px;
    background: #FFFFFF;
    box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
`

const HeaderDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ThemeImg = styled.img``;

export default Header;
