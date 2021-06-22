console.log(movieDb.length);
let movie = document.getElementById("movie");
let niz = [1, 2, 3];
console.log(movieDb[0].info.genres.isArray(niz));

for (let i = 0; i < movieDb.length; i++) {
  const film = movieDb[i];
  let col3 = `
  <div class="col-3">
  <img class="img-fluid" src="${film.info.image_url}" alt="">
</div>`;
  let col9 = `
  <div class="col-9 ">
            <table class="table table-striped">
                <tr class="table-info">
                    <th>Title</th>
                    <td>${film.title}</td>
                </tr>
                <tr>
                    <th>Year</th>
                    <td>${film.year}</td>
                </tr>
                <tr>
                    <th colspan="2">Info</th>
                </tr>
                `;
  for (const prop in film.info) {
    if (prop !== "image_url") {
      col9 += `
    <tr>
        <th>${prop}</th>
        <td>${film.info[prop]}</td>
    </tr>`;
    } else if (Array.isArray(film.info.prop)) {
      alert("niz");
      col9 += `
        <tr>
            <th>${prop}</th>
            <td>`;

      prop.forEach((el) => {
        col9 += el + ", ";
      });
      col9 += `</td>
            </tr>`;
    }
  }

  col9 += ` </table>
        </div>
  
  `;
  let row = document.createElement("div");
  row.className = "row justify-content-between no-gutters border p-4";
  row.innerHTML = col3 + col9;

  movie.appendChild(row);
}
