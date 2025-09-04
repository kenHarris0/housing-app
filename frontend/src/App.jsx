import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUpPage from './pages/SingupPage'
import LoginPage from './pages/LoginPage'
function App() {

  return (
    <>

        <Routes>
          <Route path='/' element={<NavBar/>}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
        </Routes>

    </>
  )
}

export default App
