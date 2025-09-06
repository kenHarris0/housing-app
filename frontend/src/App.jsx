import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUpPage from './pages/SingupPage'
import LoginPage from './pages/LoginPage'
import Home from './components/Home'
function App() {

  return (
    <>

        <Routes>
          <Route path='/' element={<NavBar/>}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>

    </>
  )
}

export default App
