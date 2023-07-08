window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










    });


    //loop move
    gsap.to('.fix_title .inner',{
        x: -4436,
        duration: 30,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.page02_letter .inner',{
        y: -3086,
        duration: 30,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_plant1',{ //선택자
        rotate: -2, //구동
        duration: 4, //시간
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })

    gsap.to('.left_plant2',{
        rotate: -2,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_plant3',{
        rotate: -2,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_plant4',{
        rotate: -2,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_plant5',{
        rotate: -2,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_plant1',{ //선택자
        rotate: -2, //구동
        duration: 4, //시간
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })

    gsap.to('.right_plant2',{
        rotate: -2,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_plant3',{
        rotate: -2,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_plant4',{
        rotate: -2,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_kitchen1 img',{
        y: -40, /*ex) y축으로 음수50px 만큼움직이겠다.*/
        duration: 4, //속도
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })
    
    gsap.to('.left_kitchen2 img',{
        y: -40,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_kitchen3 img',{
        y: -40,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_kitchen4 img',{
        y: -40,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_kitchen5 img',{
        y: -40,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_kitchen1 img',{
        y: -40,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_kitchen2 img',{
        y: -40,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })
    
    gsap.to('.right_kitchen3 img',{
        y: -40,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_kitchen4 img',{
        y: -40,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })


    /*  slide,click event section */
    gsap.to('.fix_this_1', { //대상
        scrollTrigger: {
            trigger: ".trigger_this_01", //기준
            start: "top top", //기준점 브라우저
            // end: () => "+=" + 300,
            end: 'bottom bottom', //기준점 브라우저
            pin: true, //고정
            pinSpacing: false,
            scrub: true,
        }
    });

    let se01_move01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se01_move01,
        trigger: "#section01", //기준
        start: "1000px top", //기준점 브라우저
        end: "5000px bottom", //기준점 브라우저
        scrub: 1,
    });
                 //('선택자',{구동},듀레이션(0~1))
    se01_move01.to("#section01 .plant_box_right .right_plant1",{x:200,y:1000,z:0},0.2);
    se01_move01.to("#section01 .plant_box_right .right_plant2",{x:150,y:700},0.15);
    se01_move01.to("#section01 .plant_box_right .right_plant3",{x:300,y:400},0.3);
    se01_move01.to("#section01 .plant_box_right .right_plant4",{x:300,y:400},0.4);
    se01_move01.to("#section01 .plant_box_left .left_plant1",{x:-1000,y:200,z:100},0.2);
    se01_move01.to("#section01 .plant_box_left .left_plant2",{x:-300,y:700,z:200},0.15);
    se01_move01.to("#section01 .plant_box_left .left_plant3",{x:-600,y:600},0.3);
    se01_move01.to("#section01 .plant_box_left .left_plant4",{x:-500,y:200},0.4);
    se01_move01.to("#section01 .plant_box_left .left_plant5",{x:0,y:400,z:0},0.4);

    let sc01_scale01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale01,
        trigger: "#section01", //기준
        start: "5500px top", //기준점 브라우저
        end: "8500px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_scale01.to("#section01 .main_bg",{scale:0.8},0);


    let sc01_scale02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale02,
        trigger: "#section01", //기준
        start: "9000px top", //기준점 브라우저
        end: "12000px bottom", //기준점 브라우저
        scrub: 1,
        onEnterBack: ()=>{
            $('.fix_this_1').css('background','#e0ded8')
            $('#section01 .main_bg .main_img01 img').attr('src',`../image/section01/1_living_room/main01.png`)
        },
        onLeave: ()=>{
            $('.fix_this_1').css('background','#c98181')
            $('#section01 .main_bg .main_img01 img').attr('src',`../image/section01/2_kitchen/kitchen_main.png`)
        }
    });


