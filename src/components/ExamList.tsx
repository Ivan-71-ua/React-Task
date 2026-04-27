import { memo } from "react";
import type { Exam } from "../types/Exam.ts";
import ExamCard from "./ExamCard";

interface ExamListProps {
    exams: Exam[];
}

const ExamList = ({ exams }: ExamListProps) => {

    console.log("RENDER ExamList");
    if (exams.length === 0) {
        return <p>Нічого не знайдено.</p>;
    }

    return (
        <ul className="list">
            {exams.map((exam) => (
                <ExamCard key={exam.id} exam={exam} />
            ))}
        </ul>
    );
};

export default memo(ExamList);