

const from =document.getElementById("registerForm")
from.addEventListener("submit",e=>{
    e.preventDefault()
    const data = new FormData(from)
    const obj = {}


    data.forEach((value,key)=>obj [key] = value)

    fetch("/api/sessions/register",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "content-Type":`aplication/json`
        }
    }).then(result=>result.json().then(json = console.log(json)))
})