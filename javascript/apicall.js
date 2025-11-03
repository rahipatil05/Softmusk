

let btw = document.getElementById("btw")

btw.addEventListener("click", functioncall)

async function functioncall() {
    try {
        let respounce = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await respounce.json()

        console.log(data)

        data.forEach(obj => {
            let div = document.createElement("div")
            let h1 = document.createElement("h1")

            h1.innerHTML = `${obj.name} - <span> ${obj.email} </span>`

            div.appendChild(h1)
            document.body.appendChild(div)

            // h1.style.color = ""
            h1.style.fontSize = "20px"
            h1.style.alignItems = "center"
            h1.style.display = ""
        });
    } catch (error) {
        console.log(error)
    }
}
