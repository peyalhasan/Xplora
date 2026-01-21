import { Route, Routes } from 'react-router'
import './App.css'
import Login from './page/Login'
import Home from './page/Home'
import Register from './page/Register'
import PrivateRoute from './Route/PrivateRoute'
import NotFound from './components/common/NotFound'
import Reset from './page/Reset'
import Destination from './components/Destination'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/reset' element={<Reset />} />
      <Route element={<PrivateRoute />}>
        <Route path='/home' element={<Home />} />
        <Route path='/destinations' element={<Destination />} />

      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
