document.getElementById("changeTextButton").addEventListener("click", function() {

    this.textContent = "Button Clicked!";
   //this will refer to paragraph elem
    document.getElementById("displayText").textContent = this.textContent;
});


// document.getElementById("changeTextButton").addEventListener("click", function(){
//     this.textContent="button clicked"
//     document.getElementById('displayText').textContent=""
// })