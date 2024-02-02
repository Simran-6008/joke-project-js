const button = document.querySelector("button")
const pOne = document.querySelector(".pOne")

button.addEventListener("click", () =>{
    const apiUrl = "https://v2.jokeapi.dev/joke/Any"
    const fetchApi = fetch(apiUrl)
    //console.log(fetchApi)
    fetchApi
    .then((response) => {
        return response.json();
    })
    .then((jokes) => {if(jokes.type === "single"){
        pOne.textContent = jokes.joke
    }else{
        pOne.textContent = jokes.delivery + jokes.setup
    }
    })
})

