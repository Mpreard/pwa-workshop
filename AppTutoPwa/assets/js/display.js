const container = document.querySelector(".container")
const coffees = [
    {
        name: "Perspiciatis",
        image: "./assets/images/coffee1.jpg"
    },
    {
        name: "Voluptatem",
        image: "./assets/images/coffee2.jpg"
    },
    {
        name: "Explicabo",
        image: "./assets/images/coffee3.jpg"
    },
    {
        name: "Rchitecto",
        image: "./assets/images/coffee4.jpg"
    },
    {
        name: " Beatae",
        image: "./assets/images/coffee5.jpg"
    },
    {
        name: " Vitae",
        image: "./assets/images/coffee6.jpg"
    },
    {
        name: "Inventore",
        image: "./assets/images/coffee7.jpg"
    },
    {
        name: "Veritatis",
        image: "./assets/images/coffee8.jpg"
    },
    {
        name: "Accusantium",
        image: "./assets/images/coffee9.jpg"
    }
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({name, image}) =>
            (output += `
    <div class="card">
    <img class="card-avatar" src=${image}  alt="Coffee"/>
    <h1 class="card-title">${name}</h1>
    <a class="card-link" href="#">Taste</a>
    </div>
    `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)