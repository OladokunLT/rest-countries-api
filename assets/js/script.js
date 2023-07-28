const modeIcon = document.querySelector("#mode-icon");
const modeName = document.querySelector("#mode-name");
const modeBtn = document.querySelector("#mode-name");
const countries = document.querySelector(".countries")
const regionTab = document.querySelector(".region-tab")
const regionList = document.querySelector(".region-list")
const continent = document.querySelectorAll(".continent")
const regionName = document.getElementsByClassName("region-name")

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

regionTab.addEventListener("click", () => {
    regionList.classList.toggle("hide")
})

async function getData() {
    const jsonData = await fetch(`data.json`)
    const res = await jsonData.json()
    res.forEach((e) => {
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
        <p><strong>Region:</strong> <span class="region-name">${ctrData.region}</span></p>
        <p><strong>Capital:</strong> <span> ${ctrData.capital} </span></p>
    </div>
    `
    countries.append(countryCard)
}

Array.from(continent).forEach( (region) => {
    region.addEventListener("click", ()=> {
        console.log( region.textContent )
        Array.from(regionName).forEach((regName) => {
            console.log(regName.textContent)
            if(regName.textContent == region.textContent) {
                regName.parentElement.parentElement.parentElement.style.display = "block"
            } else {
                regName.parentElement.parentElement.parentElement.style.display = "none"
            }
            if (region.textContent == "All") {
                regName.parentElement.parentElement.parentElement.style.display = "block"
            }
        })
    })
})



 