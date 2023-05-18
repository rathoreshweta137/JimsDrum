/*
event listener will have two paramters : type and function
button pe click krte hi event perform hoga 

query selector is used for only 1 element 
document.querySelector("button").addEventListener("click", handleclick);
function handleclick() {
    window.alert("I got clicked")
}

if i want this to appiled on every button , so i must use quereyselectorAll which is accessed by array method 

*/



/*var noofbuttons = document.querySelectorAll(".drum").length;
for (let i = 0; i < noofbuttons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", sound);
    function sound() {
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play();
}
    
}*/

/*
Higher order function : that takes another fucntion as input eg calcultor 
*/

/*var noofbuttons = document.querySelectorAll(".drum").length;
for (let i = 0; i < noofbuttons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = "white";
        // console.log(this.innerHTML) this will give a, w , k , l etc
    } );
    
}*/

// var noofbuttons = document.querySelectorAll(".drum").length;
// for (let i = 0; i < noofbuttons; i++) {
    
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         var buttonInnerHTML = this.innerHTML;
//         switch (buttonInnerHTML ) {
//             case "w":
//                 var audio = new Audio("sounds/tom-1.mp3");
//                 audio.play();
//               break;

//             case "a":
//                 var audio = new Audio("sounds/tom-2.mp3");
//                 audio.play();
//               break;

//             case "s":
//                 var audio = new Audio("sounds/tom-3.mp3");
//                 audio.play();
//               break;
        
//             case "d":
//                 var audio = new Audio("sounds/tom-4.mp3");
//                 audio.play();
//               break;


//             case "j":
//                 var audio = new Audio("sounds/snare.mp3");
//                 audio.play();
//               break;

//             case "k":
//                 var audio = new Audio("sounds/crash.mp3");
//                 audio.play();
//               break;

//             case "l":
//                 var audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//               break;

            
            
        
//             default:
//                 break;
//         }
//     });
    
// }

// // document.addEventListener("keydown", function () {
// //     window.alert("Babes , key was pressed")
// // })

// // document.addEventListener("keydown", function (event) {
// //     console.log(event);
// // })


// detecting button pressed
var noofbuttons = document.querySelectorAll(".drum").length;
for (let i = 0; i < noofbuttons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
    
}

// detecting a key pressed
document.addEventListener("keydown", function (event) {
    
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    

    switch (key ) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
          break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
          break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
          break;
    
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
          break;


        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
          break;

        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
          break;

        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
          break;

        
        
    
        default:
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

    
