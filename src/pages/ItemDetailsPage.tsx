import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const ItemDetailsPage = () => {
    const { id } = useParams();
    const exams = useAppSelector((state) => state.exams.exams);

    const exam = exams.find((item) => item.id === Number(id));

    console.log("RENDER ItemDetailsPage", id);

    if (!exam) {
        return (
            <div className="page">
                <h1>Екзамен не знайдено</h1>
                <Link to="/items" className="back-link">
                    Повернутися до списку
                </Link>
            </div>
        );
    }

    return (
        <div className="page">
            <h1>{exam.subject}</h1>
            <p>
                <strong>Викладач:</strong> {exam.teacher}
            </p>
            <p>
                <strong>Дата складання:</strong> {exam.examDate}
            </p>
            <p>
                <strong>Шифр групи:</strong> {exam.groupCode}
            </p>

            <Link to="/items" className="back-link">
                Повернутися до списку
            </Link>
        </div>
    );
};

export default ItemDetailsPage;