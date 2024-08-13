import './App.css'
import { BrowserRouter ,Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider"

//Import Layouts
import PrimaryLayout from '@/components/Layouts/PrimaryLayout'

//import Portal pages
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import DefaultFiler from './Pages/DefaultFilter';
import RegGPT from './Pages/RegGPT';
import Insight from './Pages/Insight';
import News from './Pages/News';
import Timeline from './Pages/Timeline';
import Resources from './Pages/Resources';
import Reports from './Pages/Reports';
import UploadFile from './Pages/UploadFile';

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<PrimaryLayout />}>
            <Route index element={<Navigate to="/dashboard" />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/sources" element={<DefaultFiler />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/reg-gpt" element={<RegGPT />} />
            <Route path="/news" element={<News />} />
            <Route path="/insights" element={<Insight />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/upload-files" element={<UploadFile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
