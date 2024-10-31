//On Click of for more button at the more section making Name of the user display with a messgae
/// creating hamburger
const d = document.querySelector(".bt1");
d.addEventListener("click", () => {
  const f = document.querySelector(".form");
  if (f.style.display === "none") {
    f.style.display = "block"; 
  } else {
    f.style.display = "none";
  }
});
//preventing reload due to form 
const feedbackForm = document.querySelector("#feedbackForm");
    feedbackForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

const r = document.querySelector('#Fname').value;
const ms = document.querySelector("#msg").textContent=`Thank you!! for your message ${r}, will get back to you asap.`;
});



document.addEventListener('DOMContentLoaded', function () {
  const menuWrapper = document.querySelector('.menu-wrapper');
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.L');

  menuWrapper.addEventListener('click', () => {
      menuWrapper.classList.toggle('active');
      menu.classList.toggle('active');
  });

  menuItems.forEach(item => {
      item.addEventListener('click', () => {
          menuWrapper.classList.remove('active');
          menu.classList.remove('active');
      });
  });
});


// setInterval
setTimeout(() => {
  let today=new Date()
  let h=today.getHours()
  let m=today.getMinutes()
  let s=today.getSeconds()
  document.getElementById("demo").innerHTML=(`${h}:${m}:${s}`)
  if(h>=0 && h<12){
  document.getElementById("demo").innerHTML="Hello! Welcome To My Portfolio Have A Good Morning:) "
  }
  else if(h>=12 && h<18){
      document.getElementById("demo").innerHTML="Hello! Welcome To My Portfolio Have A Good Afternoon:)"
  }
  else{
      document.getElementById("demo").innerHTML="Hello! Welcome To My Portfolio Have A Good Night:)"
  }
  }, 3000);
  




function Loadlink() {
  var image = document.getElementById("a");
  image.onclick = function() {
      window.open(this.src, '_blank'); // Open the image in a new tab
  }
}

// Call the function to activate the event listener
Loadlink();








function downloadPDF() {
  // Get the source URL of the PDF
  var pdfSrc = document.querySelector(' button').getAttribute('src');
  
  // Create an anchor element
  var link = document.createElement('a');
  
  // Set the href attribute to the PDF source
  link.href = pdfSrc;
  
  // Set the download attribute to force download
  link.download = 'Aavash Resume';
  
  // Append the anchor element to the body
  document.body.appendChild(link);
  
  // Trigger a click event on the anchor element
  link.click();
  
  // Remove the anchor element from the body
  document.body.removeChild(link);
}

function Burflink(){
  var link = "https://www.unisq.edu.au/"
  window.location.href = link;
}
function Loadlink1(){
  var link= "https://www.woolworths.com.au/"
  window.location.href = link;
}

function Burflink2(){
  var link= "https://www.facebook.com/"
  window.location.href = link;
}
function Burflink3(){
  var link= "https://www.instagram.com/"
  window.location.href = link;
}
function Burflink4(){
  var link= "https://www.linkedin.com/in/aavash-pudasaini-5a5268310/"
  window.location.href = link;
}