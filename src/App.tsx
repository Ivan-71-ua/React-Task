import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ItemsPage from "./pages/ItemsPage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/NotFoundPage";
import ClassItemsPage from "./pages/ClassItemsPage";
import { initialExams } from "./data/exams";
import type { Exam } from "./types/Exam";

const App = () => {
    const [exams, setExams] = useState<Exam[]>(initialExams);

    const addExam = (newExam: Omit<Exam, "id">) => {
        const examToAdd: Exam = {
            id: exams.length > 0 ? exams[exams.length - 1].id + 1 : 1,
            ...newExam
        };

        setExams([...exams, examToAdd]);
    };

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