import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styled from 'styled-components'

// =====================
// 布局容器
// =====================
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;   /* 页面撑满整个视口高度 */
`

const MainContent = styled.main`
  flex: 1;             /* 占满 Header 和 Footer 之间的空间 */
`

const MainLayout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutWrapper>
  )
}

export default MainLayout
