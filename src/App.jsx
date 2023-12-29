import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContext from "./context/contextApi"
import { Home, Search } from "./pages";
import { Navbar, Navigation } from "./components";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
            <Navbar />
            <div className="container flex h-full">
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search?/:searchQuery" element={<Search />} />
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App
