// Current Year

function displayYear() {
    const year = document.querySelector("#year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
}

// Mobile Navigation

function toggleMenu() {
    const navigation = document.querySelector("#navigation");

    if (navigation) {
        navigation.classList.toggle("open");
    }
}

//Skincare Routine Data

const routines = [
    {
        skinType: "dry",
        title: "Dry Skin Routine",
        image: "images/dry.webp",
        description:
            "Focus on hydration and gentle products that help support the skin barrier.",

            morning: [
                "Gentle cleanser",
                "Hydrating serum",
                "Moisturizer",
                "Sunscreen SPF 30+"
            ],

            night: [
                "Gentle cleanser",
                "Moisturizer",
                "Facial oil (optional)"
            ]
    },

    {
        skinType: "oily",
        title: "Oily Skin Routine",
        image: "images/oily.webp",
        description:
        "The goal is to balance, not removing every drop of oil.",

        morning: [
            "Foaming cleanser",
            "Light moisturizer",
            "Oil-free sunscreen"
        ],

        night: [
            "Cleanser",
            "Niacinamide serum",
            "Gel moisturizer"
        ]
    },

    {
        skinType: "combination",
        title: "Combination Skin Routine",
        image: "images/combination.webp",
        description:
        "Treat dry and oily areas gently without overcomplicating your routine.",

        morning: [
            "Balanced cleanser",
            "Light moisturizer",
            "Sunscreen"
        ],

        night: [
            "Cleanser",
            "Hydrating moisturizer"
        ]
    },
    {
        skinType: "sensitive",
        title: "Sensitive Skin Routine",
        image: "images/sensitive.webp",
        description:
        "Choose fragrance-free products and introduce new ingredients slowly.",

        morning: [
            "Gentle cleanser",
            "Moisturizer",
            "Mineral sunscreen"
        ],

        night: [
            "Gentle cleanser",
            "Barrier-repair moisturizer"
        ]
    }
];

//Build Routine Card

function createRoutineCard(routine) {
    return `
    <article class="routine-card">
        <img src="${routine.image}"
             alt="${routine.title}"
             loading="lazy">

        <h3>${routine.title}</h3>

        <p>${routine.description}</p>

        <h4>Morning</h4>

        <ul>
            ${routine.morning
                .map(step => `<li>${step}</li>`)
                .join("")}
        </ul>

        <h4>Night</h4>

        <ul>
            ${routine.night
                .map(step => `<li>${step}</li>`)
                .join("")}
        </ul>
    </article>`;
}

//Display Routines

function displayRoutines(filterValue = "all") {
    const routinecontainer = document.querySelector("#routine-cards");

    if (!routinecontainer) {
        return;
    }

    let filteredRoutines = routines;

    if (filterValue !== "all") {
        filteredRoutines = routines.filter(
            routine => routine.skinType === filterValue
        );
    }

    routinecontainer.innerHTML = filteredRoutines
        .map(createRoutineCard)
        .join("");
}

//Save Skin Type

function saveSkinType() {
    const skinType = document.querySelector("#skin-type");

    if (skinType && skinType.value !== "") {
        localStorage.setItem("skinType", skinType.value);
        displayRoutines(skinType.value);
    }
}


//Show Saved Skin Type

function displaySavedSkinType() {
    const savedSkinType = 
    localStorage.getItem("skinType");

    const homeMessage =
    document.querySelector(
        "#saved-skin-message"
    );

    const thankYouMessage =
    document.querySelector(
        "#thank-you-message"
    );
    
    if (homeMessage) {
        if(saveSkinType) {
            homeMessage.textContent =
            `Your saved skin type is ${savedSkinType}. Explore routines design for your skin.`;
        } else {
            homeMessage.textContent =
            "No skin type skin has been saved yet."
        }
    }
    if (thankYouMessage && saveSkinType) {
        thankYouMessage.textContent =
        `We saved your skin type as ${saveSkinType}.`
    }
}

//Event Listeners

function setupEventListeners() {
    const menuButton =
    document.querySelector("#menu-button");

    const filter =
    document.querySelector("#skin-filter");

    const form =
    document.querySelector("#contact-form");

    if(menuButton) {
        menuButton.addEventListener(
            "click",
            toggleMenu
        );
    }

    if (filter) {

        filter.addEventListener(
            "change",
            () => {
                displayRoutines(filter.value);
            }
        );
    }

    if (form) {
        form.addEventListener(
            "submit",
            saveSkinType
        );
    }
}

//Initialize Site

displayYear();

displayRoutines();

displaySavedSkinType();

setupEventListeners();
