import { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { initialExams } from "./data/exams";
import AboutPage from "./pages/AboutPage";
import AddPage from "./pages/AddPage";
import ClassItemsPage from "./pages/ClassItemsPage";
import HomePage from "./pages/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import ItemsPage from "./pages/ItemsPage";
import NotFoundPage from "./pages/NotFoundPage";
import type { Exam } from "./types/Exam";

const App = () => {
    const [exams, setExams] = useState<Exam[]>(initialExams);

    const addExam = useCallback((newExam: Omit<Exam, "id">) => {
        setExams((prevExams) => {
            const nextId =
                prevExams.length > 0 ? prevExams[prevExams.length - 1].id + 1 : 1;

            return [
                ...prevExams,
                {
                    id: nextId,
                    ...newExam
                }
            ];
        });
    }, []);

    return (
        <div className="app">
            <Navigation />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/items" element={<ItemsPage exams={exams} />} />
                <Route path="/items/:id" element={<ItemDetailsPage exams={exams} />} />
                <Route path="/add" element={<AddPage onAddExam={addExam} />} />
                <Route path="/class/items" element={<ClassItemsPage exams={exams} />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default App;