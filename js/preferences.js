let categoryItem1 = document.getElementById("category-item-1");
let categoryItem2 = document.getElementById("category-item-2");
let categoryItem3 = document.getElementById("category-item-3");
let categoryItem4 = document.getElementById("category-item-4");
let categoryItem5 = document.getElementById("category-item-5");
let categoryArray = [categoryItem1,categoryItem2,categoryItem3,categoryItem4,categoryItem5];

categoryArray.forEach(category=> {
    category.addEventListener("click", () => {
        if (category.classList.contains("category-clicked")) {
            category.classList.remove("category-clicked")
        } else {
            category.classList.add("category-clicked");
        }
    })
})

