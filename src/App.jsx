import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AddNew from './Views/AddNew'
import Home from './Views/Home'
import Update from './Views/Update'



function App() {
  const [t , i18] = useTranslation()


  return (
    <main style={{ direction : i18.language == "ar" ? "rtl" : "ltr"}} 
    className="text-[#101010] bg-white h-[100vh]
        dark:text-white dark:bg-[#101010]"
    >

              
        
      <BrowserRouter>
      
        <Header/> 

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/AddNew" element={<AddNew />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
