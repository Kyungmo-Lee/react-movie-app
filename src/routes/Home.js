import { useCallback, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Movie from "../components/Movie";

function Home() {
  function makeDate() {
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    return yesterday.toLocaleDateString().split(". ").join("").slice(0, -1);
  }
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});
  const getMovies = useCallback(async () => {
    const apis = {
      kobis_api_key: process.env.REACT_APP_KOBIS_API_KEY,
      naver_client_id: process.env.REACT_APP_CLIENT_ID,
      naver_client_secret: process.env.REACT_APP_CLIENT_SECRET,
    };

    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${
          apis.kobis_api_key
        }&targetDt=${makeDate()}&itemPerPage=10`
      )
    ).json();

    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  }, []);
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  console.log(movies);
  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Row xs={1} md={4} className="g-4">
          {movies.map((movie) => (
            <Col key={movie.movieNm}>
              <Movie id={movie.movieNm} title={movie.movieNm} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Home;
