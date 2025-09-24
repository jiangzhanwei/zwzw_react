import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HomeWrapper = styled.div`
  padding: 40px 24px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

// 直接把 motion.h1 / motion.p 包装成 styled
const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: #24292e;
  margin-bottom: 16px;
`

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
`

const CardList = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
`

const Card = styled(motion.div)`
  background: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 12px;
  padding: 20px 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
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
      {/* 标题淡入下滑并悬停浮动 */}
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
      >
        （◉ᴗ◉）
      </Title>

      {/* 副标题稍后出现 */}
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        我的投资组合来源于多个平台包括ECHO、KAITO、LEGION等
      </Subtitle>

      <CardList>
        {projects.map((p, idx) => (
          <Card
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 14px rgba(0,0,0,0.15)' }}
          >
            <Logo src={p.logo} alt={p.name} />
            <Name>{p.name}</Name>
          </Card>
        ))}
      </CardList>
    </HomeWrapper>
  )
}

export default Home
