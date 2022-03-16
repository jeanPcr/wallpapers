import { Route, Routes } from "react-router-dom";
//COMPONENTS
import SideBar from "./components/Sidebar";
import AppLayout from "./components/AppLayout";
//PROVIDERS
import Providers from "./providers";
// PAGES
import Home from "./pages/Home";
import SinglePhoto from "./pages/SinglePhoto";
import Photos from "./pages/Photos";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Providers>
      <AppLayout>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="photos" element={<Photos />}>
            <Route path="one/:photoID" element={<SinglePhoto />} />
            <Route path=":research" element={<SinglePhoto />} />
          </Route>
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Providers>
  );
}

export default App;
