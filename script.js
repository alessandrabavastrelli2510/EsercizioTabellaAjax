/*const data = [{
    name: "Ciccio",
    lastname: "Pasticcio",
    birthdate: new Date(2000, 0, 13),
    jobTitle: "Cloud Architect",
    salary: 2000
},
{
    name: "Ciccia",
    lastname: "Pasticcia",
    birthdate: new Date(1989, 4, 9),
    jobTitle: "Cloud Engineer",
    salary: 2200
},
{
    name: "Riccio",
    lastname: "Ripasticcio",
    birthdate: new Date(2003, 5, 8),
    jobTitle: "Architect",
    salary: 1600
},
{
    name: "Riccia",
    lastname: "Ripasticcia",
    birthdate: new Date(1990, 3, 15),
    jobTitle: "Interior Designer",
    salary: 1500
},
{
    name: "Mazzafiondo",
    lastname: "Potentissimo",
    birthdate: new Date(1998, 6, 23),
    jobTitle: "Space Engineer",
    salary: 8000
},
{
    name: "Mazzafionda",
    lastname: "Potentissima",
    birthdate: new Date(2001, 9, 30),
    jobTitle: "Astronaut",
    salary: 10000
}];*/


const button = document.getElementById("jsButton");
const tablejs = document.getElementById("tablejs");
let loaded = false;
let t1 = button.addEventListener("click", handleClick);
function handleClick(evt){
    if (loaded) {
        return;
    }
        /*let xhr = new XMLHttpRequest();
        xhr.open("GET", "data.json", true);
        xhr.onload = function(){
            if (xhr.status >= 200 && xhr.status < 300) {
                createTable(JSON.parse(xhr.responseText));
            }
        }
        xhr.send();*/
    doAjaxGetRequest("data.json", createTable);
}
        
    /*let xhr = new XMLHttpRequest();
    xhr.open("GET", "data.json", true);
    xhr.onload = function(){
        if (xhr.status >= 200 && xhr.status < 300) {
            createTable(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();*/
    /*doAjaxGetRequest("data.json", createTable);
    console.log("Richiesta inviata");
});*/

function doAjaxGetRequest(url, callback){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(evt) {
        console.log(evt);
        callback(JSON.parse(xhr.responseText));
    } 
    xhr.send();
}

function createTable(data){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");

    for(let key in data[0]){
        const th = document.createElement("th");
        th.textContent = key;
        tr.appendChild(th);
    }

    thead.appendChild(tr);
    table.appendChild(thead);
    console.log(data);
    data.forEach(item => {
        const row = document.createElement("tr");
        for(let i in item){
            const td = document.createElement("td");
            let value = item[i];
            if(value instanceof Date){
                value = item[i].toLocaleDateString('it-IT');
            }
            td.textContent = value;
            row.appendChild(td);
        }
        tbody.appendChild(row);   
    });
    table.appendChild(tbody); 
    tablejs.appendChild(table);
    loaded = true;
}


const button2 = document.getElementById("htmlButton");
const tablehtml = document.getElementById("table");
let t2 = button2.addEventListener("click", function createTable2(){
    let headerRow = `<tr>${Object.keys(data[0]).map(k => `<th>${k}</th>`).join('')}</tr>`;
    let rows = data.map(item => `<tr>${Object.values(item).map(createTd).join('')}</tr>`).join('');
    tablehtml.innerHTML = `<thead>${headerRow}</thead><tbody>${rows}</tbody>`;
    console.log(rows);
});

function createTd(value) {
    let text = value instanceof Date? value.toLocaleDateString('it-IT') : value;
    return `<td>${text}</td>`;
}





