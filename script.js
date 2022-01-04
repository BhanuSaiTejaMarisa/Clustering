


var firstForm=document.getElementById("box");
var secondForm=document.querySelectorAll("#second>div");

var box2=document.getElementById("box2");

var FI=document.getElementById("FI");
FI.addEventListener("click",()=>{

    firstForm.style.display= "revert";
    // secondForm[0].style.display= "unset";
    secondForm[1].style.display= "revert";
    // secondForm[1].style.color="green";
    box2.style.display="none";
    // firstForm.style.color="red";
    console.log("red");
})

var NFI=document.getElementById("NFI");

NFI.addEventListener("click",()=>{

firstForm.style.display="none";
box2.style.display="revert";//unset
// secondForm[0].style.display="unset";
secondForm[1].style.display="none";
    
    })


var nextPageButton=document.getElementById("nextPageButton");
nextPageButton.addEventListener("click",()=>{
    window.location.href="./data%20analysis.html";
})


function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = source.checked;
    }
  }
