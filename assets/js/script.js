const modeIcon = document.querySelector("#mode-icon");
const modeName = document.querySelector("#mode-name");
const modeBtn = document.querySelector("#mode-name");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        modeIcon.textContent = "light_mode";
        modeName.textContent = "Light Mode"
    }else {
        modeIcon.textContent = "dark_mode";
        modeName.textContent = "Dark Mode";
    }
})

 