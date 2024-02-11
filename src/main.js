const header = document.querySelector("header");
const poster = document.querySelector(".poster");
const title = document.querySelector(".title");
const overview = document.querySelector(".overview");
const response = () => {
  let movie = [];
  const getData = async () => {
    const url = "https://api.themoviedb.org/3/trending/all/day";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjBmNTczZTVjNmU1ZWVjMDQzMGE1ZWE3ZmQ3ODQzNCIsInN1YiI6IjY1NzRmNDYzNGJmYTU0MDEzODdmNGM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cL5q_2WhzeSL3L49uADnzfZ4bVF_tfgLUXEt1Z0rbL4",
      },
    };
    const data = await fetch(url, options);
    return data.json().then((data) => {
      return data;
    });
  };
  getData().then((data) => {
    console.log(data.results[1]);
    header.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.results[1].backdrop_path})`;
    header.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.479) 19.27%, rgba(0, 0, 0, 0) 29.17%), 
                url(https://image.tmdb.org/t/p/original/${data.results[1].backdrop_path})`;
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundPosition = "center";
    header.style.backgroundSize = "cover";
    poster.src = `https://image.tmdb.org/t/p/original/${data.results[1].poster_path}`;
    title.textContent = data.results[1].original_name;
    overview.textContent = data.results[1].overview;
    movie = data;
  });
  return movie;
};
response();

const url = "https://api.themoviedb.org/3/tv/10765?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjBmNTczZTVjNmU1ZWVjMDQzMGE1ZWE3ZmQ3ODQzNCIsInN1YiI6IjY1NzRmNDYzNGJmYTU0MDEzODdmNGM1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cL5q_2WhzeSL3L49uADnzfZ4bVF_tfgLUXEt1Z0rbL4",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));

/*
10759
10765
  */
