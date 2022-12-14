import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CategoryDisplayMain from '../pages/Shop/CategoryDisplayMain'
import Dashboard from '../pages/Dashboard/Dashboard'
import LoginPage from '../pages/LoginPage'
import SearchPage from '../pages/SearchPage'
import DetailedProductMain from '../pages/Shop/DetailedProductMain'
import ShopHome from '../pages/Shop/ShopHome'
import SignupPage from '../pages/SignupPage'
import Tasks from '../pages/Tasks'
import UserProfile from '../pages/UserProfile.jsx'
import AuthRoute from '../Routes/AuthRoute'
import Cart from '../pages/Shop/Cart'
import Checkout from '../pages/Shop/Checkout'
import AdminDashboard from '../pages/Shop/adminSection/AdminDashboard'
import AdminProducts from '../pages/Shop/adminSection/AdminProducts.page'
import AdminOrdersCategory from '../pages/Shop/adminSection/Admin.orders.category'
import AdminPrivateRoute from './AdminPrivateRoute'
import { useSelector } from 'react-redux'
import Feeds from '../pages/Feeds/Feeds'

const routes = [
  {
    path: '/',
    element: (
      <AuthRoute>
        <Dashboard />
      </AuthRoute>
    ),
  },
  {
    path: '/searchproducts',
    element: (
      <AuthRoute>
        <SearchPage />
      </AuthRoute>
    ),
  },
  { path: '/tasks', element: <Tasks /> },
  {
    path: '/userprofile',
    element: (
      <AuthRoute>
        <UserProfile />
      </AuthRoute>
    ),
  },
  {
    path: '/feeds',
    element: (
      <AuthRoute>
        <Feeds />
      </AuthRoute>
    ),
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/signup', element: <SignupPage /> },
  { path: '/tmc-shop', element: <ShopHome /> },
  { path: '/product/:productId', element: <DetailedProductMain /> },
  { path: '/products/:category', element: <CategoryDisplayMain /> },
  {
    path: '/cart',
    element: (
      <AuthRoute>
        <Cart />
      </AuthRoute>
    ),
  },
  {
    path: '/checkout',
    element: (
      <AuthRoute>
        <Checkout />
      </AuthRoute>
    ),
  },
  {
    path: '/admin-home',
    element: (
      <AdminPrivateRoute>
        <AdminDashboard />
      </AdminPrivateRoute>
    ),
  },
  {
    path: '/admin-products',
    element: (
      <AdminPrivateRoute>
        <AdminProducts />
      </AdminPrivateRoute>
    ),
  },
  {
    path: '/admin-categories',
    element: (
      <AdminPrivateRoute>
        <AdminOrdersCategory />
      </AdminPrivateRoute>
    ),
  },
]
const AllRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, element }, ind) => (
        <Route
          key={`${ind}+${path}+${Math.random()}`}
          path={path}
          element={element}
        />
      ))}
    </Routes>
  )
}

export default AllRoutes
