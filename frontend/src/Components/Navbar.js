import React from 'react';
import '../index.css';
import styled from 'styled-components';


const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-60%)'};
  background: #1a1a1a;
  height: 100%;
  text-align: right;
  padding-top : 50px;
  position: absolute;
  float: left;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  word-spacing: 1.5rem;
  z-index: 2;

  a {
    font-size: 1.5rem;
    padding: 1.5rem 0;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
        text-shadow: 0px 0px 3px #FFFFFF;    
        transition: all 0.5s ease-out;
        text-decoration: none;
        color: white;
    }

    @media (max-width: 576px) {
        padding: 0.5rem 0;
    }

  }

  @media (max-width: 576px) {
    padding-top : 1%;
    height : 98px;
    width : 100%;
    text-align: center;
    transform: ${({ open }) => open ? 'translateY(0px)' : 'translateY(-100%)'};
    opacity: 0.8;
    i {
        display : none;
    }
  }

`

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href="/">Accueil <i className="fas fa-home"></i></a>
            <a href="/">Admin <i className="fas fa-cog"></i></a>
        </StyledMenu>
    )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 2%;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}


const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
        <div>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </div>
    )
}

export default Navbar;