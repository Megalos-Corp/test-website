var siteVersion = 'BETA v0.95'
document.getElementById("siteVersion").innerHTML=siteVersion;

let content = document.querySelector('#hamburger-content');
let sidebarBody = document.querySelector('#hamburger-sidebar-body');

sidebarBody.innerHTML = content.innerHTML;

let button = document.querySelector('#hamburger-button');
let overlay = document.querySelector('#hamburger-overlay');
let activatedClass = 'hamburger-activated';

button.addEventListener('click', function (e) {
    e.preventDefault();

if(this.parentNode.classList.contains(activatedClass))
{
  this.parentNode.classList.remove(activatedClass);
  console.log('remove')

}
else {

    this.parentNode.classList.add(activatedClass);
    console.log('add')

}

});

overlay.addEventListener('click', function(e) {
    e.preventDefault;

     this.parentNode.classList.remove(activatedClass);

})
