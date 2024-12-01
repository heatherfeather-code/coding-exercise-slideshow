var current = 0;
var total = 4;

function next(){
    //these all do the same thing. 
    // current = current+1;
    // current += 1;
    current ++;
    //if statement to constrain and loop the target 
    //image within the files. 
    if (current >= total){
        current= 0;
    }
//create a reference to all slides
    var slides = document.getElementsByClassName("slide"); //divsToHide is an array
    //loop through slides
    for(var i = 0; i < slides.length; i++){
       slides[i].style.display ="none";

    }
    //display the selected slide.
    slides[current].style.display ="block";
    
    
console.log("next");
console.log(current);
}

function previous(){
    current --;
    
    if (current < 0){
        current= total-1;
    }
    var slides = document.getElementsByClassName("slide");

    for(var i=0; i < slides.length; i++){
        slides[i].style.display="none";
    }
    //display previous slide
    slides[current].style.display="block";
    console.log("previous");
    console.log(current);
}
