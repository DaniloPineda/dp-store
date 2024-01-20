import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import Layout from '../../Components/Layout'

const AppRoutes = () => {
  return useRoutes([
    { path: '/', element: <Layout><Home /></Layout> },
    { path: '/*', element: <Layout><NotFound /></Layout> },
    { path: '/my-account', element: <Layout><MyAccount /></Layout> },
    { path: '/my-order', element: <Layout><MyOrder /></Layout> },
    { path: '/my-orders', element: <Layout><MyOrders /></Layout> },
    { path: '/sign-in', element: <Layout><SignIn /></Layout> },
  ])
} 

function App() {  
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
