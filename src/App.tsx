//App.tsx

import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import CityDetailsPage from './pages/CityDetailsPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signUp' element={<SignUpPage />} />
      <Route path="/city/:id" element={<CityDetailsPage />} />
    </Routes>
  )
}

export default App