// ---------About---------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// ------------GitHub AJAX Request--------
const url = `https://api.github.com/users/njgrimes/repos`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const repoListElement = document.getElementById("repo-list");

    data.forEach(repo => {
      const repoElement = document.createElement("li");
      const repoLinkElement = document.createElement("a");
      repoLinkElement.href = repo.html_url;
      repoLinkElement.textContent = repo.name;
      repoElement.appendChild(repoLinkElement);
      repoListElement.appendChild(repoElement);
    });
  })
  .catch(error => {
    console.error(error);
  });



// --------Contact Form------
const scriptURL = 'https://script.google.com/macros/s/AKfycbzb3X-G3kWz8K2t4rLBx4zDsh9yQyhA6P-I7PgX1C49FHVpA9a-aG9XLJx6alDomSZZMQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector("#msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
    .catch(error => console.error('Error!', error.message))
})

// --------IPhone-----
var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}
