import React from 'react'
import styled from 'styled-components'

// =====================
// Styled Components
// =====================
const FooterWrapper = styled.footer`
  width: 100%;
  background: #24292e;
  color: #aaa;
  text-align: center;
  padding: 80px 0;
  margin-top: auto;
  font-size: 0.9rem;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
`

// =====================
// Component
// =====================
const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} All rights reserved.
    </FooterWrapper>
  )
}

export default Footer
