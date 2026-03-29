import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AddPageProps {
    onAddExam: (newExam: {
        subject: string;
        teacher: string;
        examDate: string;
        groupCode: string;
    }) => void;
}

const AddPage = ({ onAddExam }: AddPageProps) => {
    const [subject, setSubject] = useState("");
    const [teacher, setTeacher] = useState("");
    const [examDate, setExamDate] = useState("");
    const [groupCode, setGroupCode] = useState("");

    const navigate = useNavigate();

    const handleClear = () => {
        setSubject("");
        setTeacher("");
        setExamDate("");
        setGroupCode("");
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!subject || !teacher || !examDate || !groupCode) {
            alert("Будь ласка, заповніть усі поля.");
            return;
        }

        onAddExam({
            subject,
            teacher,
            examDate,
            groupCode
        });

        handleClear();
        navigate("/items");
    };

    return (
        <div className="page">
            <div className="form-card">
                <h1 className="form-title">Додавання екзамену</h1>
                <p className="form-subtitle">
                    Заповніть форму, щоб додати новий запис до списку екзаменів.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="label" htmlFor="subject">
                            Предмет
                        </label>
                        <input
                            className="input"
                            id="subject"
                            type="text"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            placeholder="Наприклад, Теорія алгоритмів"
                        />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="teacher">
                            Викладач
                        </label>
                        <input
                            className="input"
                            id="teacher"
                            type="text"
                            value={teacher}
                            onChange={(event) => setTeacher(event.target.value)}
                            placeholder="Наприклад, Петренко П.П."
                        />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="examDate">
                            Дата складання
                        </label>
                        <input
                            className="input"
                            id="examDate"
                            type="date"
                            value={examDate}
                            onChange={(event) => setExamDate(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label className="label" htmlFor="groupCode">
                            Шифр групи
                        </label>
                        <input
                            className="input"
                            id="groupCode"
                            type="text"
                            value={groupCode}
                            onChange={(event) => setGroupCode(event.target.value)}
                            placeholder="Наприклад, КН-21"
                        />
                    </div>

                    <div className="form-actions">
                        <button className="button" type="submit">
                            Додати екзамен
                        </button>

                        <button className="secondary-button" type="button" onClick={handleClear}>
                            Очистити
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPage;