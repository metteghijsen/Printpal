let categoryItem1 = document.getElementById("category-item-1");
let categoryItem2 = document.getElementById("category-item-2");
let categoryItem3 = document.getElementById("category-item-3");
let categoryArray = [categoryItem1,categoryItem2,categoryItem3];

categoryArray.forEach(category=> {
    category.addEventListener("click", () => {
        if (category.classList.contains("category-clicked")) {
            category.classList.remove("category-clicked")
        } else {
            category.classList.add("category-clicked");
        }
    })
})

