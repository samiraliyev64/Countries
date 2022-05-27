let myTable = document.querySelector(".myTable");
let text = document.querySelector(".text");
let count = 1;

fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => data.forEach(item => {
    let tr = ` <tr>
                    <th scope="row">${count++}</th>
                    <td>${item.name.official}</td>
                    <td>
                        <img src="${item.flags.png}">
                    </td>
                    <td>${item.capital}</td>
                    </tr>`;
    if(!(item.name.official == "Republic of Armenia")){
        myTable.innerHTML += tr;
    }
}));