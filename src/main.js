const container = document.getElementById("container");

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
    
    data.results.forEach((element) => {
      const div = document.createElement("div");
      // scroll animation tailwind
      div.classList = "snap-always snap-center";
      div.innerHTML = `
      <section  class="relative h-screen text-white" style="
      
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.479) 19.27%, rgba(0, 0, 0, 0) 29.17%), url(https://image.tmdb.org/t/p/original/${element.backdrop_path});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      ">
        <div class="absolute header-section w-[90%] mx-auto details bottom-0 w-full py-10 px-10">
            <img class="poster w-30 h-96 object-cover rounded-md" src="https://image.tmdb.org/t/p/original/${element.poster_path}" alt="">

            <h1 class=" text-5xl font-extrabold my-7 title">${element.original_name}</h1>
            <ul class="flex gap-2">
                <li>20 episodes</li>
                <li>2024</li>
                <li>Fantasy</li>
                <li>Actions</li>
            </ul>
            <section class="flex md:flex-row flex-col justify-between items-center gap-10 md:gap-0 my-4">
                <div class="flex md:flex-row flex-col gap-10">
                    <button class="flex px-10 py-3 rounded-full bg-indigo-500/100">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M10.3 5.6A2 2 0 0 0 7 7v10a2 2 0 0 0 3.3 1.5l5.9-4.9a2 2 0 0 0 0-3l-6-5Z"
                                clip-rule="evenodd" />
                        </svg>
                        Continue Watching</button>
                    <button class="flex px-10 py-3  rounded-full border-4 border-indigo-500/100">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M7.8 2c-.5 0-1 .2-1.3.6A2 2 0 0 0 6 3.9V21a1 1 0 0 0 1.6.8l4.4-3.5 4.4 3.5A1 1 0 0 0 18 21V3.9c0-.5-.2-1-.5-1.3-.4-.4-.8-.6-1.3-.6H7.8Z" />
                        </svg>
                        Add Watchlist
                      </button>
                </div>
                <div class="flex md:flex-row flex-col gap-10">
                    <button class="flex px-10 py-3  rounded-full border-4 border-indigo-500/100">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                        </svg>Download</button>
                    <button class="flex px-10 py-3  rounded-full border-4 border-indigo-500/100">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                d="m8 10.9 7-3.2m-7 5.4 7 3.2M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                        </svg>Share</button>
                    <button class="flex px-10 py-3  rounded-full border-4 border-indigo-500/100">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd"
                                d="M15 9.7h4a2 2 0 0 1 1.6.9 2 2 0 0 1 .3 1.8l-2.4 7.2c-.3.9-.5 1.4-1.9 1.4-2 0-4.2-.7-6.1-1.3L9 19.3V9.5A32 32 0 0 0 13.2 4c.1-.4.5-.7.9-.9h1.2c.4.1.7.4 1 .7l.2 1.3L15 9.7ZM4.2 10H7v8a2 2 0 1 1-4 0v-6.8c0-.7.5-1.2 1.2-1.2Z"
                                clip-rule="evenodd" />
                        </svg>
                        Like</button>
                </div>
            </section>
            <div>
                <h2 class="text-5xl font-extrabold my-7">Story Line</h2>
                <p class="text-justify line-clamp-3 overview">${element.overview}</p>
            </div>
        </div>
    </section>
      `
      
      container.appendChild(div);
    });
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
