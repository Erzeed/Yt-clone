import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Search, Shorts, VideoDetail } from "./pages";
import { Navbar, Navigation, NotLogin } from "./components";

function App() {
  return (
      <BrowserRouter>
        <div className="flex flex-col h-full w-full scroll-smooth bg-black">
            <Navbar />
            <div className="container flex h-full w-full overflow-hidden">
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/results/search_query/:searchQuery" element={<Search />} />
                <Route path="/watch/:id" element={<VideoDetail />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/subscriptions" element={<NotLogin title="Don’t miss new videos" desc="Sign in to see updates from your favorite YouTube channels" />} />
                <Route path="/you" element={<NotLogin title="Enjoy your favorite videos" desc="Sign in to access videos that you’ve liked or saved" />} />
                <Route path="/history" element={<NotLogin title="Keep track of what you watch" desc="Watch history isn't viewable when signed out." />} />
              </Routes>
            </div>
        </div>
      </BrowserRouter>
  )
}

export default App
