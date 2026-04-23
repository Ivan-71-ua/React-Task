import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ExamList from "../components/ExamList";
import SearchBar from "../components/SearchBar";
import type { Exam } from "../types/Exam";

interface ItemsPageProps {
    exams: Exam[];
}

const ItemsPage = ({ exams }: ItemsPageProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleSearchChange = useCallback((value: string) => {
        setSearchQuery(value);
    }, []);

    const handleClearSearch = useCallback(() => {
        setSearchQuery("");
        inputRef.current?.focus();
    }, []);

    const filteredExams = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        if (!normalizedQuery) {
            return exams;
        }

        return exams.filter((exam) => {
            return (
                exam.subject.toLowerCase().includes(normalizedQuery) ||
                exam.teacher.toLowerCase().includes(normalizedQuery) ||
                exam.groupCode.toLowerCase().includes(normalizedQuery)
            );
        });
    }, [exams, searchQuery]);

    return (
        <div className="page">
            <h1>Список екзаменів</h1>

            <SearchBar
                value={searchQuery}
                onChange={handleSearchChange}
                onClear={handleClearSearch}
                inputRef={inputRef}
            />

            <ExamList exams={filteredExams} />
        </div>
    );
};

export default ItemsPage;