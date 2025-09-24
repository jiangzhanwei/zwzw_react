import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #24292e;
  color: #aaa;
  text-align: center;
  padding: 16px 0;
  font-size: 0.9rem;
  margin-top: auto;       /* 保证内容少时也贴底 */
`

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} （◉ᴗ◉）. All rights reserved.
    </FooterWrapper>
  )
}

export default Footer
