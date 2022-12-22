import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function Movie({ id, title }) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const apis = {
      kobis_api_key: process.env.REACT_APP_KOBIS_API_KEY,
      naver_client_id: process.env.REACT_APP_CLIENT_ID,
      naver_client_secret: process.env.REACT_APP_CLIENT_SECRET,
    };

    const config = {
      method: "get",
      url: `/v1/search/movie.json?query=${encodeURIComponent(id)}`,
      headers: {
        "X-Naver-Client-Id": apis.naver_client_id,
        "X-Naver-Client-Secret": apis.naver_client_secret,
      },
    };

    axios(config)
      .then(function (response) {
        setMovie(response.data.items[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);
  return (
    <Card key={movie.title}>
      <Card.Link href={`/movie/${id}`}>
        <Card.Img variant="top" src={movie.image} />
        <Card.Body>
          <Card.Title>
            {title}(★ {movie.userRating})
          </Card.Title>
        </Card.Body>
      </Card.Link>
    </Card>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
