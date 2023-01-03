import { React, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom'
import './Detail.css'


function Detail(props) {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (!location.state) {
            navigate("/");
        }
    });

    if (location.state) {
        const state = location.state;
        return (
            <div className="detail">
                <img src={state.poster} alt={state.title} title={state.title} />
                <div className="movie__data">
                    <h3 className="movie__title">{state.title}</h3>
                    <h5 className="movie__year">{state.year}</h5>
                    <p className="movie__summary">{state.summary}...</p>
                    <ul className="movie__genres">
                        {state.genres.map((genre, index) => {
                            return (
                                <li key={index} className="movie__genre">
                                    {genre}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <Link to="/">Back</Link>
            </div>);
    } else {
        return null;
    }
}

export default Detail;