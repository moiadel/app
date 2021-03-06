let user = []

const getUsers = () => {
    fetch('http://127.0.0.1:5000/api/user').then(resp => resp.json()).then(json => renderUsers(json))
}

let renderUsers = (json) => {
    for (let i in json) {
        users.push({ id: json[i]['id'], nom: json[i]['nom'], prenom: json[i]['prenom'], mail: json[i]['mail'], naissance: json[i]['naissance'], username: json[i]['username'] })
    }
    let table = document.querySelector("table")
    let tbody = document.querySelector("tbody")
    let data = Object.keys(users[0])
    generateTableHead(table, data)
    generateTable(tbody, users)

}

const generateTableHead = (table, data) => {
    let thead = table.createTHead();
    let row = thead.insertRow();
    
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
    let th = document.createElement("th");
    let text = document.createTextNode("Gestion");
    th.appendChild(text);
    row.appendChild(th);
}

const generateTable = (table, data) => {

    for (let element of data) {
        let row = table.insertRow()
        for (key in element) {
            let cell = row.insertCell()
            let text = document.createTextNode(element[key])
            cell.appendChild(text);
        }
        cell = row.insertCell(-1);
        var btnRemove = document.createElement("INPUT");
        btnRemove.type = "button";
        btnRemove.value = "Supprimer";
        btnRemove.setAttribute("onclick", "Remove(this)");
        cell.appendChild(btnRemove);

    }
    

}

function Remove(button) {
    
    var row = button.parentNode.parentNode;
    var name = row.getElementsByTagName("TD")[0].innerHTML;
    if (confirm("Do you want to delete: " + name)) {

       
        var table = document.querySelector("#table_admin");

        
        table.deleteRow(row.rowIndex);
        for (let e of user)
            if (e.nom == name) {
                console.log(e)
                var pos = user.indexOf(e)
                console.log(pos)
                user.splice(pos, 1)
                console.log(user)
            }
    }
};

// const getUsers = () => {
//     console.log('get amm users')
//     const options = {
//         method: 'GET',
//         headers: {
//             'Access-Control-Allow-Origin': '*'
//         }
//     }
//     fetch('http://127.0.0.1:5000/api/users', options)
//     .then(resp => resp.json())
//     .then(json => console.log(json))
// }

getUsers()

// let table = document.querySelector("#table_admin")
// let tbody = document.querySelector("#table_body")
// let indice = Object.keys(user[0])
// generateTableHead(table, indice);
// generateTable(tbody, user);


