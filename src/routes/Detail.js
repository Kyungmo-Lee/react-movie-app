import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : movie.title ? (
        <Movie id={id} title={id} />
      ) : null}
    </div>
  );
}

export default Detail;
