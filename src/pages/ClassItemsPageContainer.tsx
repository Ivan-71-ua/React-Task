import ClassItemsPage from "./ClassItemsPage";
import { useAppSelector } from "../store/hooks";

const ClassItemsPageContainer = () => {
    const exams = useAppSelector((state) => state.exams.exams);

    return <ClassItemsPage exams={exams} />;
};

export default ClassItemsPageContainer;