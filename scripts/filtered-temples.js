const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  }, 

  {
    templeName: " Manti Utah",
    location: "Manti, Utah, USA",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-utah-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, USA",
        dedicated: "2015, June, 07",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo-guam-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Washington D.C. ",
        location: "Washington D.C., USA",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington-dc-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        area: 96000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-mexico-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-city-utah-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Houston Texas",
        location: "Spring, Texas, USA",
        dedicated: "2000, August, 26",
        area: 33970,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/400x250/houston-texas-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Monterrey Mexico",
        location: "Monterrey, Nuevo León, Mexico",
        dedicated: "2002, April, 28",
        area: 16599,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monterrey-mexico/400x250/monterrey-mexico-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Paris France",
        location: "Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/400x250/paris-france-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Sao Paulo Brazil",
        location: "Sao Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "San Diego California",
        location: "San Diego, California, USA",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-california-temple-lds-273999-wallpaper.jpg"
    }
];

const gallery = document.querySelector(".gallery");
const heading = document.querySelector("main h2");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".nav");

function displayTemples(filteredTemples) {
  gallery.innerHTML = "";
  
    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);
    });
}

function getDedicationYear(temple) {
    return parseInt(temple.dedicated.split(",")[0]);
}

document.querySelector("#home").addEventListener("click", () => {
    heading.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    heading.textContent = "Oldest Temples";
    displayTemples(temples.filter(temple => getDedicationYear(temple) < 1900));
});

document.querySelector("#new").addEventListener("click", () => {
    heading.textContent = "Newest Temples";
    displayTemples(temples.filter(temple => getDedicationYear(temple) >= 2000));
});

document.querySelector("#large").addEventListener("click", () => {
    heading.textContent = "Largest Temples";
    displayTemples(temples.filter(temple => temple.area > 100000));
});

document.querySelector("#small").addEventListener("click", () => {
    heading.textContent = "Smallest Temples";
    displayTemples(temples.filter(temple => temple.area < 20000));
});

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    nav.classList.toggle("open");
});

document.querySelector("#year").textContent =  new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

displayTemples(temples);