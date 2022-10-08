import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import About from './components/About';
const router = createBrowserRouter([
  {path: '/',element:  <Main/>, children: [
    {path: '/', element: <Home></Home>},
    {path: '/home', element: <Home></Home>},
    {path: '/shop', element: <Shop></Shop>},
    {path: '/cart', element: <Cart></Cart>},
    {path: '/about', element: <About></About>},
  ]}
])
function App() {
  return (<>
    <RouterProvider router={router}></RouterProvider>
  </>
  )
}

export default App
