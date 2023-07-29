// letters  ادخال الحروف 
const letters ="abcdefghijklmnopqrstuvwxyz";
//Get Array from lettersعمل مصفوفه من جميع الحروف 
let lettersArray=Array.from(letters);
//Select letters container تحديد الديف الخاص بالحروف 

let lettersContainer =document.querySelector(".letters");

// Generate letters

lettersArray.forEach(letter=> {

    //Creat Span
    let span=document.createElement("span");
//creat letters Text node 
 let theletter =document.createTextNode(letter)

//append the letters to span 

span.appendChild(theletter)

//add class name on span
span.className="letter-box"

//append span to the letters container
lettersContainer.appendChild(span)

});


//object of words + catagories

const words={
    programing:["php", "Javascript", "go", "scale", "fortran", "r", "mysqul", "paython"],
    movies:["prestige", "inception", "parasite", "intersteller", "whiplash", "memento", "coco", "Up",],
    people:["Albert Enistein", "Hitchock", "Alexander", "Cleopatra", "mahatma"],
    countries:["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
    }
//get Random property

let allKeys=Object.keys(words)//=دى ميثود او عمليه بتجيب الكى داخل الاوبجيكت 
//=Rondom Numper Depend in Keys Leanth
let randompropnumper=Math.floor(Math.random() * allKeys.length);//=الحصول على قيمه  رقم عشوائية من  مفاتيح الاوبجيكت 
//=Catagory
let randompropname=allKeys[randompropnumper];//=الحصول على  اسم القيمه العشوائيه من  مفاتيح الالاوبجيكت 
//=Catagory words
let randompropValue = words[randompropname]//=هنا هنقوم بطباعه كل قيم  مفاتيح الاوبجيكت  مختلفين كل مره

console.log(randompropValue)//='Syria', 'Palestine', 'Yemen', 'Egypt', 'Bahrain', 'Qatar']

//=Rondom Numper Depend on Words
let randomValueNumper = Math.floor(Math.random() * randompropValue.length);
//= The chosen word
let randomValueValue = randompropValue[randomValueNumper]
//=ادخال الكلمه المختاره من الاوبجيكت  فى صفحه هتمل
document.querySelector(".game-info .category span").innerHTML = randompropname



//**************************************** */

//select letters guess Element

let lettersGuestContaner =document.querySelector(".letters-guess");
//convert chosen Word to array 

let lettersandSpace = Array.from(randomValueValue);
// creat spans depend onword 
lettersandSpace.forEach(letter=>{
    //creat Empty span
    let emptyspan=document.createElement("span");
    //if letters is cpace
    if(letter ===" "){
        //add class to the span
        emptyspan.className="with-space"
    }
    //append Spans to the letters guess container
    lettersGuestContaner.appendChild(emptyspan)
});
// Select Guess span
let guessSpan= document.querySelectorAll(".letters-guess span")

//Set Wrong Attempts
let wrongAttempates=0;
//Select The Draw Element 
let theDraw=document.querySelector(".hangman-draw")



//Handle Clicking on letters
document.addEventListener("click", (e) => {
    //Set The Chose Status 
let thestasus = false;
    if (e.target.className === 'letter-box'){
        e.target.classList.add("clicked");
        //get Clicked letter
        let theClickedletter =e.target.innerHTML.toLowerCase();

        //= The chosen Word  
        let theChosenword= Array.from(randomValueValue.toLowerCase())

        theChosenword.forEach((wordletter, wordindex)=>{
            //if the clicked letter Equal to one of the Chosne Word letters
         if(theClickedletter == wordletter ){
            //set Status to Correct
            thestasus=true;

          //loop on All Guess Spans
          guessSpan.forEach((span,spanindex)=>{
            if(wordindex === spanindex){
                span.innerHTML=theClickedletter;
            }

          })
         }
        })
        // outside loop
        //if letters is Rong
        if(thestasus!==true){
            // increase the wrong Attempts
            wrongAttempates++;

            //Add Class wrong on the Draw Element
            theDraw.classList.add(`Wrong-${wrongAttempates}`);
            //play fail sounds
            document.getElementById("fail").play()
            if(wrongAttempates === 8){
                endGame();

                lettersContainer.classList.add("finished")
            }

        }else{
             //play succes sounds
             if(theClickedletter === guessSpan.length ){
                winGame()
             }
            document.getElementById("success").play()
        }
    }
})
//End game function

function endGame(){
    //Create Popup div
    let div =document.createElement("div")
    // Creat Text 
    let divText=document.createTextNode(`Game over, The Word Is ${randomValueValue} `) 
    //Append Text to div
       div.appendChild(divText);
       //add Class on div
       div.className='popup';
       //append to the Body 
       document.body.appendChild(div)
}

function winGame(){
    //Create Popup div
    let div =document.createElement("div")
    // Creat Text 
    let divText=document.createTextNode(`You are Win, The Word Is ${randomValueValue} `) 
    //Append Text to div
       div.appendChild(divText);
       //add Class on div
       div.className='win-popup';
       //append to the Body 
       document.body.appendChild(div)}



