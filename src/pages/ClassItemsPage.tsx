import { createRef, PureComponent } from "react";
import ExamList from "../components/ExamList";
import SearchBar from "../components/SearchBar";
import type { Exam } from "../types/Exam";

interface ClassItemsPageProps {
    exams: Exam[];
}

interface ClassItemsPageState {
    searchQuery: string;
}

class ClassItemsPage extends PureComponent<ClassItemsPageProps, ClassItemsPageState> {
    private inputRef = createRef<HTMLInputElement>();
    private lastQuery = "";
    private lastExams: Exam[] = [];
    private lastFilteredExams: Exam[] = [];

    state: ClassItemsPageState = {
        searchQuery: ""
    };

    componentDidMount(): void {
        this.inputRef.current?.focus();
    }

    handleSearchChange = (value: string): void => {
        this.setState({ searchQuery: value });
    };

    handleClearSearch = (): void => {
        this.setState({ searchQuery: "" }, () => {
            this.inputRef.current?.focus();
        });
    };

    getFilteredExams(): Exam[] {
        const { exams } = this.props;
        const { searchQuery } = this.state;
        const normalizedQuery = searchQuery.trim().toLowerCase();

        if (this.lastExams === exams && this.lastQuery === normalizedQuery) {
            return this.lastFilteredExams;
        }

        const filteredExams =
            normalizedQuery.length === 0
                ? exams
                : exams.filter((exam) => {
                    return (
                        exam.subject.toLowerCase().includes(normalizedQuery) ||
                        exam.teacher.toLowerCase().includes(normalizedQuery) ||
                        exam.groupCode.toLowerCase().includes(normalizedQuery)
                    );
                });

        this.lastExams = exams;
        this.lastQuery = normalizedQuery;
        this.lastFilteredExams = filteredExams;

        return filteredExams;
    }

    render() {
        const { searchQuery } = this.state;
        const filteredExams = this.getFilteredExams();

        return (
            <div className="page">
                <h1>Список екзаменів (класовий компонент)</h1>

                <SearchBar
                    value={searchQuery}
                    onChange={this.handleSearchChange}
                    onClear={this.handleClearSearch}
                    inputRef={this.inputRef}
                />

                <ExamList exams={filteredExams} />
            </div>
        );
    }
}

export default ClassItemsPage;