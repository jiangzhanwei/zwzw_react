import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  width: 100%;                /* 宽度100% */
  height: 60px;
  background-color: #24292e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;            /* padding不再导致超出 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  box-sizing: border-box;      /* 避免padding导致超出屏幕 */
`

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
`

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #61dafb;
    }
  }
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>（◉ᴗ◉）</Logo>
      <Nav>
        <a href="/">TWITTER</a>
        <a href="/">GITHUB</a>
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
