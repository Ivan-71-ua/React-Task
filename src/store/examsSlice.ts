import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { initialExams } from "../data/exams";
import type { Exam } from "../types/Exam";

interface ExamsState {
    exams: Exam[];
}

const initialState: ExamsState = {
    exams: initialExams
};

const examsSlice = createSlice({
    name: "exams",
    initialState,
    reducers: {
        addExam: (state, action: PayloadAction<Omit<Exam, "id">>) => {
            const nextId =
                state.exams.length > 0
                    ? state.exams[state.exams.length - 1].id + 1
                    : 1;

            state.exams.push({
                id: nextId,
                ...action.payload
            });
        },
        removeExam: (state, action: PayloadAction<number>) => {
            state.exams = state.exams.filter((exam) => exam.id !== action.payload);
        }
    }
});

export const { addExam, removeExam } = examsSlice.actions;
export default examsSlice.reducer;