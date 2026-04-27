import { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import type { Exam } from "../types/Exam";
import { removeExam } from "../store/examsSlice";
import { useAppDispatch } from "../store/hooks";

interface ExamCardProps {
    exam: Exam;
}

const ExamCard = ({ exam }: ExamCardProps) => {
    const dispatch = useAppDispatch();

    const handleDelete = useCallback(() => {
        const confirmed = window.confirm(
            `Ви дійсно хочете видалити екзамен "${exam.subject}"?`
        );

        if (!confirmed) {
            return;
        }

        dispatch(removeExam(exam.id));
    }, [dispatch, exam.id, exam.subject]);

    console.log("RENDER ExamCard", exam.id);

    return (
        <li className="list-item">
            <h3>{exam.subject}</h3>
            <p>Викладач: {exam.teacher}</p>
            <p>Дата: {exam.examDate}</p>
            <p>Група: {exam.groupCode}</p>

            <div className="card-actions">
                <Link to={`/items/${exam.id}`} className="card-link">
                    Детальніше
                </Link>

                <button
                    type="button"
                    onClick={handleDelete}
                    className="delete-button"
                >
                    Видалити
                </button>
            </div>
        </li>
    );
};

export default memo(ExamCard);