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
  let table = document.querySelector("table");
  let tbody = document.querySelector("tbody");
  let tr = document.querySelectorAll("tr");
  let stbody = document.createElement("tbody");
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].querySelectorAll("td")[1];
    if (td) {
      let txtvalue = td.innerText || td.innerHTML;
      // console.log(txtvalue);
      tbody.innerHTML = "";
      if (txtvalue == target) {
        stbody.append(tr[i]);
      }
      table.append(stbody);
    }
  }
}
