// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,   // 这里用 MainLayout
    children: [
      
    ],
  },
])

export default router
