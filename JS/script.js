// side bar start

function openNav () {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '0';
    } else {
        console.error('error: side panel not found');
    }
}

function closeNav () {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if(sidepanel){
        sidepanel.style.left = '-320px';
    } else {
        console.error('error: side panel not found');
    }
}

// search bar

function open_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    }else {
        console.error('error: search panel not found');
    }
}

function close_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if(searchpanel){
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRighttRadius = '100%';
    }else {
        console.error('error: search panel not found');
    }
}

// responsive logoipsum slider

$('.sliderlogo').slick({
    arrows: false,
    dots: false,
    infinite: false,
    autoplay: false,
  speed: 300,
  sliderToScroll: 1,
  slidesToShow: 5,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            sliderToScroll: 1,
            infinite: true,
            dots: false,

        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,
        }
    },
]
});