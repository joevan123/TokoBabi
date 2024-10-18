import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Login from "./pages/Login"
import { AuthProvider } from "./context/AuthContext"
import RqProvider from "./context/ReactQueryContext"


function App() {
  return (
    // <div className="app bg-gray-20">
    <AuthProvider>
      <RqProvider>
      <ShoppingCartProvider>
      
        <Navbar />
        <Container className=" mb-4 app bg-gray-20 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
      </RqProvider>
    </AuthProvider>
    // </div>
  )
}

export default App