import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="page">
            <h1>Система обліку екзаменів</h1>

            <p>
                Цей застосунок призначений для зручного перегляду інформації про
                екзамени. У ньому можна переглядати список запланованих екзаменів,
                відкривати детальну інформацію про кожен запис і додавати нові екзамени
                через форму.
            </p>

            <p>
                Проєкт створений на React з використанням React Router. Для
                функціональних сторінок застосовано функціональні компоненти, а сторінка
                <strong> /class/items </strong>
                реалізована через класовий компонент відповідно до умови завдання.
            </p>

            <div className="form-actions">
                <Link to="/items" className="details-link">
                    Перейти до списку
                </Link>

                <Link to="/add" className="details-link">
                    Додати екзамен
                </Link>
            </div>
        </div>
    );
};

export default HomePage;