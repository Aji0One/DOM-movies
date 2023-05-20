const tbody = document.querySelector("tbody");
const search = document.querySelector("input");

search.addEventListener("change", searchData);

async function fetchdata() {
  const res = await fetch(
    "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json"
  );

  const data = await res.json();
  return data;
}

const mydata = fetchdata();

mydata.then((res) => {
  for (let i = 0; i < res.length; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const { title, year, description } = res[i];
    td1.innerHTML = title;
    td2.innerHTML = year;
    td3.innerHTML = description;
    tr.append(td1, td2, td3);
    tbody.append(tr);
  }
});

function searchData() {
  let target = document.getElementById("input").value;

  mydata.then((resp) => {
    tbody.innerHTML = "";
    for (let i = 0; i < resp.length; i++) {
      if (resp[i].year == target) {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const { title, year, description } = resp[i];
        td1.innerHTML = title;
        td2.innerHTML = year;
        td3.innerHTML = description;
        tr.append(td1, td2, td3);
        tbody.append(tr);
      }
    }
  });
}
