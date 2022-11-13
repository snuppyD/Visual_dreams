import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateDreamPage } from "./pages/create-dream-page";
import { HomePage } from "./pages/home-page";
import { DreamPage } from "./pages/dream-page";
import { EditDreamPage } from './pages/edit-dream-page/edit-dream-page'
import { OrderPage } from "./pages/order-page";
import { paths } from "./paths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ paths.home } element={<HomePage />} />
        <Route path={ `${paths.dream}/:id` } element={<DreamPage />} />
        <Route path={ paths.createDream } element={<CreateDreamPage />} />
        <Route path={ paths.order } element={<OrderPage />} />
        <Route path={ `${paths.editDream}/:id`} element={<EditDreamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
