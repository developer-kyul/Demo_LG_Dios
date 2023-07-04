window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










    });


    //loop move
    gsap.to('.left_plant1',{ //선택자
        rotate: -20, //구동
        duration: 3, //시간
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })

    gsap.to('.left_plant2',{
        rotate: 20,
        duration: 3,
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
    se01_move01.to("#section01 .plant_box_right .right_plant1",{x:200,y:500},0.2);
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
    });
    //('선택자',{구동},듀레이션(0~1))
    sc01_scale02.to("#section01 .main_bg",{scale:1},0);

    let sc01_scale03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale03,
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
    //('선택자',{구동},듀레이션(0~1))
    sc01_scale03.to("#section01 .main_bg",{scale:1},0);




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



























})


