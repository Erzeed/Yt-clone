import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Search, VideoDetail } from "./pages";
import { Navbar, Navigation } from "./components";

function App() {
  return (
      <BrowserRouter>
        <div className="flex flex-col h-full bg-black">
            <Navbar />
            <div className="container flex h-full overflow-y-scroll">
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search?/:searchQuery" element={<Search />} />
                <Route path="/watch/:id" element={<VideoDetail />} />
              </Routes>
            </div>
        </div>
      </BrowserRouter>
  )
}

export default App
