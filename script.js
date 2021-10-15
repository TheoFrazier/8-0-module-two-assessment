fetch("https://ghibliapi.herokuapp.com/films") //requesting JSON
    .then((res) => {
        return res.json()
    })
    .then((data) => {


        const dropDown = document.querySelector("#movie-selection")
        const form = document.querySelector("form")
        const input = document.querySelector("#input")


        /* iteration */

        for (let movie of data) {

            const option = document.createElement("option")
            option.textContent = movie.title;
            dropDown.append(option)
        }

        dropDown.addEventListener("change", (event) => {
            event.preventDefault();
            /* we must check if the current selection of the dropdown matches the movie - we must check every movie*/

            for (let currentMovie of data) {

                if (dropDown.value === currentMovie.title) {
                    console.log(currentMovie.title)

                    const displayInfo = document.querySelector("#movie-information")


                    displayInfo.innerHTML =
                        `<h3>${currentMovie.title}</h3>
                            <p>${currentMovie.release_date}</p>
                            <p>${currentMovie.description}</p>`;


                }
            }
        });

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            /*We are letting the user submit the review for the CURRENT movie */

            const li = document.createElement('li')
            li.innerHTML = `<b>${dropDown.value} :</b>
                ${form.value}`

            const ul = document.querySelector("ul")
            ul.append(li)

        });



    }).catch((error) => {
        console.log(error)
    });








