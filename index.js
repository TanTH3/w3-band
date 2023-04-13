var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];


    menuItem.onclick = function(){
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        }
        else{
            header.style.height = null;
        }

    }
}

const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal-body');
const buyTickets = document.querySelectorAll('.place-buy-btn');
const closeBox =document.querySelector('.ticket-box-close');

function abc(){
    modal.classList.add('active');
}
function xyz(){
    modal.classList.remove('active');
}

for( const buyTicket of buyTickets){
    buyTicket.addEventListener('click',abc);
}
modalBody.addEventListener('click',function(e){
    e.stopPropagation();
})
closeBox.onclick = xyz; 
modal.onclick = xyz; 

