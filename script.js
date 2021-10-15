fetch("https://ghibliapi.herokuapp.com/films") //requesting JSON
    .then((res) => {
        return res.json()
    })
    .then((data) => {


        const dropDown = document.querySelector("#movie-selection")
        const form = document.querySelector("review-form")
        const userUnput = document.querySelector
        const reviewSubmission = document.querySelector
        



        /* iteration */

        for (let movie of data) {

            const option = document.createElement("option")
            option.textContent = movie.title;
            dropDown.append(option)

            dropDown.addEventListener("change", (event) => {
                event.preventDefault();
                /* we must check if the current selection of the dropdown matches the movie - we must check every movie*/

                for (let currentMovie of data) {
                    if (dropDown.value === currentMovie.title) {
                        console.log(currentMovie.title)

                        const displayInfo = document.querySelector("#movie-information")
                        

                        displayInfo.innerHTML =
                            `<h2>${currentMovie.title}</h2
                            <p>${currentMovie.release_date}</p>
                            <p>${currentMovie.description}>/p>`;


                    }
                }
            })
        }
    })


            /* Use change not "click" */




