let products = {
    data: [
        {
            productName: "Fruit Salad",
            category: "Sweet",
            price: "150",
            image: "image/menu/sweet/FRUIT SALAD.jpg",
        }, {
            productName: "Kesar Pista Ice Cream",
            category: "Sweet",
            price: "110",
            image: "image/menu/sweet/KESAR PISTA ICE CREAM.webp",
        }, {
            productName: "Strawberry Ice Cream",
            category: "Sweet",
            price: "100",
            image: "image/menu/sweet/STRAWBERRY ICE CREAM.jpg",
        }, {
            productName: "Rajasthani Special Kheer",
            category: "Sweet",
            price: "100",
            image: "image/menu/sweet/RAJASTHANI SPECIAL KHEER.jpeg",
        }, {
            productName: "Gulab Jamun With Ice Cream",
            category: "Sweet",
            price: "110",
            image: "image/menu/sweet/GULAB JAMUN WITH ICE CREAM.jpeg",
        }, {
            productName: "Panner Butter Masala",
            category: "Main-Course",
            price: "250",
            image: "image/menu/main-course/PANNER BUTTER MASALA.jpg",
        }, {
            productName: "Malai Kofta Sweet",
            category: "Main-Course",
            price: "250",
            image: "image/menu/main-course/MALAI KOFTA SWEET.webp",
        }, {
            productName: "Veg Mixed",
            category: "Main-Course",
            price: "200",
            image: "image/menu/main-course/VEG MIXED.jpg",
        }, {
            productName: "Sabaji Kofta Curry Spicy",
            category: "Main-Course",
            price: "220",
            image: "image/menu/main-course/SABAJI KOFTA CURRY SPICY.jpg",
        }, {
            productName: "Dum Aloo",
            category: "Main-Course",
            price: "200",
            image: "image/menu/main-course/DUM ALOO.jpg",
        }, {
            productName: "Aloo Gobi Matar",
            category: "Main-Course",
            price: "180",
            image: "image/menu/main-course/ALOO GOBI MATAR.jpg",
        }, {
            productName: "Chana Masala",
            category: "Main-Course",
            price: "220",
            image: "image/menu/main-course/CHANA MASALA.webp",
        },
        {
            productName: "Poha",
            category: "BreakFast",
            price: "100",
            image: "image/menu/breakfast/POHA.jpg",
        },
        {
            productName: "Sandwich",
            category: "BreakFast",
            price: "70",
            image: "image/menu/breakfast/SANDWICH.webp",
        },
        {
            productName: "Idli Fry",
            category: "BreakFast",
            price: "70",
            image: "image/menu/breakfast/IDLI FRY.jpeg",
        },
        {
            productName: "Upma",
            category: "BreakFast",
            price: "80",
            image: "image/menu/breakfast/UPMA.jpg",
        },
        {
            productName: "Vada Pav",
            category: "BreakFast",
            price: "60",
            image: "image/menu/breakfast/VADA PAV.JPG",
        },
        {
            productName: "Coffee",
            category: "BreakFast",
            price: "30",
            image: "image/menu/breakfast/COFFEE.jpeg",
        },
        {
            productName: "Chai",
            category: "BreakFast",
            price: "20",
            image: "image/menu/breakfast/CHAI.jpg",
        }, {
            productName: "Poori Bhaji",
            category: "Snacks",
            price: "140",
            image: "image/menu/snacks/POORI BHAJI.webp",
        }, {
            productName: "Spring Roll",
            category: "Snacks",
            price: "150",
            image: "image/menu/snacks/SPRING ROLL.jpg",
        }, {
            productName: "Cheese Ball",
            category: "Snacks",
            price: "200",
            image: "image/menu/snacks/CHEESE BALL.jpg",
        }, {
            productName: "Veg Pakoda",
            category: "Snacks",
            price: "100",
            image: "image/menu/snacks/VEG PAKODA.webp",
        }, {
            productName: "Veg Cutlet",
            category: "Snacks",
            price: "150",
            image: "image/menu/snacks/VEG CUTLET.jpg",
        },
    ],
};

for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("dishContainer");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let priceButton = document.createElement("div");
    priceButton.classList.add("price-button");

    //price
    let price = document.createElement("h6");
    price.innerText = "Price : " + "₹ " + i.price;
    priceButton.appendChild(price);

    let cardButton = document.createElement("button");
    cardButton.innerText = "Add To Card";
    priceButton.appendChild(cardButton);

    container.appendChild(priceButton);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active-button");
        } else {
            button.classList.remove("active-button");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search-input").addEventListener("keyup", function (event) {
    // Check if 'Enter' key is pressed
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    if (event.keyCode === 13) {
        // Call the search function
        const searchText = event.target.value;
        elements.forEach((element, index) => {
            //check if text includes the search value
            if (element.innerText.includes(searchInput.toUpperCase())) {
                //display matching card
                cards[index].classList.remove("hide");
            } else {
                //hide others
                cards[index].classList.add("hide");
            }
        });
    } else {
        document.getElementById("search").addEventListener("click", () => {
            //initializations
            let searchInput = document.getElementById("search-input").value;
            let elements = document.querySelectorAll(".product-name");
            let cards = document.querySelectorAll(".card");

            //loop through all elements
            elements.forEach((element, index) => {
                //check if text includes the search value
                if (element.innerText.includes(searchInput.toUpperCase())) {
                    //display matching card
                    cards[index].classList.remove("hide");
                } else {
                    //hide others
                    cards[index].classList.add("hide");
                }
            });
        });
    }
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};

