const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let winOrNot = 0;
function init(e) {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function(e){
    const keyPressed = parseInt(e.detail || e.which);

    if(keyPressed === code[winOrNot]){
      winOrNot++

      if(winOrNot === code.length){
        alert("You did it!!");

        winOrNot = 0;
      }

    }else {

      winOrNot = 0;
    }
  });
}
