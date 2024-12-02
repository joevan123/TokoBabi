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
import { ThirdwebProvider } from "@thirdweb-dev/react"
import ProfileLayout from "./pages/ProfileLayout"
import Profile from "./pages/Profile"
import UserProducts from "./pages/UserProducts"
import UserOrders from "./pages/UserOrders"
import Register from "./pages/Register"

function App() {
  return (
    <ThirdwebProvider 
      activeChain="sepolia"
      clientId="5f84f52bb940e0ada67db1729d41d760"
    >
      <AuthProvider>
        <RqProvider>
          <ShoppingCartProvider>
            <Navbar />
            <Container className="mb-4 app bg-gray-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<ProfileLayout />}>
                  <Route index element={<Profile />} />
                  <Route path="my-products" element={<UserProducts />} />
                  <Route path="my-orders" element={<UserOrders />} />
                </Route>
              </Routes>
            </Container>
          </ShoppingCartProvider>
        </RqProvider>
      </AuthProvider>
    </ThirdwebProvider>
  )
}

export default App