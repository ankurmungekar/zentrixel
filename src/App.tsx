import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'))
const IndustryDetailPage = lazy(() => import('./pages/IndustryDetailPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const InsightPage = lazy(() => import('./pages/InsightPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const TermsPage = lazy(() => import('./pages/TermsPage'))
const AiCallingPage = lazy(() => import('./pages/AiCallingPage'))
const AiChatbotPage = lazy(() => import('./pages/AiChatbotPage'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/insight" element={<InsightPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/products/ai-calling" element={<AiCallingPage />} />
          <Route path="/products/ai-chatbot" element={<AiChatbotPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
