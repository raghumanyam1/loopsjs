const button = document.getElementById("btn");

button.addEventListener("click", function () {

    const username = document.getElementById("myText").value;

    document.getElementById("title").textContent =
        `Hello ${username}!`;
});

button.addEventListener("click", function() { 
   alert("Button Clicked!");
   document.getElementById("mycl").textContent =
       'clicker';
});


const para = document.querySelector("p");
//const paragraphs = document.querySelectorAll("p");

alert(paragraphs[0].nodeName);

