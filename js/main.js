window.addEventListener('DOMContentLoaded', function () {

    $('#section04 .xScroll04 .page01 > div').click(function () {
        $('#section04 .xScroll04 .page01 > div').removeClass('on')
        $(this).addClass('on')
    })

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










    });


    //loop move
    gsap.to('.fix_title .inner',{
        x: -4436,
        duration: 80,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.page02_letter .inner',{
        y: -3086,
        duration: 60,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.page03_box .Music_is_always_by_my_side',{
        y: -2800,
        duration: 60,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.page04_box .voice_assistant',{
        y: -1586,
        duration: 60,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_plant1',{ //선택자
        rotate: -2, //구동
        duration: 6, //시간
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })

    gsap.to('.left_plant2',{
        rotate: -2,
        duration: 6,
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
        duration: 6,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_plant5',{
        rotate: -2,
        duration: 6,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_plant1',{ //선택자
        rotate: -2, //구동
        duration: 6, //시간
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })

    gsap.to('.right_plant2',{
        rotate: -2,
        duration: 6,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_plant3',{
        rotate: -2,
        duration: 6,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_plant4',{
        rotate: -2,
        duration: 6,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

// 주방
    gsap.to('.left_kitchen1 img',{
        y: -40, /*ex) y축으로 음수50px 만큼움직이겠다.*/
        duration: 7, //속도
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })
    
    gsap.to('.left_kitchen2 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_kitchen3 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_kitchen4 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_kitchen5 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_kitchen1 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_kitchen2 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })
    
    gsap.to('.right_kitchen3 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_kitchen4 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

// 세탁실
    gsap.to('.left_laundry1 img',{
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_laundry2 img',{
        x:-20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })
    
    gsap.to('.left_laundry3 img',{
        x:20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_laundry4 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_laundry5 img',{
        x:20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_laundry6 img',{
        x:20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })
    
    gsap.to('.left_laundry7 img',{
        x:20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_laundry8 img',{
        y: -20,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_laundry9 img',{
        x:20,
        y: -20,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_laundry1 img',{
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_laundry2 img',{
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })
    
    gsap.to('.right_laundry3 img',{
        x:-20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_laundry4 img',{
        x:50,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_laundry5 img',{
        x:20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_laundry6 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })
    
    gsap.to('.right_laundry7 img',{
        x:-20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    // 깃털
    gsap.to('.left_room1 img',{
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_room2 img',{
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })
    
    gsap.to('.left_room3 img',{
        x: -20,
        y:20,
        duration: 10,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_room4 img',{
        x:10,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_room5 img',{
        x:20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.left_room6 img',{
        x:-20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })
    
    gsap.to('.right_room1 img',{
        x:20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_room2 img',{
        x:-20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    gsap.to('.right_room3 img',{
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })
    
    gsap.to('.right_room4 img',{
        x:-20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1 
    })

    // phone
    gsap.to('.page04_box .left_phone',{
        y: 100,
        yoyo: true, //왕복
        duration: 20,
        ease: 'none',
        repeat: -1
    })
    gsap.to('.page04_box .right_phone',{
        y: -100,
        yoyo: true, //왕복
        duration: 20,
        ease: 'none',
        repeat: -1
    })

    //rotate
    gsap.to('.page04_box .circle_text_big',{
        rotate: 360,
        duration: 60,
        ease: 'none',
        repeat: -1
    })
    gsap.to('.page04_box .circle_text_small',{
        rotate: -360,
        duration: 60,
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
    se01_move01.to("#section01 .plant_box_right .right_plant1",{x:1500,y:0,z:50},0.7);
    se01_move01.to("#section01 .plant_box_right .right_plant2",{x:1500,y:10},0.7);
    se01_move01.to("#section01 .plant_box_right .right_plant3",{x:300,y:400},1);
    se01_move01.to("#section01 .plant_box_right .right_plant4",{x:300,y:400},1);
    se01_move01.to("#section01 .plant_box_left .left_plant1",{x:-1000,y:10,z:100},0.7);
    se01_move01.to("#section01 .plant_box_left .left_plant2",{x:-500,y:0,z:200},0.7);
    se01_move01.to("#section01 .plant_box_left .left_plant3",{x:-600,y:600},1);
    se01_move01.to("#section01 .plant_box_left .left_plant4",{x:-500,y:200},1);
    se01_move01.to("#section01 .plant_box_left .left_plant5",{x:0,y:400,z:0},1);

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
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen1",{x:0, y:0},1);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen2",{x:0, y:0},1);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen3",{x:0, y:0},1);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen4",{x:0, y:0},1);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen5",{x:0, y:0},1);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen1",{x:0,y:0,z:0},1);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen2",{x:0,y:0},1);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen3",{x:0,y:0},1);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen4",{x:0,y:240},1);


    let sc01_scale03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale03,
        trigger: "#section01", //기준
        start: "14000px top", //기준점 브라우저
        end: "17000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_scale03.to("#section01 .main_bg",{scale:0.8},0);
    sc01_scale03.to("#section01 .left_kitchen1",{y:-1000},1);
    sc01_scale03.to("#section01 .left_kitchen2",{x:0, y:980},1);
    sc01_scale03.to("#section01 .left_kitchen3",{x:-200, y:0},1);
    sc01_scale03.to("#section01 .left_kitchen4",{x:-400, y:600},1);
    sc01_scale03.to("#section01 .left_kitchen5",{x:200,y:600},1);
    sc01_scale03.to("#section01 .right_kitchen1",{x:0, y:-120},1);
    sc01_scale03.to("#section01 .right_kitchen2",{x:600, y:-600},1);
    sc01_scale03.to("#section01 .right_kitchen3",{x:600, y:0},1);
    sc01_scale03.to("#section01 .right_kitchen4",{y:600},1);



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
            $('#section01 .left_plant1 img').attr('src',`../image/section01/2_kitchen/lemon.png`)
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
    sc01_laundry_box.to("#section01 .left_laundry1",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .left_laundry2",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .left_laundry3",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .left_laundry4",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .left_laundry5",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .left_laundry6",{x:0 ,y:-600},0.4);
    sc01_laundry_box.to("#section01 .left_laundry6",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .left_laundry7",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .left_laundry8",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .left_laundry9",{x:0 ,y:0},0.4);
    
    sc01_laundry_box.to("#section01 .right_laundry1",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .right_laundry2",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .right_laundry3",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .right_laundry4",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .right_laundry5",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .right_laundry6",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .right_laundry7",{x:0 ,y:0},0.4);
    sc01_laundry_box.to("#section01 .right_laundry8",{x:0 ,y:0},0.4);

    let sc01_scale05 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale05,
        trigger: "#section01", //기준
        start: "22000px top", //기준점 브라우저
        end: "25000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_scale05.to("#section01 .main_bg",{scale:0.8},0);
    sc01_scale05.to("#section01 .left_laundry1",{x:0 ,y:-500},1);
    sc01_scale05.to("#section01 .left_laundry2",{x:300 ,y:-500},1);
    sc01_scale05.to("#section01 .left_laundry3",{x:-300 ,y:-500},1);
    sc01_scale05.to("#section01 .left_laundry4",{x:-1550 ,y:0},1);
    sc01_scale05.to("#section01 .left_laundry5",{x:0 ,y:-1800},1);
    sc01_scale05.to("#section01 .left_laundry6",{x:0 ,y:-1800},0.9);
    sc01_scale05.to("#section01 .left_laundry7",{x:0 ,y:-700},1);
    sc01_scale05.to("#section01 .left_laundry8",{x:200 ,y:-1000},1);
    sc01_scale05.to("#section01 .left_laundry9",{x:0 ,y:-800},1);

    sc01_scale05.to("#section01 .right_laundry1",{x:-300 ,y:-500},1);
    sc01_scale05.to("#section01 .right_laundry2",{x:0 ,y:-1700},1);
    sc01_scale05.to("#section01 .right_laundry3",{x:0 ,y:-1700},1);
    sc01_scale05.to("#section01 .right_laundry4",{x:0 ,y:-1700},0.9);
    sc01_scale05.to("#section01 .right_laundry5",{x:200 ,y:-500},1);
    sc01_scale05.to("#section01 .right_laundry6",{x:200 ,y:0},1);
    sc01_scale05.to("#section01 .right_laundry7",{x:-800, y:-1680, z:0},1);
    sc01_scale05.to("#section01 .right_laundry8",{x:-0 ,y:-1000},1);

    

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
            $('.fix_this_1').css('background','#95b6d2')
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


    let se02_xScroll01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll01,
        trigger: "#section02",
        start: "1000px top",
        end: "4000px bottom",
        scrub: 1,
    });

    se02_xScroll01.to("#section02 .xScroll2",{left:-innerWidth},0);


    let se02_xScroll02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll02,
        trigger: "#section02",
        start: "5500px top",
        end: "95% bottom",
        scrub: 1,
    });

    se02_xScroll02.to("#section02 .xScroll2",{left:'calc(100vw - 28798px)'},0);



    let se02_xScroll_text01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll_text01,
        trigger: "#section02", //기준(해당 section)
        start: "6500px top", //기준점, 브라우저
        end: "8500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    //LG가 선보인 세상에 없던 신가전
                        //('선택자',{구동,구동,구동},듀레이션(0~1))
    se02_xScroll_text01.to("#section02 .page02_second_txt1",{opacity: 1, y:0},0);
    se02_xScroll_text01.to("#section02 .page02_second_txt2",{opacity: 1, y:0},0.1);
    se02_xScroll_text01.to("#section02 .page02_second_txt3",{opacity: 1, y:0},0.2);
    se02_xScroll_text01.to("#section02 .page02_second_txt4",{opacity: 1, y:0},0.3);
    se02_xScroll_text01.to("#section02 .page02_second_txt5",{opacity: 1, y:0},0.3);

    
    let se02_xScroll_photo01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll_photo01,
        trigger: "#section02", //기준(해당 section)
        start: "6500px top", //기준점, 브라우저
        end: "8500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se02_xScroll_photo01.to("#section02 .page02_moodup1",{opacity: 1, y:0},0.1);
    se02_xScroll_photo01.to("#section02 .page02_moodup2",{opacity: 1, y:0},0.1);


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


