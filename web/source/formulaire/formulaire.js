const submit = (event) => {
   event.preventDefault()
   console.log('test de form');
   const user = {}
   const form = event.target
   for (input of form) {
       if (input.id !== "") {
           user[input.id] = input.value
       }
   }
   console.log(user)
}

document.querySelector('#newuser').addEventListener('submit', submit)



// on fait une requete avec fetch on recoit une reponse et dans la reponse on recupere le json 
// et qd j'ai le json je fais un traitement,ici renderusers(json) pr recup les users ou console.log(json)

fetch('http://127.0.0.1:5000/api/users')
   .then(resp => resp.json())
   .then(json=>renderusers(json)
   )



