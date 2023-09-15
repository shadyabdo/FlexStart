
// // auto Type

// let typed = new Typed('#element', {
//     strings: ['Front End ', 'Back End'],
//     typeSpeed: 50,
//     loop: true,
//     fadeOut: true,
// });
// // ////////////////




let navfixed = document.getElementById("navfixed");
let btnTop = document.querySelector(".btnTop");
window.addEventListener("scroll", (eo) => {
    if (window.scrollY >= 100) {
        navfixed.classList.add("navScroll");
    } else {
        window.scrollY <= 100

        navfixed.classList.remove("navScroll");

    }

    if (window.scrollY >= 100) {
        btnTop.classList.add("btnTopShow")
    } else {
        (window.scrollY <= 100)
        btnTop.classList.remove("btnTopShow");
    }


});


// Veno Box//
new VenoBox({
    selector: '.my-image-links',
    infinigall: true,
});







// main-14 ///////


$('#CLIENTS').owlCarousel({

    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },


        800: {
            items: 4,
            nav: false
        },
        1000: {
            items: 6,
            nav: true,
            loop: false
        }
    }
})

///////////////////





//main-12 //
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        570: {
            items: 2
        },

        750: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

////Auto Type ////

let typed3 = new Typed('#typedEnd', {
    strings: ['V2 Designed by: <span>SHADY ABDO</span>'],
    typeSpeed: 70,
    backSpeed: 20,
    smartBackspace: true, 
    loop: true
  });

//   ///////

AOS.init();