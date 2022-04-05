const form = document.getElementById("form");
let select = document.querySelectorAll(".label");
const rating = document.querySelector(".rating");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const result = form.elements["frontendmentor"].value;
    rating.innerHTML = "";

    if (!result) return;

    const loading = `
    <div class="loader__container">
        <div class="loader"></div>
    </div>
    `;
    rating.insertAdjacentHTML("beforeend", loading);

    setTimeout(function () {
        rating.innerHTML = "";

        const html = `
        <div class="thankyou__wrapper">
        <div class="wrapper__img--thankyou">
            <img
                src="./images/illustration-thank-you.svg"
                alt="thank you"
            />
        </div>
        <p class="thankyou__selected">You selected ${result} out of 5</p>
    
        <h1 class="rating__title">Thank you!</h1>
        <p class="rating__text">
            We appreciate you taking the time to give a rating. If
            you ever need more support, don’t hesitate to get in
            touch!
        </p>
        </div>
        `;
        rating.insertAdjacentHTML("beforeend", html);
    }, 500);
});

// adding active class to current element
for (let i = 0; i < select.length; i++) {
    select[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        console.log(current);
    });
}
