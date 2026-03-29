import { Link } from "react-router-dom";
import type { Exam } from "../types/Exam";

interface ItemsPageProps {
    exams: Exam[];
}

const ItemsPage = ({ exams }: ItemsPageProps) => {
    return (
        <div className="page">
            <h1>Список екзаменів</h1>

            {exams.length === 0 ? (
                <p>Список екзаменів порожній.</p>
            ) : (
                <ul className="list">
                    {exams.map((exam) => (
                        <li key={exam.id} className="list-item">
                            <h3>{exam.subject}</h3>
                            <p>Викладач: {exam.teacher}</p>
                            <p>Дата: {exam.examDate}</p>
                            <p>Група: {exam.groupCode}</p>
                            <Link to={`/items/${exam.id}`} className="details-link">
                                Детальніше
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemsPage;