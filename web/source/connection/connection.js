
const send = () =>{
  event.preventDefault()
    for(let elem of event.target)
       console.log(elem.value)

}   

document.querySelector("#connection").addEventListener('submit',send)
