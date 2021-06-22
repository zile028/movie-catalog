let movie = document.getElementById("movie");
let categoryList = document.getElementById("category");
let link = "";
let category = [];

createCatalog("all");
createCategory();

function createCatalog(cat) {
  for (let i = 0; i < movieDb.length; i++) {
    const film = movieDb[i];
    if (film.info.genres.indexOf(category[cat]) !== -1) {
      let col3 = `
  <div class="col-3">
  <img class="img-fluid" src="${film.info.image_url}" alt="">
</div>`;
      let col9 = `
  <div class="col-9 ">
            <table class="table table-striped">
                <tr class="table-primary">
                    <th>Title</th>
                    <td>${film.title}</td>
                </tr>
                <tr>
                    <th>Year</th>
                    <td>${film.year}</td>
                </tr>
                <tr>
                    <th colspan="2" class="table-success">Info</th>
                </tr>
                `;
      for (const prop in film.info) {
        if (prop !== "image_url") {
          if (Array.isArray(film.info[prop])) {
            col9 += `
          <tr>
              <th>${prop}</th>
              <td>`;
            film.info[prop].forEach((el) => {
              col9 += el + ", ";
            });
            col9 = col9.slice(0, -2);
            col9 += `</td>
              </tr>`;
          } else {
            col9 += `
      <tr>
          <th>${prop}</th>
          <td>${film.info[prop]}</td>
      </tr>`;
          }
        }
      }

      col9 += ` </table>
        </div>
  
  `;
      let row = document.createElement("div");
      row.className = "row justify-content-between no-gutters border p-4 mb-4";
      row.innerHTML = col3 + col9;
      movie.appendChild(row);
    } else if (cat === "all") {
      let col3 = `
  <div class="col-3">
  <img class="img-fluid" src="${film.info.image_url}" alt="">
</div>`;
      let col9 = `
  <div class="col-9 ">
            <table class="table table-striped">
                <tr class="table-primary">
                    <th>Title</th>
                    <td>${film.title}</td>
                </tr>
                <tr>
                    <th>Year</th>
                    <td>${film.year}</td>
                </tr>
                <tr>
                    <th colspan="2" class="table-success">Info</th>
                </tr>
                `;
      for (const prop in film.info) {
        if (prop !== "image_url") {
          if (Array.isArray(film.info[prop])) {
            col9 += `
          <tr>
              <th>${prop}</th>
              <td>`;
            film.info[prop].forEach((el) => {
              col9 += el + ", ";
            });
            col9 = col9.slice(0, -2);
            col9 += `</td>
              </tr>`;
          } else {
            col9 += `
      <tr>
          <th>${prop}</th>
          <td>${film.info[prop]}</td>
      </tr>`;
          }
        }
      }

      col9 += ` </table>
        </div>
  
  `;
      let row = document.createElement("div");
      row.className = "row justify-content-between no-gutters border p-4 mb-4";
      row.innerHTML = col3 + col9;
      movie.appendChild(row);
    }
  }
}

function createCategory() {
  let item = "";
  for (let i = 0; i < movieDb.length; i++) {
    const film = movieDb[i];
    let categoryItem = film.info.genres;
    categoryItem.forEach((el) => {
      if (category.indexOf(el) === -1) {
        category.push(el);
      }
    });
  }
  category.sort();
  for (let i = 0; i < category.length; i++) {
    const el = category[i];
    item += `
    <li class="nav-item">
            <a class="nav-link" data-category="${i}" href="#">${el}</a>
        </li>
    
    `;
  }
  categoryList.innerHTML = item;
  addClickEvent();
}

function addClickEvent() {
  link = categoryList.querySelectorAll(".nav-link");
  link.forEach((el) => {
    el.addEventListener("click", newCatalog);
  });
}

function newCatalog() {
  let id = parseInt(this.getAttribute("data-category"));
  link.forEach((el) => {
    el.classList.remove("active");
  });
  this.className += " active";
  movie.innerHTML = "";
  createCatalog(id);
}
