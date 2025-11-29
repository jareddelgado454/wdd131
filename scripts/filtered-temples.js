// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// LAST MODIFIED
document.getElementById("lastModified").textContent = document.lastModified;

// HAMBURGER MENU
const btn = document.getElementById("hamburgerBtn");
const nav = document.getElementById("navMenu");

btn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    btn.textContent = btn.textContent === "☰" ? "✖" : "☰";
});

// TEMPLE DATA ARRAY
const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam Temple",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C. Temple",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 160000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46mAyub0qk2R55koYuonI6FSRLlf7pO7ykw&s"
    },
    {
        templeName: "Lima Perú Temple",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico Temple",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116675,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/saltlake/Salt_Lake_Temple_63061dd9-0544-45ce-8a0d-9261abf81c42.png"
    },
    {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah, United States",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZwxMqdndZzYpLVPuvpNHzVvoieAZHkK-lA&s"
    },
    {
        templeName: "Logan Utah Temple",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/54ac3388abacb11ef04678697a2fc2b6aa0ac4f5/full/800%2C/0/default"
    },
    {
        templeName: "Provo City Center Temple",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0g1xAl2qtqwvBwytcLknlj03lJl2aymzPw&s"
    },
    {
        templeName: "Bogotá Colombia Temple",
        location: "Bogotá, Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbdXU33x250bLFh6mpVimc6xCakiUi-zzW8w&s"
    }
];

// FUNCTION TO CREATE TEMPLE CARD
function createTempleCard(temple) {
    const card = document.createElement("div");
    card.className = "temple-card";
    
    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <div class="temple-card-info">
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </div>
    `;
    
    return card;
}

// FUNCTION TO DISPLAY TEMPLES
function displayTemples(templesToDisplay) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; // Clear existing content
    
    templesToDisplay.forEach(temple => {
        const card = createTempleCard(temple);
        gallery.appendChild(card);
    });
}

// FUNCTION TO FILTER TEMPLES
function filterTemples(filterType) {
    let filtered = [];
    
    switch(filterType) {
        case "old":
            // Temples built before 1900
            filtered = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            break;
        case "new":
            // Temples built after 2000
            filtered = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            break;
        case "large":
            // Temples larger than 90,000 square feet
            filtered = temples.filter(temple => temple.area > 90000);
            break;
        case "small":
            // Temples smaller than 10,000 square feet
            filtered = temples.filter(temple => temple.area < 10000);
            break;
        case "all":
        default:
            // Display all temples
            filtered = temples;
            break;
    }
    
    displayTemples(filtered);
}

// NAVIGATION FILTER EVENT LISTENERS
document.addEventListener("DOMContentLoaded", () => {
    // Display all temples initially
    displayTemples(temples);
    
    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filterType = link.getAttribute("data-filter");
            filterTemples(filterType);
        });
    });
});

