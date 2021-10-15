fetch("https://ghibliapi.herokuapp.com/films") //requesting JSON
.then((res) => {
    return res.json()
})
.then((data) => {
console.log(data)

const dropDown = document.querySelector("#movie-selection")
const form = document.querySelector("review-form")
const userUnput = document.querySelector
const reviewSubmission = document.querySelector



/* iteration */ 

for (let movie of data) {



    const option = document.createElement("option")
    option.textContent = movie.title;
    dropDown.append(option)
}


}).catch((err) => {
    console.log(err)
});