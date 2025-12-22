const Key = "VICxCdgczRi5hlbIE_C0Us_QB4d5tgtkAtcN8xoIOqg";

const form = document.querySelector("form");
const searchresult = document.querySelector(".search-results");
const search_input = document.getElementById("search_input");
const showmore = document.querySelector(".show_more");

let inputdata = "";
let page = 1;

async function searchImg() {
    inputdata = search_input.value.trim();
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${Key}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    const results = data.results;

    if (page === 1) {
        searchresult.innerHTML = "";
    }

    results.forEach((result) => {
        const imagewrap = document.createElement("div");
        imagewrap.classList.add("search-result");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description;

        imagewrap.appendChild(image);
        imagewrap.appendChild(imagelink);
        searchresult.appendChild(imagewrap);
    });

    page++;

    if (page > 1) {
        showmore.style.display = "block";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImg();
});

showmore.addEventListener("click", () => {
    searchImg();
    page++
});
