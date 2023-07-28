const modeIcon = document.querySelector("#mode-icon");
const modeName = document.querySelector("#mode-name");
const modeBtn = document.querySelector("#mode-name");
const countries = document.querySelector(".countries")

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        modeIcon.textContent = "light_mode";
        modeName.textContent = "Light Mode"
    }else {
        modeIcon.textContent = "dark_mode";
        modeName.textContent = "Dark Mode";
    }
});

async function getData() {
    const jsonData = await fetch(`../data.json`)
    const res = await jsonData.json()
    console.log(res)
    res.forEach(e => {
        handleShowCountry(e);
    });
    
}
getData()

function handleShowCountry(ctrData) {
    const countryCard = document.createElement("div")
    countryCard.classList.add("country-card")
    countryCard.innerHTML = 
    `
    <div class="flag-wrapper">
        <img src="${ctrData.flag}" alt="">
    </div>
    <div class="demographic-wrapper">
        <h2 class="country-name">${ctrData.name}</h2>
        <p><strong>Population:</strong> <span>${ctrData.population}</span></p>
        <p><strong>Region:</strong> <span>${ctrData.region}</span></p>
        <p><strong>Capital:</strong> <span> ${ctrData.capital} </span></p>
    </div>
    `
    countries.append(countryCard)
    // ctrData.forEach((e) => {
    //     console.log(e.flag)
    // });
}


 