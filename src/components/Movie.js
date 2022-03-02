import PropTypes from "prop-types"
import { Link } from "react-router-dom"

// Link to 를 사용하면 reload없이 링크를 왔다갔다 할 수 있다.
function Movie({ id, coverImg, title, summary, genres }) {
    return (
        < div >
            <img src={coverImg}></img>
            <h2>
                <Link to={`/details/${id}`} >{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div >

    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;