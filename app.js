const form = document.querySelector("#searchForm");
const card = document.querySelector(".card");
const div = document.querySelector("div");

const searchTerm = form.elements.query?.value;
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const res = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchTerm}`
  );

  makeImages(res.data);
});

// we pass in an array of show
const makeImages = (shows) => {
  for (let result of shows) {
    const img = document.createElement("IMG");
    const para = document.createElement("P");
    para.textContent = result.show.summary;

    if (result.show.image) {
      console.log(result);
      img.src = result.show.image.medium;
      div.append(img);
    }
    div.append(para);
  }
};
