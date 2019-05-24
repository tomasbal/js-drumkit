var dn = document.querySelectorAll(".drum").length;

function playSound(input){
    var sound = new Audio("sounds/"+input);
    sound.play();
}

function makeSound(key){
    switch (key) {

        case "w":
            playSound("kick-bass.mp3");
            break;

        case "a":
            playSound("snare.mp3");
            break;

        case "s":
            playSound("crash.mp3");
            break;

        case "d":
            playSound("tom-1.mp3");
            break;

        case "j":
            playSound("tom-2.mp3");
            break;

        case "k":
            playSound("tom-3.mp3");
            break;

        case "l":
            playSound("tom-4.mp3");
            break;

        default: console.log(buttonInnerHTML);
    }

}

//Clicked drums
for(var i=0; i<dn;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//Key preessed drums
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

//Button animations
function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}