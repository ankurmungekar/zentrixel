import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const HomePage = lazy(() => import('./pages/HomePage'))

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
