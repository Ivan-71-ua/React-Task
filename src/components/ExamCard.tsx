import { memo } from "react";
import { Link } from "react-router-dom";
import type { Exam } from "../types/Exam";

interface ExamCardProps {
    exam: Exam;
}

const ExamCard = ({ exam }: ExamCardProps) => {
    return (
        <li className="list-item">
            <h3>{exam.subject}</h3>
            <p>Викладач: {exam.teacher}</p>
            <p>Дата: {exam.examDate}</p>
            <p>Група: {exam.groupCode}</p>
            <Link to={`/items/${exam.id}`} className="details-link">
                Детальніше
            </Link>
        </li>
    );
};

export default memo(ExamCard);