// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,   // 这里用 MainLayout
    children: [
      { index: true, element: <Home /> },
    ],
  },
])

export default router
