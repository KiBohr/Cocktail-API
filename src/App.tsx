import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Drinks from "./pages/drinks/Drinks"
import Home from "./pages/home/Home"

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="cocktail/:farid" element={<Drinks/>} />
        <Route path="random" element={<Drinks/>} />
        <Route path="noalc" element={<Drinks/>}/>
      </Route>
    )
  )

  return (
    <div className="text-white bg-dark-blue font-[Playfair]">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
