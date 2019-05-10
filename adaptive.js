let navList = document.getElementById('navList');
let navbox = document.getElementById('navbox');
let choose = true;
navList.addEventListener('click',function(){
    if(choose){
        navbox.classList.add('navigationheight');
        choose = false;
    }
    else{
        navbox.classList.remove('navigationheight');
        choose = true;
    }
},false);

console.log('a');
