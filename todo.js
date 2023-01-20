//disableButton(val);
const container = document.querySelector('#five');
//disableButton();


document.getElementById('submit').onclick = function(e){
    inputVal = document.getElementById("val").value;
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = inputVal
    container.appendChild(content);
    const btn = document.createElement("button");
    function turnGreen() {
       content.style.color ="Red";
       content.classList.add('strike');
    
   }
    btn.onclick=turnGreen;
    btn.className ="completed"
    btn.innerHTML = "Completed";
    content.appendChild(btn);
    const btn1 = document.createElement("button");
    function makeBlank() {
        content.innerHTML ="";
        //container.innerHTML="";
    }
    btn1.onclick=makeBlank;
    btn1.className = "delete"
    btn1.innerHTML = "Delete";
    content.appendChild(btn1);
   

}


document.getElementById('clear').onclick = function(e){
    document.getElementById('five').innerHTML = "";
}

//function enableSubmit(){
   // let input = document.getElementsByClassName('required');
    //let btn3 = document.querySelector()
//}

function enableSubmit(){
    let inputs = document.getElementsByClassName('required'); // Enter your class name for a required field, this should also be reflected within your form fields.
    let btn = document.querySelector('input[type="submit"]');
    let isValid = true;
    for (var i = 0; i < inputs.length; i++){
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null){
    isValid = false;
    break;
    }
    }
    btn.disabled = !isValid;
    }

//function disableButton(val) {
   // let bt = document.getElementById('submit');
    //if (val.value != '') {
       // bt.disabled = false;
   // }
    //else {
       // bt.disabled = true;
   // }
//}


//document.getElementById('val').addEventListener('input', function(event){
    //document.getElementById('submit').disabled=!this.value;
//}, false);




//function disableButton() {
    //if (document.querySelector(".input").value === ""){
      //  submit.disabled = true;}

    //else if(document.querySelector(".input").value != ""){
    //submit.disabled = false;}

  
    
//}
