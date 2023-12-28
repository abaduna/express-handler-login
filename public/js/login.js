const from =document.getElementById("loginForm")
from.addEventListener("submit",e=>{
    e.preventDefault()
    const data = new FormData(from)
    const obj = {}


    data.forEach((value,key)=>obj [key] = value)

    fetch("/api/sessions/login",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            "content-Type":`aplication/json`
        }
    }).then(result=>{
        if (result.status ===200) {
            window.location.replace("/")
        }
    })
})