let list_1 = document.querySelector('.list-1');
let list_1_links = document.querySelectorAll('.list-1 li a');
let menu = document.querySelector('#menu');
let closeBtn = document.querySelector('#close');

list_1_links.forEach(e => {
    e.onclick = () => {
        let isActive = document.querySelector('.active');
        isActive ? isActive.classList.remove('active') : '';
        e.classList.add('active');
        if(innerWidth < 1000){
            list_1.style.display = 'none';
            closeBtn.style.display = 'none';
            menu.style.display = 'flex';
        }
        else{
            list_1.style.display = 'flex';
            closeBtn.style.display = 'none';
            menu.style.display = 'none';
        }
    
    }
})

window.onscroll = () => {
    if(scrollY > 40){
        document.querySelector('header').style.background = 'black';
        document.querySelector('header').style.boxShadow = '0 0 5px 1px #7b7a7a'

    }
    else{
        document.querySelector('header').style.background = 'transparent';
        document.querySelector('header').style.boxShadow = '0 0 0 0 #7b7a7a'

    }
}

menu.onclick = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'block';
    list_1.style.display = 'flex';
    list_1.style.translate = '0 0';
}

closeBtn.onclick = () => {
    menu.style.display = 'block';
    closeBtn.style.display = 'none';
    list_1.style.display = 'none';
    list_1.style.translate = '0 -200%';
}

function updateHeight() {
    console.log('Viewport height:', window.innerHeight,'viewport-width:',window.innerWidth);
    // document.write('Viewport height:', window.innerHeight,'viewport-width:',window.innerWidth);
}

window.addEventListener('resize', updateHeight);
updateHeight(); 
console.log(innerWidth,innerHeight);


