import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import AddPage from "./pages/AddPage";
import ClassItemsPageContainer from "./pages/ClassItemsPageContainer";
import HomePage from "./pages/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import ItemsPage from "./pages/ItemsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
    console.log("RENDER App");

    return (
        <div className="app">
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/items" element={<ItemsPage />} />
                <Route path="/items/:id" element={<ItemDetailsPage />} />
                <Route path="/add" element={<AddPage />} />
                <Route path="/class/items" element={<ClassItemsPageContainer />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;