/*  slide,click event section */
gsap.to('.fix_this_1', { //대상
    scrollTrigger: {
        trigger: ".trigger_this_01", //기준
        start: "top top", //기준점 브라우저
        // end: () => "+=" + 300,
        end: 'bottom bottom', //기준점 브라우저
        pin: true, //고정
        pinSpacing: false,
        scrub: true,
    }
});


    //('선택자',{구동},듀레이션(0~1))
    sc01_scale02.to("#section01 .main_bg",{scale:1},0);

    let sc01_kitchen_move = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_kitchen_move,
        trigger: "#section01", //기준
        start: "11000px top", //기준점 브라우저
        end: "12000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen1",{x:0, y:0},0);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen2",{x:0, y:0},0);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen3",{x:0, y:0},0);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen4",{x:0, y:0},0);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen5",{x:0, y:0},0);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen1",{x:0,y:0,z:0},0);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen2",{x:0,y:0},0);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen3",{x:0,y:0},0);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen4",{x:0,y:240},0);


    let sc01_scale03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale03,
        trigger: "#section01", //기준
        start: "14000px top", //기준점 브라우저
        end: "17000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_scale03.to("#section01 .main_bg",{scale:0.66},0);
    sc01_scale03.to("#section01 .left_kitchen1",{y:-300},0);
    sc01_scale03.to("#section01 .left_kitchen2",{x:0, y:980},0);
    sc01_scale03.to("#section01 .left_kitchen3",{x:-200, y:0},0);
    sc01_scale03.to("#section01 .left_kitchen4",{x:-400, y:600},0);
    sc01_scale03.to("#section01 .left_kitchen5",{x:200,y:600},0);
    sc01_scale03.to("#section01 .right_kitchen1",{x:0, y:-120},0);
    sc01_scale03.to("#section01 .right_kitchen2",{x:600, y:-600},0);
    sc01_scale03.to("#section01 .right_kitchen3",{x:600, y:-600},0);
    sc01_scale03.to("#section01 .right_kitchen4",{y:600},0);



    let sc01_scale04 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale04,
        trigger: "#section01", //기준
        start: "17500px top", //기준점 브라우저
        end: "21500px bottom", //기준점 브라우저
        scrub: 1,
        onEnterBack: ()=>{
            $('.fix_this_1').css('background','#c98181')
            $('#section01 .main_bg .main_img01 img').attr('src',`../image/section01/1_living_room/main01.png`)
        },
        onLeave: ()=>{
            $('.fix_this_1').css('background','#2f433a')
            $('#section01 .main_bg .main_img01 img').attr('src',`../image/section01/3_laundry/laundry_main.png`)
            // $('#section01 .left_plant1 img').attr('src',`../image/section01/2_kitchen/lemon.png`)
        }
    });
    //('선택자',{구동},듀레이션(0~1))
    sc01_scale04.to("#section01 .main_bg",{scale:1},0);


    let sc01_laundry_box = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_laundry_box,
        trigger: "#section01", //기준
        start: "20500px top", //기준점 브라우저
        end: "21000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_laundry_box.to("#section01 .left_laundry1",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .left_laundry2",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .left_laundry3",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .left_laundry4",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .left_laundry5",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .left_laundry6",{x:0 ,y:-600},0);
    sc01_laundry_box.to("#section01 .left_laundry6",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .left_laundry7",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .left_laundry8",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .left_laundry9",{x:0 ,y:0},0);
    
    sc01_laundry_box.to("#section01 .right_laundry1",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .right_laundry2",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .right_laundry3",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .right_laundry4",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .right_laundry5",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .right_laundry6",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .right_laundry7",{x:0 ,y:0},0);
    sc01_laundry_box.to("#section01 .right_laundry8",{x:0 ,y:0},0);

    let sc01_scale05 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale05,
        trigger: "#section01", //기준
        start: "22000px top", //기준점 브라우저
        end: "25000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_scale05.to("#section01 .main_bg",{scale:0.54},0);
    sc01_scale05.to("#section01 .left_laundry1",{x:0 ,y:-500},0.1);
    sc01_scale05.to("#section01 .left_laundry2",{x:300 ,y:-500},0.1);
    sc01_scale05.to("#section01 .left_laundry3",{x:-300 ,y:-500},0.1);
    sc01_scale05.to("#section01 .left_laundry4",{x:-1550 ,y:0},0.1);
    sc01_scale05.to("#section01 .left_laundry5",{x:0 ,y:-1800},0.1);
    sc01_scale05.to("#section01 .left_laundry6",{x:0 ,y:-1800},0.11);
    sc01_scale05.to("#section01 .left_laundry7",{x:0 ,y:-700},0.1);
    sc01_scale05.to("#section01 .left_laundry8",{x:200 ,y:-1000},0.1);
    sc01_scale05.to("#section01 .left_laundry9",{x:0 ,y:-800},0.18);

    sc01_scale05.to("#section01 .right_laundry1",{x:-300 ,y:-500},0.1);
    sc01_scale05.to("#section01 .right_laundry2",{x:0 ,y:-1700},0.1);
    sc01_scale05.to("#section01 .right_laundry3",{x:0 ,y:-1700},0.1);
    sc01_scale05.to("#section01 .right_laundry4",{x:0 ,y:-1700},0.11);
    sc01_scale05.to("#section01 .right_laundry5",{x:200 ,y:-500},0.1);
    sc01_scale05.to("#section01 .right_laundry6",{x:200 ,y:0},0.1);
    sc01_scale05.to("#section01 .right_laundry7",{x:-800, y:-1680, z:0},0.1);
    sc01_scale05.to("#section01 .right_laundry8",{x:-0 ,y:-1000},0.12);

    

    let sc01_scale06 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale06,
        trigger: "#section01", //기준
        start: "25500px top", //기준점 브라우저
        end: "28500px bottom", //기준점 브라우저
        scrub: 1,
        onEnterBack: ()=>{
            $('.fix_this_1').css('background','#2f433a')
            $('#section01 .main_bg .main_img01 img').attr('src',`../image/section01/3_laundry/laundry_main.png`)
        },
        onLeave: ()=>{
            $('.fix_this_1').css('background','#0bb4e8')
            $('#section01 .main_bg .main_img01 img').attr('src',`../image/section01/4_room/room_main.png`)
            // $('#section01 .left_plant1 img').attr('src',`../image/section01/2_kitchen/lemon.png`)
        }
    });
    //('선택자',{구동},듀레이션(0~1))
    sc01_scale06.to("#section01 .main_bg",{scale:1},0);



    let room_box = gsap.timeline();
    ScrollTrigger.create({
        animation: room_box,
        trigger: "#section01", //기준
        start: "27500px top", //기준점 브라우저
        end: "28500px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    room_box.to("#section01 .left_room1",{x:0 ,y:0},0);
    room_box.to("#section01 .left_room2",{x:0 ,y:0},0);
    room_box.to("#section01 .left_room3",{x:0 ,y:0},0);
    room_box.to("#section01 .left_room4",{x:0 ,y:0},0);
    room_box.to("#section01 .left_room5",{x:0 ,y:0},0);
    room_box.to("#section01 .left_room6",{x:0 ,y:0},0);

    room_box.to("#section01 .right_room1",{x:0 ,y:0},0);
    room_box.to("#section01 .right_room2",{x:0 ,y:0},0);
    room_box.to("#section01 .right_room3",{x:0 ,y:0},0);
    room_box.to("#section01 .right_room4",{x:0 ,y:0},0);



    let sc01_top_bottom = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_top_bottom,
        trigger: "#section01", //기준
        start: "29000px top", //기준점 브라우저
        end: "32000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_top_bottom.to("#section01 .fix_top",{y:0},0);
    sc01_top_bottom.to("#section01 .fix_bottom",{y:0},0);
    sc01_top_bottom.to("#section01 .dim_bg",{opacity:1},0);





    gsap.to('.fix_this_2', {
        scrollTrigger: {
            trigger: ".trigger_this_02",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });


    let se02_xScroll = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll,
        trigger: "#section02",
        start: "10% top",
        end: "90% bottom",
        scrub: 1,
    });

    se02_xScroll.to("#section02 .xScroll2",{left:'calc(100vw - 28798px)'},0);


    gsap.to('.fix_this_4', {
        scrollTrigger: {
            trigger: ".trigger_this_04",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });

    let se04_xScroll = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_xScroll,
        trigger: "#section04",
        start: "50% top",
        end: "bottom bottom",
        scrub: 1,
    });

    se04_xScroll.to("#section04 .xScroll04",{left:'calc(100vw - 8726px)'},0);







































})


