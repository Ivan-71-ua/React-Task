import { useCallback, useRef, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { addExam } from "../store/examsSlice";
import { useAppDispatch } from "../store/hooks";

const AddPage = () => {
    const [subject, setSubject] = useState<string>("");
    const [teacher, setTeacher] = useState<string>("");
    const [examDate, setExamDate] = useState<string>("");
    const [groupCode, setGroupCode] = useState<string>("");

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const subjectInputRef = useRef<HTMLInputElement | null>(null);

    const handleClear = useCallback(() => {
        setSubject("");
        setTeacher("");
        setExamDate("");
        setGroupCode("");
        subjectInputRef.current?.focus();
    }, []);

    const handleSubmit = useCallback(
        (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const normalizedSubject = subject.trim();
            const normalizedTeacher = teacher.trim();
            const normalizedExamDate = examDate.trim();
            const normalizedGroupCode = groupCode.trim();

            if (
                !normalizedSubject ||
                !normalizedTeacher ||
                !normalizedExamDate ||
                !normalizedGroupCode
            ) {
                alert("Будь ласка, заповніть усі поля.");
                return;
            }

            dispatch(
                addExam({
                    subject: normalizedSubject,
                    teacher: normalizedTeacher,
                    examDate: normalizedExamDate,
                    groupCode: normalizedGroupCode
                })
            );

            handleClear();
            navigate("/items");
        },
        [subject, teacher, examDate, groupCode, dispatch, handleClear, navigate]
    );

    console.log("RENDER AddPage");

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
                            ref={subjectInputRef}
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

                        <button
                            className="secondary-button"
                            type="button"
                            onClick={handleClear}
                        >
                            Очистити
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPage;