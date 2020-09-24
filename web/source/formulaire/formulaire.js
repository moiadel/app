const renderUsers = (json) => {
    console.log(json)
    const table = document.querySelector('#table_recherche')
    for (user of json) {
        const tr = table.insertRow()
        for (key in user) {
            let cell = tr.insertCell()
            cell.innerHTML = user[key]
        }
    }
}



///fetch('http://192.168.99.100/inscription/inscription').then (resp=>resp.json).then (json=>renderUsers(json))

const send = (event) => {
    
    event.preventDefault();
    


    fetch('http://127.0.0.1:5000/register')
        .then(function(response) {
            response.json()
                .then(function(value) {
                    renderUsers(value);
                })
        })
}


document.querySelector("#formrecherche").addEventListener('submit', send);