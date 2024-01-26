let listElements = document.querySelectorAll('.list_boton--click');

listElements.forEach(listElement =>{
    listElement.addEventListener('click', ()=>{
        listElement.classList.toggle('arrow');
        
        let height = 0;
        let menu = listElement.nextElementSibling;
        console.log(menu.scrollHeight);
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`  
      })
});

function addAnimation(card) {
    card.classList.add('card-hover');
}

function removeAnimation(card) {
    card.classList.remove('card-hover');
}