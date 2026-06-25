import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Chairman from './pages/Chairman'
import CorporateManagement from './pages/CorporateManagement'
import Concerns from './pages/Concerns'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const IndustryIntelligence = lazy(() => import('./pages/IndustryIntelligence'))

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile-of-chairman" element={<Chairman />} />
          <Route path="/corporate-management" element={<CorporateManagement />} />
          <Route path="/concerns" element={<Concerns />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/industry-intelligence"
            element={
              <Suspense fallback={<div className="mx-auto max-w-7xl px-8 py-32 text-muted text-sm">Loading…</div>}>
                <IndustryIntelligence />
              </Suspense>
            }
          />
          <Route path="/career" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
