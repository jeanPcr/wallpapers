import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/Sidebar";
import AppLayout from "./components/AppLayout";
import Providers from "./providers";

function App() {
  return (
    <Providers>
      <AppLayout>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppLayout>
    </Providers>
  );
}

export default App;
