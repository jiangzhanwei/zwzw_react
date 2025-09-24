import React from 'react'
import styled from 'styled-components'

// 外层容器
const HomeWrapper = styled.div`
  padding: 40px 24px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  color: #24292e;
  margin-bottom: 16px;
`

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
`

// ---- 新增样式 ----
const CardList = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`

const Card = styled.div`
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 12px;
  padding: 20px 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.08);
  }
`

const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 12px;
`

const Name = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`

// ---- 模拟投资项目数据 ----
const projects = [
    { name: 'hyperspace', logo: '/images/hyperspace.png' },
    { name: 'vooi', logo: '/images/vooi.png' },
    { name: 'assisterr', logo: '/images/assisterr.png' },
    { name: 'aligned Layer', logo: '/images/alignedlayer.png' },
    { name: 'milky way', logo: '/images/milkyway.png' },
    { name: 'corn', logo: '/images/corn.png' },
    { name: 'gaia', logo: '/images/gaia.png' },
    { name: 'openledger', logo: '/images/openledger.png' },
    { name: 'fogo', logo: '/images/fogo.png' },
    { name: 'anoma', logo: '/images/anoma.png' },
    { name: 'giza', logo: '/images/giza.png' },
    { name: 'overlay', logo: '/images/overlay.png' },
    { name: 'gyrostable', logo: '/images/gyrostable.png' },
    { name: 'bebop', logo: '/images/bebop.png' },
    { name: 'superform', logo: '/images/superform.png' },
    { name: 'ethos', logo: '/images/ethos.png' },
    { name: 'opengradient', logo: '/images/opengradient.png' },
    { name: 'irys', logo: '/images/irys.png' },
    { name: 'fluent', logo: '/images/fluent.png' },
    { name: 'towns', logo: '/images/towns.png' },
    { name: 'boundless', logo: '/images/boundless.png' },
    { name: 'superfluid', logo: '/images/superfluid.png' },
    { name: 'senpi', logo: '/images/senpi.png' },
    { name: 'walletconnect', logo: '/images/walletconnect.png' },

]

const Home: React.FC = () => {
  return (
    <HomeWrapper>
      <Title>（◉ᴗ◉）</Title>
      <Subtitle>
        我的投资组合来源于多个平台包括ECHO、KAITO、LEGION等
      </Subtitle>

      {/* ---- 新增 Card 列表 ---- */}
      <CardList>
        {projects.map((p) => (
          <Card key={p.name}>
            <Logo src={p.logo} alt={p.name} />
            <Name>{p.name}</Name>
          </Card>
        ))}
      </CardList>
    </HomeWrapper>
  )
}

export default Home
