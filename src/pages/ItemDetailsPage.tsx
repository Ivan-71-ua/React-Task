import { Link, useParams } from "react-router-dom";
import type { Exam } from "../types/Exam";

interface ItemDetailsPageProps {
    exams: Exam[];
}

const ItemDetailsPage = ({ exams }: ItemDetailsPageProps) => {
    const { id } = useParams();

    const exam = exams.find((item) => item.id === Number(id));

    if (!exam) {
        return (
            <div className="page">
                <h1>Екзамен не знайдено</h1>
                <p>Запису з таким id не існує.</p>
                <Link to="/items" className="details-link">
                    Повернутися до списку
                </Link>
            </div>
        );
    }

    return (
        <div className="page">
            <h1>Деталі екзамену</h1>
            <p><strong>ID:</strong> {exam.id}</p>
            <p><strong>Предмет:</strong> {exam.subject}</p>
            <p><strong>Викладач:</strong> {exam.teacher}</p>
            <p><strong>Дата складання:</strong> {exam.examDate}</p>
            <p><strong>Шифр групи:</strong> {exam.groupCode}</p>

            <Link to="/items" className="details-link">
                Назад до списку
            </Link>
        </div>
    );
};

export default ItemDetailsPage;