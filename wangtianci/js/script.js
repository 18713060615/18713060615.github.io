//轮播图
var swiper = new Swiper('.banner', {
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


//品牌专场
new Vue({
    el:"#nm",
    data:{
        arrs:[
            {img:"img/main/main1.jpg",lgx:"3.6折起",lgxspan:"  里美"},
            {img:"img/main/main2.jpg",lgx:"2.5折起",lgxspan:"  御泥坊"},
            {img:"img/main/main3.jpg",lgx:"2.4折起",lgxspan:"  韩束"},
            {img:"img/main/main4.jpg",lgx:"5.1折起",lgxspan:"  自然堂"},
            {img:"img/main/main5.jpg",lgx:"4.4折起",lgxspan:"  欧莱雅护肤"},
            {img:"img/main/main6.jpg",lgx:"2.5折起",lgxspan:"  百雀羚"},
            {img:"img/main/main7.jpg",lgx:"3.7折起",lgxspan:"  阿芙"},
            {img:"img/main/main8.jpg",lgx:"1.1折起",lgxspan:"  丸美"},
            {img:"img/main/main9.jpg",lgx:"2.5折起",lgxspan:"  魔法医生"},
            {img:"img/main/main10.jpg",lgx:"2.2折起",lgxspan:"  魔法世家"},
            {img:"img/main/main11.jpg",lgx:"2.5折起",lgxspan:"  珀莱雅"},
            {img:"img/main/main12.jpg",lgx:"2.5折起",lgxspan:"  御泥坊"}
        ]
    }
})

//领券里面的banner
new Vue({
    el:"#info",
    data:{
        lhfs:[      {img:"img/banner/banner1.jpg",img1:"img/banner/banner01.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner2.jpg",img1:"img/banner/banner02.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner3.jpg",img1:"img/banner/banner03.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner4.jpg",img1:"img/banner/banner04.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner5.jpg",img1:"img/banner/banner05.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner6.jpg",img1:"img/banner/banner06.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner7.jpg",img1:"img/banner/banner07.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner8.jpg",img1:"img/banner/banner08.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner9.jpg",img1:"img/banner/banner09.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner10.jpg",img1:"img/banner/banner010.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner11.jpg",img1:"img/banner/banner012.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner13.jpg",img1:"img/banner/banner013.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner14.jpg",img1:"img/banner/banner014.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner15.jpg",img1:"img/banner/banner15.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner16.jpg",img1:"img/banner/banner016.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner17.jpg",img1:"img/banner/banner017.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner18.jpg",img1:"img/banner/banner018.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner19.jpg",img1:"img/banner/banner019.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner20.jpg",img1:"img/banner/banner021.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner22.jpg",img1:"img/banner/banner023.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner24.jpg",img1:"img/banner/banner024.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner25.jpg",img1:"img/banner/banner025.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner26.jpg",img1:"img/banner/banner026.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner27.jpg",img1:"img/banner/banner027.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner28.jpg",img1:"img/banner/banner028.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}, {img:"img/banner/banner29.jpg",img1:"img/banner/banner029.png",fp:"里美",fhspan:"满199减100 上不封顶",lfhp:"立即抢购"}
        ]
    }
})

//购物车里面的猜您喜欢
new Vue({
    el:"#tj",
    data:{
        wtcs:[      {img:"img/banner/banner1.jpg",tcspan:"满69减69",price:"￥169",de:"￥269"}, {img:"img/banner/banner2.jpg",tcspan:"满199减100",price:"￥189",de:"￥389"},
        {img:"img/banner/banner3.jpg",tcspan:"满199减99",price:"￥239",de:"￥669"}, {img:"img/banner/banner4.jpg",tcspan:"满299减100",price:"￥189",de:"￥469"}, {img:"img/banner/banner5.jpg",tcspan:"满399减160",price:"￥520",de:"￥869"},
        {img:"img/banner/banner6.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner7.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner8.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"},
        {img:"img/banner/banner9.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner10.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner11.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"},
        {img:"img/banner/banner12.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner13.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner14.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"},
        {img:"img/banner/banner15.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner16.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner17.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"},
        {img:"img/banner/banner18.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner19.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"}, {img:"img/banner/banner20.jpg",tcspan:"满199减100",price:"￥169",de:"￥269"},
        ]
    }
})

//每日精选
new Vue({
    el:"#xj",
    data:{
        lists:[
            {img:"img/main/mr/mr01.jpg",bx:"珀莱雅",bxspan:"人鱼公主晶滢之海面膜贴组合33片装 海藻补水保湿提亮深层清洁收缩毛孔正品",price:"￥199",de:"￥471"},
            {img:"img/main/mr/mr02.jpg",bx:"嘉媚乐",bxspan:"嘉媚乐CAMENAE “大红瓶玫瑰水”玫瑰新肌密亮肤水 200ml 化妆水  保湿美容",price:"￥200",de:"￥218"},
            {img:"img/main/mr/mr03.jpg",bx:"花肌粹",bxspan:"花肌粹 蓝莲净润保湿爽肤水乳液洁面面霜套装 护肤品套装女",price:"￥199",de:"￥525"},
            {img:"img/main/mr/mr04.jpg",bx:"韩束",bxspan:"聚时光奢养紧致精华霜50g 面霜 补水 保湿 滋润 紧致 见实物 补水 保湿",price:"￥240",de:"￥329"},
            {img:"img/main/mr/mr05.jpg",bx:"花肌粹",bxspan:"花肌粹 蓝莲净润保湿爽肤水乳液洁面面霜套装 护肤品套装女",price:"￥199",de:"￥479"},
            {img:"img/main/mr/mr06.jpg",bx:"春纪",bxspan:"春纪 沙棘果毛孔细致原液30ml  细致毛孔 紧致 原液 精华 收缩毛孔",price:"￥67",de:"￥198"},
            {img:"img/main/mr/mr01.jpg",bx:"珀莱雅",bxspan:"人鱼公主晶滢之海面膜贴组合33片装 海藻补水保湿提亮深层清洁收缩毛孔正品",price:"￥199",de:"￥471"},
            {img:"img/main/mr/mr02.jpg",bx:"嘉媚乐",bxspan:"嘉媚乐CAMENAE “大红瓶玫瑰水”玫瑰新肌密亮肤水 200ml 化妆水 保湿美容",price:"￥200",de:"￥218"},{img:"img/main/mr/mr03.jpg",bx:"花肌粹",bxspan:"花肌粹 蓝莲净润保湿爽肤水乳液洁面面霜套装 护肤品套装",price:"￥199",de:"￥525"},
            {img:"img/main/mr/mr04.jpg",bx:"韩束",bxspan:"聚时光奢养紧致精华霜50g 面霜 补水 保湿 滋润 紧致 见实物",price:"￥240",de:"￥329"},
            {img:"img/main/mr/mr01.jpg",bx:"珀莱雅",bxspan:"人鱼公主晶滢之海面膜贴组合33片装 海藻补水保湿提亮深层清洁收缩毛孔正品",price:"￥199",de:"￥471"},
            {img:"img/main/mr/mr02.jpg",bx:"嘉媚乐",bxspan:"嘉媚乐CAMENAE “大红瓶玫瑰水”玫瑰新肌密亮肤水 200ml 化妆水  保湿美容",price:"￥200",de:"￥218"},
            {img:"img/main/mr/mr03.jpg",bx:"花肌粹",bxspan:"花肌粹 蓝莲净润保湿爽肤水乳液洁面面霜套装 护肤品套装女",price:"￥199",de:"￥525"},
            {img:"img/main/mr/mr04.jpg",bx:"韩束",bxspan:"聚时光奢养紧致精华霜50g 面霜 补水 保湿 滋润 紧致 见实物 补水 保湿",price:"￥240",de:"￥329"},
            {img:"img/main/mr/mr05.jpg",bx:"花肌粹",bxspan:"花肌粹 蓝莲净润保湿爽肤水乳液洁面面霜套装 护肤品套装女",price:"￥199",de:"￥479"},
            {img:"img/main/mr/mr06.jpg",bx:"春纪",bxspan:"春纪 沙棘果毛孔细致原液30ml  细致毛孔 紧致 原液 精华 收缩毛孔",price:"￥67",de:"￥198"},
            {img:"img/main/mr/mr01.jpg",bx:"珀莱雅",bxspan:"人鱼公主晶滢之海面膜贴组合33片装 海藻补水保湿提亮深层清洁收缩毛孔正品",price:"￥199",de:"￥471"},
            {img:"img/main/mr/mr02.jpg",bx:"嘉媚乐",bxspan:"嘉媚乐CAMENAE “大红瓶玫瑰水”玫瑰新肌密亮肤水 200ml 化妆水 保湿美容",price:"￥200",de:"￥218"},{img:"img/main/mr/mr03.jpg",bx:"花肌粹",bxspan:"花肌粹 蓝莲净润保湿爽肤水乳液洁面面霜套装 护肤品套装",price:"￥199",de:"￥525"},
            {img:"img/main/mr/mr04.jpg",bx:"韩束",bxspan:"聚时光奢养紧致精华霜50g 面霜 补水 保湿 滋润 紧致 见实物",price:"￥240",de:"￥329"}
        ]
    }
})

//shop登录点击变色
var i5 = document.querySelector(".i5");
if(i5!=null){
    i5.addEventListener("click",function(){
    i5.style.backgroundColor="#ff0056";
})
}

//点击弹框
var btn = document.querySelector("#bt");
if(btn!=null){
    btn.addEventListener("click",function(){
    alert("请输入正确的手机号");
})
}

//回到顶部
if(document.querySelector("#top")!=null){
    document.querySelector("#top").style.display="none";
      $(function(){
//            控制回到顶部这个小图片的显示和隐藏
//            fadeIn（速度1000毫秒淡入）
            $(window).scroll(function(){
                if($(window).scrollTop()>100){
                    $("#top").fadeIn(300);
                }else{
                    $("#top").fadeOut(300);
                }

            })
            $("#top").click(function(){
//                scrollTop()
//        方法返回或设置匹配元素的滚动条的垂直位置
//                $("body").scrollTop(0);
                $("body").animate({"scrollTop":"0px"},2000);
            })
        })
}

//抽奖效果
var fc=document.querySelector(".ct span");
var cf=document.querySelector(".tc");
fc.onclick=function(){
    cf.style.display="none";
}
//弹窗效果





//弹窗效果