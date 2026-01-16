import { Route, Routes } from 'react-router'
import './App.css'
import Login from './page/Login'
import Home from './page/Home'
import Register from './page/Register'
import PrivateRoute from './Route/PrivateRoute'
import NotFound from './components/common/NotFound'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register' element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path='/home' element={<Home />} />

      </Route>

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
