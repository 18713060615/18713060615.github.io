//swiper轮播图
var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


//nav-footer轮播图
 var swiper = new Swiper('.swiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


//products-main
new Vue({
    el:"#cts",
    data:{
        lists:[
            {img:"img/about/products-main/product1.jpg",bx:"Vege Pizza",bxspan:"$16.00"},
            {img:"img/about/products-main/product2.jpg",bx:"Vege Ginger Tea",bxspan:"$24.00"},
            {img:"img/about/products-main/product3.jpg",bx:"Vege Green Salad",bxspan:"$12.00"},
            {img:"img/about/products-main/product4.jpg",bx:"Herbal Hot Tea",bxspan:"$8.00"},
            {img:"img/about/products-main/product5.jpg",bx:"Hot Meat Grilled",bxspan:"$16.00"},
            {img:"img/about/products-main/product6.jpg",bx:"New Ginger Taste",bxspan:"$18.00"},
            {img:"img/about/products-main/product7.jpg",bx:"Hot Coffee",bxspan:"$14.00"},
            {img:"img/about/products-main/product8.jpg",bx:"SUMMER FRUIT SALADE",bxspan:"$15.00"},
            {img:"img/about/products-main/product1.jpg",bx:"Vege Pizza",bxspan:"$16.00"},
            {img:"img/about/products-main/product2.jpg",bx:"Vege Ginger Tea",bxspan:"$18.00"},
            {img:"img/about/products-main/product3.jpg",bx:"Vege Pizza",bxspan:"$12.00"},
            {img:"img/about/products-main/product4.jpg",bx:"Herbal Hot Tea",bxspan:"$8.00"},
        ]
    }
})




//contact-nav
new Vue({
    el:"#tact",
    data:{
        arrs:[
            {img:"img/about/products-main/product1.jpg",hf:"Vege Pizza",lhfspan:"$16.00"},
            {img:"img/about/products-main/product2.jpg",hf:"Vege Ginger Tea",lhfspan:"$15.00"},
            {img:"img/about/products-main/product3.jpg",hf:"Vege Pizza",lhfspan:"$14.00"},
            {img:"img/about/products-main/product4.jpg",hf:"Herbal Hot Tea",lhfspan:"$13.00"},
            {img:"img/about/products-main/product5.jpg",hf:"Hot Meat Grilled",lhfspan:"$12.00"},
            {img:"img/about/products-main/product6.jpg",hf:"New Ginger Taste",lhfspan:"$11.00"},
            {img:"img/about/products-main/product7.jpg",hf:"Hot Coffee",lhfspan:"$10.00"},
            {img:"img/about/products-main/product8.jpg",hf:"SUMMER FRUIT SALADE",lhfspan:"$8.00"},
            {img:"img/about/products-main/product1.jpg",hf:"Hot Meat Grilled",lhfspan:"$12.00"},
            {img:"img/about/products-main/product2.jpg",hf:"New Ginger Taste",lhfspan:"$11.00"},
            {img:"img/about/products-main/product3.jpg",hf:"Hot Coffee",lhfspan:"$10.00"},
            {img:"img/about/products-main/product4.jpg",hf:"SUMMER FRUIT SALADE",lhfspan:"$8.00"}
        ]
    }
})




