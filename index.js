const opens  = document.querySelector('.open');
const closes = document.querySelector('.close');
const nav = document.querySelector('.mobNavi');


opens.addEventListener('click', ()=>{


nav.classList.add('open');

})
closes.addEventListener('click', ()=>{


nav.classList.remove('open');

})




const popupclose =  document.querySelector('.popupclose');
const popupopen =  document.querySelector('.playbtn');
const popupopen2 =  document.querySelector('#section3 .playbtn');

const video =  document.querySelector('.video');

popupopen.addEventListener('click', ()=>{


    video.classList.add('show');
    
    })
popupopen2.addEventListener('click', ()=>{


    video.classList.add('show');
    
    })

popupclose.addEventListener('click', ()=>{


    video.classList.remove('show');
    
    })