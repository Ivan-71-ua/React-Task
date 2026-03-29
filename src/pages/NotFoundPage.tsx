import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="page">
            <h1>404</h1>
            <p>Такої сторінки не існує.</p>
            <Link to="/" className="details-link">
                Повернутися на головну
            </Link>
        </div>
    );
};

export default NotFoundPage;