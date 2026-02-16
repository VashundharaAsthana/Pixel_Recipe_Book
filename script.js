//all recipies
const recipes = document.querySelectorAll(".recipe");
const names=document.querySelectorAll(".recipeName")
// get BUttons
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// start -first recipe
let currentRecipe = 0;
showRecipe(currentRecipe);

function showRecipe(index) {

    // remove active from all recipes
    recipes.forEach(recipe => {
        recipe.classList.remove("active");
    });
     names.forEach(h => h.classList.remove("active"));
    // add active to selected recipe
    recipes[index].classList.add("active");
   names[index].classList.add("active");
}

// NEXT button
nextBtn.addEventListener("click", () => {

    currentRecipe++;

    if (currentRecipe >= recipes.length) {
        currentRecipe = 0;
    }

    showRecipe(currentRecipe);
});

// PREV button
prevBtn.addEventListener("click", () => {

    currentRecipe--;

    if (currentRecipe < 0) {
        currentRecipe = recipes.length - 1;
    }

    showRecipe(currentRecipe);
});
//timer
const timerSound = new Audio("alarm.mp3");
document.querySelectorAll(".timerButton").forEach(btn => {

    let timerInterval;
    

    btn.addEventListener("click", function(){

        clearInterval(timerInterval);
        let timeLeft =Number(btn.dataset.time);

        timerInterval = setInterval(function(){

            timeLeft--;

            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;

            btn.textContent =
                String(minutes).padStart(2,"0") + ":" +
                String(seconds).padStart(2,"0");

            if(timeLeft <= 0){
                clearInterval(timerInterval);
                btn.textContent = "Done!";
                timerSound.play();
            }

        },1000);

    });

});
//button Click
const clickSound = new Audio("click.mp3");
const buttons = document.querySelectorAll("button");
 buttons.forEach(function(btn){
    btn.addEventListener("click", function(){
        clickSound.currentTime=0;//if user clicks fast restart
        clickSound.play();
    })
 })