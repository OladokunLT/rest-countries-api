const modeIcon = document.querySelector("#mode-icon");
const modeName = document.querySelector("#mode-name");
const modeBtn = document.querySelector("#mode-name");
const countries = document.querySelector(".countries")
const regionTab = document.querySelector(".region-tab")
const regionList = document.querySelector(".region-list")
const continent = document.querySelectorAll(".continent")
const regionName = document.getElementsByClassName("region-name")
const searchIcon = document.querySelector("#search-icon")
const searchTerm = document.querySelector("#search-term")
const countriesName = document.getElementsByClassName("country-name")
// country modal script




searchTerm.addEventListener("input", ()=>{
    regionList.classList.add("hide")
    Array.from(countriesName).forEach((countryName) => {
        if (countryName.textContent.toLowerCase().includes(searchTerm.value.toLowerCase())) {
            console.log(countryName.textContent)
            countryName.parentElement.parentElement.style.display = "block"
        } else {
            countryName.parentElement.parentElement.style.display = "none"
        }
    })
})

Array.from(continent).forEach( (region) => {
    region.addEventListener("click", ()=> {
        searchTerm.value = "";
        Array.from(regionName).forEach((regName) => {
            if(regName.textContent == region.textContent) {
                regName.parentElement.parentElement.parentElement.style.display = "block"
            } else {
                regName.parentElement.parentElement.parentElement.style.display = "none"
            }
            if (region.textContent == "All") {
                regName.parentElement.parentElement.parentElement.style.display = "block"
            }
        })
        region.parentElement.classList.add("hide")
    })
})

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

    countryCard.addEventListener("click", ()=>{
        handleShowModal(ctrData)
    })
}
const searchSection = document.querySelector(".search-section")
const countryModal = document.querySelector(".country-modal")
function handleShowModal (ctrData){
    countryModal.classList.toggle("hide");

    countryModal.innerHTML =
    `
        <button class="close-country-modal"> 
            <span class="material-symbols-outlined">
                 keyboard_backspace
            </span>
            Back
        </button>

        <div class="details-text-wrapper">
        <div class="details">
            <div class="flag">
                <img src="${ctrData.flag}" alt="">
            </div>
                        
            <div class="details-text">
                <h2 class="country-name">${ctrData.name}</h2>
                <div class="left-right-details">
                    <div class="left-details">
                        <p><strong>Native Name:</strong> <span>${ctrData.nativeName}</span></p>
                        <p><strong>Population:</strong> <span>${ctrData.population}</span></p>
                        <p><strong>Region:</strong> <span>${ctrData.region}</span></p>
                        <p><strong>Sub Region:</strong> <span>${ctrData.subregion}</span></p>
                        <p><strong>Capital:</strong> <span>${ctrData.capital}</span></p>
                    </div>
                    <div class="right-details">
                        <p><strong>Top Level Domain:</strong> <span>${ctrData.topLevelDomain}</span></p>
                        <p><strong>Currencies:</strong> <span>${ctrData.currencies.map(e=>e.name)}</span></p>
                        <p><strong>Languages:</strong> <span>${ctrData.languages.map(e=>e.name)}</span></p>
                    </div>
                </div>
                <div class="border-countries">
                    <h5>Border Countries</h5>
                    <ul id="regionalblocs"> 
                    
                    </ul>
                </div>
            </div>
        </div> 
        </div>             
    `
    const closeCountryModal = document.querySelector(".close-country-modal")
    closeCountryModal.addEventListener("click", ()=>{
        countryModal.classList.toggle("hide")
    })
}

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




 