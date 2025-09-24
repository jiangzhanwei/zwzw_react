import React from 'react'
import styled from 'styled-components'

// =====================
// Styled Components
// =====================
const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  background: #24292e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  cursor: pointer;
`

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s;

    &:hover {
      color: #61dafb;
    }
  }
`

// =====================
// Component
// =====================
const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>MyApp</Logo>
      <Nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
