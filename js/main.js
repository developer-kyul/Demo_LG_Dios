window.addEventListener('DOMContentLoaded', function () {


    $('#gnb .menu_mark01').click(function () {
        $(this).toggleClass('on')
        $('#menu').toggleClass('on')
    })

    $('#menu .menu_grid > div').mouseenter(function () {
        $('#menu .menu_grid > div').removeClass('on')
        $(this).addClass('on')
    }).mouseleave(function () {
        $(this).removeClass('on')
    })

    //menu link
    $('#menu .menu_grid > div').click(function () {
        $('#menu').removeClass('on')
        $('#gnb .menu_mark01').removeClass('on')
        let v = $('#menu .menu_grid > div').index(this)

        if (v === 1) {
            container.scrollTo(0, 0, 600, { //x, y, speed
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 2) {
            container.scrollTo(0, 32398, 600, { //x, y, speed
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 3) {
            container.scrollTo(0, 90755, 600, { //x, y, speed
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 6) {
            container.scrollTo(0, 121242, 600, { //x, y, speed
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }

    })

// 메인 버튼 스크롤
    $('#section01 .main_btn > div').click(function () {
        $('#section01 .main_btn > div').removeClass('on')
        $(this).addClass('on')

        let v = $('#section01 .main_btn > div').index(this)

        if (v === 0) {
            container.scrollTo(0, 0, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 1) {
            container.scrollTo(0, 11650, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 2) {
            container.scrollTo(0, 21900, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 3) {
            container.scrollTo(0, 27660, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }

    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


    });

    //music_text
    //https://greensock.com/docs/v3/Eases
    gsap.to('.letter_move01', {
        ease: "back.out(1.7)",
        y:100,
        delay: 0,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move02', {
        ease: "back.out(1.7)",
        y:100,
        delay: 0.2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move03', {
        ease: "back.out(1.7)",
        y:100,
        delay: 0.4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move04', {
        ease: "back.out(1.7)",
        y:100,
        delay: 0.6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move05', {
        ease: "back.out(1.7)",
        y:100,
        delay: 0.8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move06', {
        ease: "back.out(1.7)",
        y:100,
        delay: 1,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move07', {
        ease: "back.out(1.7)",
        y:100,
        delay: 1.2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move08', {
        ease: "back.out(1.7)",
        y:100,
        delay: 1.4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move09', {
        ease: "back.out(1.7)",
        y:100,
        delay: 1.6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move10', {
        ease: "back.out(1.7)",
        y:100,
        delay: 1.8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move11', {
        ease: "back.out(1.7)",
        y:100,
        delay: 2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move12', {
        ease: "back.out(1.7)",
        y:100,
        delay: 2.2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move13', {
        ease: "back.out(1.7)",
        y:100,
        delay: 2.4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move14', {
        ease: "back.out(1.7)",
        y:100,
        delay: 2.6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move15', {
        ease: "back.out(1.7)",
        y:100,
        delay: 2.8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })

    gsap.to('.letter_move16', {
        ease: "back.out(1.7)",
        y:100,
        delay: 3,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move17', {
        ease: "back.out(1.7)",
        y:100,
        delay: 3.2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move18', {
        ease: "back.out(1.7)",
        y:100,
        delay: 3.4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move19', {
        ease: "back.out(1.7)",
        y:100,
        delay: 3.6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move20', {
        ease: "back.out(1.7)",
        y:100,
        delay: 3.8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move21', {
        ease: "back.out(1.7)",
        y:100,
        delay: 4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move22', {
        ease: "back.out(1.7)",
        y:100,
        delay: 4.2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move23', {
        ease: "back.out(1.7)",
        y:100,
        delay: 4.4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move24', {
        ease: "back.out(1.7)",
        y:100,
        delay: 4.6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move25', {
        ease: "back.out(1.7)",
        y:100,
        delay: 4.8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move26', {
        ease: "back.out(1.7)",
        y:100,
        delay: 5,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move27', {
        ease: "back.out(1.7)",
        y:100,
        delay: 5.2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move28', {
        ease: "back.out(1.7)",
        y:100,
        delay: 5.4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move29', {
        ease: "back.out(1.7)",
        y:100,
        delay: 5.6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move30', {
        ease: "back.out(1.7)",
        y:100,
        delay: 5.8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move31', {
        ease: "back.out(1.7)",
        y:100,
        delay: 6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move32', {
        ease: "back.out(1.7)",
        y:100,
        delay: 6.2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move33', {
        ease: "back.out(1.7)",
        y:100,
        delay: 6.4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move34', {
        ease: "back.out(1.7)",
        y:100,
        delay: 6.6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move35', {
        ease: "back.out(1.7)",
        y:100,
        delay: 6.8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move36', {
        ease: "back.out(1.7)",
        y:100,
        delay: 7,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move37', {
        ease: "back.out(1.7)",
        y:100,
        delay: 7.2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move38', {
        ease: "back.out(1.7)",
        y:100,
        delay: 7.4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move39', {
        ease: "back.out(1.7)",
        y:100,
        delay: 7.6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move40', {
        ease: "back.out(1.7)",
        y:100,
        delay: 7.8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move41', {
        ease: "back.out(1.7)",
        y:100,
        delay: 8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move42', {
        ease: "back.out(1.7)",
        y:100,
        delay: 8.2,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move43', {
        ease: "back.out(1.7)",
        y:100,
        delay: 8.4,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move44', {
        ease: "back.out(1.7)",
        y:100,
        delay: 8.6,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })
    
    gsap.to('.letter_move45', {
        ease: "back.out(1.7)",
        y:100,
        delay: 8.8,
        duration: 2, //speed
        yoyo: true,
        repeat: -1,
    })


    //cube
    gsap.to('.cube01', {
        rotateX: -8,
        rotateY: 8,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube02', {
        rotateX: 13,
        rotateY: -13,
        duration: 3,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube03', {
        rotateX: 14,
        rotateY: 7,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube04', {
        rotateX: -5,
        rotateY: 13,
        duration: 3,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube05', {
        rotateX: -5,
        rotateY: 10,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube06', {
        rotateX: 10,
        rotateY: 10,
        duration: 3,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube07', {
        rotateX: 8,
        rotateY: -12,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube08', {
        rotateX: 7,
        rotateY: 14,
        duration: 3,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube09', {
        rotateX: 4,
        rotateY: -10,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube010', {
        rotateX: 10,
        rotateY: 14,
        duration: 3,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube011', {
        rotateX: -15,
        rotateY: 15,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube012', {
        rotateX: -13,
        rotateY: -13,
        duration: 3,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube013', {
        rotateX: 10,
        rotateY: -10,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube014', {
        rotateX: -16,
        rotateY: 4,
        duration: 3,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    gsap.to('.cube015', {
        rotateX: -20,
        rotateY: 20,
        duration: 2,
        ease: 'none',
        repeat: -1,
        yoyo: true,
    })

    //loop move
    gsap.to('.fix_title .inner', {
        x: -4436,
        duration: 80,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.page02_letter .inner', {
        y: -3086,
        duration: 60,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.page03_box .Music_is_always_by_my_side', {
        y: -2800,
        duration: 60,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.page02 .page02_box .slide01', {
        y: -1022,
        duration: 30,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.page02 .page02_box .slide02', {
        y: 979,
        duration: 30,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.page02 .page02_box .slide03', {
        y: -1002,
        duration: 30,
        ease: 'none',
        repeat: -1
    })


// 식물
    gsap.to('.left_plant1', { //선택자
        rotate: -3, //구동
        duration: 4, //시간
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })

    gsap.to('.left_plant2', {
        rotate: -3,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_plant3', {
        rotate: -3,
        duration: 2,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_plant4', {
        rotate: -5,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_plant5', {
        rotate: -5,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_plant1', { //선택자
        rotate: -3, //구동
        duration: 4, //시간
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })

    gsap.to('.right_plant2', {
        rotate: -3,
        duration: 4,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_plant3', {
        rotate: -4,
        duration: 3,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_plant4', {
        rotate: -5,
        duration: 3,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

// 주방
    gsap.to('.left_kitchen1 img', {
        y: -40, /*ex) y축으로 음수50px 만큼움직이겠다.*/
        duration: 7, //속도
        yoyo: true, //왕복
        ease: 'none', //가속도
        repeat: -1 //반복
    })

    gsap.to('.left_kitchen2 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_kitchen3 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_kitchen4 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_kitchen5 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_kitchen1 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_kitchen2 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_kitchen3 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_kitchen4 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

// 세탁실
    gsap.to('.left_laundry1 img', {
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_laundry2 img', {
        x: -20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_laundry3 img', {
        x: 20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_laundry4 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_laundry5 img', {
        x: 20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_laundry6 img', {
        x: 20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_laundry7 img', {
        x: 20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_laundry8 img', {
        y: -20,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_laundry9 img', {
        x: 20,
        y: -20,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_laundry1 img', {
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_laundry2 img', {
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_laundry3 img', {
        x: -20,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_laundry4 img', {
        x: 50,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_laundry5 img', {
        x: 20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_laundry6 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_laundry7 img', {
        x: -20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    // 깃털
    gsap.to('.left_room1 img', {
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_room2 img', {
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_room3 img', {
        x: -20,
        y: 20,
        duration: 10,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_room4 img', {
        x: 10,
        y: -30,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_room5 img', {
        x: 20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.left_room6 img', {
        x: -20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_room1 img', {
        x: 20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_room2 img', {
        x: -20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_room3 img', {
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.right_room4 img', {
        x: -20,
        y: -40,
        duration: 7,
        yoyo: true,
        ease: 'none',
        repeat: -1
    })

    // phone
    gsap.to('.page04_box .left_phone', {
        y: 80,
        yoyo: true, //왕복
        duration: 8,
        ease: 'none',
        repeat: -1
    })
    gsap.to('.page04_box .right_phone', {
        y: -80,
        yoyo: true, //왕복
        duration: 8,
        ease: 'none',
        repeat: -1
    })

    //rotate text
    gsap.to('.page04_box .circle_text_big', {
        rotate: 360,
        duration: 60,
        ease: 'none',
        repeat: -1
    })
    gsap.to('.page04_box .circle_text_small', {
        rotate: -360,
        duration: 60,
        ease: 'none',
        repeat: -1
    })

    gsap.to('.OBJET_COLLECTION .big_inner .inner', {
        x: -3561,
        duration: 10,
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
    se01_move01.to("#section01 .plant_box_right .right_plant1", {x: 1500, y: 0, z: 50}, 0.7);
    se01_move01.to("#section01 .plant_box_right .right_plant2", {x: 1500, y: 10}, 0.7);
    se01_move01.to("#section01 .plant_box_right .right_plant3", {x: 300, y: 400}, 1);
    se01_move01.to("#section01 .plant_box_right .right_plant4", {x: 300, y: 400}, 1);
    se01_move01.to("#section01 .plant_box_left .left_plant1", {x: -1000, y: 10, z: 100}, 0.7);
    se01_move01.to("#section01 .plant_box_left .left_plant2", {x: -500, y: 0, z: 200}, 0.7);
    se01_move01.to("#section01 .plant_box_left .left_plant3", {x: -600, y: 600}, 1);
    se01_move01.to("#section01 .plant_box_left .left_plant4", {x: -500, y: 200}, 1);
    se01_move01.to("#section01 .plant_box_left .left_plant5", {x: 0, y: 400, z: 0}, 1);

    let sc01_scale01 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale01,
        trigger: "#section01", //기준
        start: "5100px top", //기준점 브라우저
        end: "8500px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_scale01.to("#section01 .main_bg", {scale: 0.8}, 0);


    let sc01_scale02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale02,
        trigger: "#section01", //기준
        start: "8600px top", //기준점 브라우저
        end: "12000px bottom", //기준점 브라우저
        scrub: 1,
        onEnterBack: () => {
            $('.fix_this_1').css('background', '#e0ded8')
            $('#section01 .main_bg .main_video video').attr('src', `video/section01/living_room_video.mp4`)
        },
        onLeave: () => {
            $('.fix_this_1').css('background', '#c98181')
            $('#section01 .main_bg .main_video video').attr('src', `video/section01/kitchen.mp4`)
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
    sc01_scale02.to("#section01 .main_bg", {scale: 1}, 0);

    let sc01_kitchen_move = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_kitchen_move,
        trigger: "#section01", //기준
        start: "11000px top", //기준점 브라우저
        end: "12000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen1", {x: 0, y: 0}, 1);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen2", {x: 0, y: 0}, 1);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen3", {x: 0, y: 0}, 1);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen4", {x: 0, y: 0}, 1);
    sc01_kitchen_move.to("#section01 .kitchen_box_left .left_kitchen5", {x: 0, y: 0}, 1);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen1", {x: 0, y: 0, z: 0}, 1);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen2", {x: 0, y: 0}, 1);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen3", {x: 0, y: 0}, 1);
    sc01_kitchen_move.to("#section01 .kitchen_box_right .right_kitchen4", {x: 0, y: 240}, 1);


    let sc01_scale03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale03,
        trigger: "#section01", //기준
        start: "14000px top", //기준점 브라우저
        end: "17000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_scale03.to("#section01 .main_bg", {scale: 0.8}, 0);
    sc01_scale03.to("#section01 .left_kitchen1", {y: -1000}, 1);
    sc01_scale03.to("#section01 .left_kitchen2", {x: 0, y: 1500}, 1);
    sc01_scale03.to("#section01 .left_kitchen3", {x: -200, y: 0}, 1);
    sc01_scale03.to("#section01 .left_kitchen4", {x: -400, y: 600}, 1);
    sc01_scale03.to("#section01 .left_kitchen5", {x: 200, y: 600}, 1);
    sc01_scale03.to("#section01 .right_kitchen1", {x: 0, y: -120}, 1);
    sc01_scale03.to("#section01 .right_kitchen2", {x: 600, y: -600}, 1);
    sc01_scale03.to("#section01 .right_kitchen3", {x: 600, y: 0}, 1);
    sc01_scale03.to("#section01 .right_kitchen4", {y: 600}, 1);


    let sc01_scale04 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale04,
        trigger: "#section01", //기준
        start: "17500px top", //기준점 브라우저
        end: "21500px bottom", //기준점 브라우저
        scrub: 1,
        onEnterBack: () => {
            $('.fix_this_1').css('background', '#c98181')
            $('#section01 .main_bg .main_video video').attr('src', `video/section01/kitchen.mp4`)
        },
        onLeave: () => {
            $('.fix_this_1').css('background', '#2f433a')
            $('#section01 .main_bg .main_video video').attr('src', `video/section01/laundry.mp4`)
        }
    });
    //('선택자',{구동},듀레이션(0~1))
    sc01_scale04.to("#section01 .main_bg", {scale: 1}, 0);


    let sc01_laundry_box = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_laundry_box,
        trigger: "#section01", //기준
        start: "20500px top", //기준점 브라우저
        end: "21000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_laundry_box.to("#section01 .left_laundry1", {x: 0, y: 0}, 0);
    sc01_laundry_box.to("#section01 .left_laundry2", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .left_laundry3", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .left_laundry4", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .left_laundry5", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .left_laundry6", {x: 0, y: -600}, 0.4);
    sc01_laundry_box.to("#section01 .left_laundry6", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .left_laundry7", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .left_laundry8", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .left_laundry9", {x: 0, y: 0}, 0.4);

    sc01_laundry_box.to("#section01 .right_laundry1", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .right_laundry2", {x: 0, y: 0}, 0);
    sc01_laundry_box.to("#section01 .right_laundry3", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .right_laundry4", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .right_laundry5", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .right_laundry6", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .right_laundry7", {x: 0, y: 0}, 0.4);
    sc01_laundry_box.to("#section01 .right_laundry8", {x: 0, y: 0}, 0.4);

    let sc01_scale05 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale05,
        trigger: "#section01", //기준
        start: "22000px top", //기준점 브라우저
        end: "25000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_scale05.to("#section01 .main_bg", {scale: 0.8}, 0);
    sc01_scale05.to("#section01 .left_laundry1", {x: 0, y: -500}, 1);
    sc01_scale05.to("#section01 .left_laundry2", {x: 300, y: -500}, 1);
    sc01_scale05.to("#section01 .left_laundry3", {x: -300, y: -500}, 1);
    sc01_scale05.to("#section01 .left_laundry4", {x: -1550, y: 0}, 1);
    sc01_scale05.to("#section01 .left_laundry5", {x: 0, y: -1800}, 1);
    sc01_scale05.to("#section01 .left_laundry6", {x: 0, y: -1800}, 0.9);
    sc01_scale05.to("#section01 .left_laundry7", {x: 0, y: -700}, 1);
    sc01_scale05.to("#section01 .left_laundry8", {x: 200, y: -1800}, 1);
    sc01_scale05.to("#section01 .left_laundry9", {x: 0, y: -800}, 1);

    sc01_scale05.to("#section01 .right_laundry1", {x: -300, y: -500}, 1);
    sc01_scale05.to("#section01 .right_laundry2", {x: 0, y: -1700}, 1);
    sc01_scale05.to("#section01 .right_laundry3", {x: 0, y: -1700}, 1);
    sc01_scale05.to("#section01 .right_laundry4", {x: 0, y: -1700}, 0.9);
    sc01_scale05.to("#section01 .right_laundry5", {x: 200, y: -500}, 1);
    sc01_scale05.to("#section01 .right_laundry6", {x: 200, y: 0}, 1);
    sc01_scale05.to("#section01 .right_laundry7", {x: -800, y: -1800, z: 0}, 1);
    sc01_scale05.to("#section01 .right_laundry8", {x: -0, y: -1800}, 1);


    let sc01_scale06 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_scale06,
        trigger: "#section01", //기준
        start: "25500px top", //기준점 브라우저
        end: "28500px bottom", //기준점 브라우저
        scrub: 1,
        onEnterBack: () => {
            $('.fix_this_1').css('background', '#2f433a')
            $('#section01 .main_bg .main_video video').attr('src', `video/section01/laundry.mp4`)
        },
        onLeave: () => {
            $('.fix_this_1').css('background', '#95b6d2')
            $('#section01 .main_bg .main_video video').attr('src', `video/section01/room.mp4`)
        }
    });
    //('선택자',{구동},듀레이션(0~1))
    sc01_scale06.to("#section01 .main_bg", {scale: 1}, 0);


    let room_box = gsap.timeline();
    ScrollTrigger.create({
        animation: room_box,
        trigger: "#section01", //기준
        start: "27500px top", //기준점 브라우저
        end: "28500px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    room_box.to("#section01 .left_room1", {x: 0, y: 0}, 0);
    room_box.to("#section01 .left_room2", {x: 0, y: 0}, 0);
    room_box.to("#section01 .left_room3", {x: 0, y: 0}, 0);
    room_box.to("#section01 .left_room4", {x: 0, y: 0}, 0);
    room_box.to("#section01 .left_room5", {x: 0, y: 0}, 0);
    room_box.to("#section01 .left_room6", {x: 0, y: 0}, 0);

    room_box.to("#section01 .right_room1", {x: 0, y: 0}, 0);
    room_box.to("#section01 .right_room2", {x: 0, y: 0}, 0);
    room_box.to("#section01 .right_room3", {x: 0, y: 0}, 0);
    room_box.to("#section01 .right_room4", {x: 0, y: 0}, 0);


    let sc01_top_bottom = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_top_bottom,
        trigger: "#section01", //기준
        start: "29000px top", //기준점 브라우저
        end: "32000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_top_bottom.to("#section01 .fix_top", {y: 0}, 0);
    sc01_top_bottom.to("#section01 .fix_bottom", {y: 0}, 0);
    sc01_top_bottom.to("#section01 .dim_bg", {opacity: 1}, 0);
    sc01_top_bottom.to("#section01 .point_none", {opacity: 0}, 0);
    sc01_top_bottom.to("#section01 .main_btn", {opacity: 0}, 0);


    let sc01_top_bottom02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc01_top_bottom02,
        trigger: "#section01", //기준
        start: "33000px top", //기준점 브라우저
        end: "40000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc01_top_bottom02.to("#section01 .fix_top", {y: -innerHeight * 0.5}, 0);
    sc01_top_bottom02.to("#section01 .fix_bottom", {y: innerHeight * 0.5}, 0);
    sc01_top_bottom02.to("#section01 .dim_bg", {opacity: 0}, 0);
    sc01_top_bottom02.to("#section01 .xScroll2", {opacity: 1}, 0);


    let se02_xScroll01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll01,
        trigger: "#section01",
        start: "45000px top",
        end: "55500px bottom",
        scrub: 1,
    });

    se02_xScroll01.to("#section01 .xScroll2", {left: -innerWidth}, 0);


    let se02_xScroll02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll02,
        trigger: "#section01",
        start: "55000px top",
        end: "95% bottom",
        scrub: 1,
    });

    se02_xScroll02.to("#section01 .xScroll2", {left: 'calc(100vw - 28798px)'}, 0);


// 가로페이지 시작 동영상
    let sc02_page01_mood_text = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02_page01_mood_text,
        trigger: "#section01", //기준
        start: "41000px top", //기준점 브라우저
        end: "44000px bottom", //기준점 브라우저
        scrub: 1,
    });

    //('선택자',{구동},듀레이션(0~1))
    sc02_page01_mood_text.to("#section01 .xScroll2 .scroll_page01 .page01_top_txt", {opacity: 1, y: 0}, 0);
    sc02_page01_mood_text.to("#section01 .xScroll2 .scroll_page01 .page01_bottom_txt", {opacity: 1, y: 0}, 0);
    sc02_page01_mood_text.to("#section01 .xScroll2 .scroll_page01 .page01_long_txt", {opacity: 1, y: 0}, 0);


    let se02_xScroll_text01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll_text01,
        trigger: "#section01", //기준(해당 section)
        start: "55800px top", //기준점, 브라우저
        end: "57000px bottom", //기준점, 브라우저
        scrub: 1,
    });


    //LG가 선보인 세상에 없던 신가전
    //('선택자',{구동,구동,구동},듀레이션(0~1))
    se02_xScroll_text01.to("#section01 .page02_second_txt1", {opacity: 1, y: 0}, 0);
    se02_xScroll_text01.to("#section01 .page02_second_txt2", {opacity: 1, y: 0}, 0.1);
    se02_xScroll_text01.to("#section01 .page02_second_txt3", {opacity: 1, y: 0}, 0.2);
    se02_xScroll_text01.to("#section01 .page02_second_txt4", {opacity: 1, y: 0}, 0.3);
    se02_xScroll_text01.to("#section01 .page02_second_txt5", {opacity: 1, y: 0}, 0.3);


    let se02_xScroll_op = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll_op,
        trigger: "#section01", //기준(해당 section)
        start: "50000px top", //기준점, 브라우저
        end: "52000px bottom", //기준점, 브라우저
        scrub: 1,
    });


    //LG가 선보인 세상에 없던 신가전
    //('선택자',{구동,구동,구동},듀레이션(0~1))
    se02_xScroll_op.to("#section01 .page02_big_title", {opacity: 1, y: 0}, 0);
    se02_xScroll_op.to("#section01 .page02_small_title", {opacity: 1, y: 0}, 0.2);

    // 냉장고 색 바뀌는 부분
    gsap.to('.page02_refrigerator_box', {//대상
        scrollTrigger: {
            trigger: "#section01", //기준점
            start: "51000px top", //기준점 브라우저
            // end: () => "+=" + 5000,
            end: '55000px bottom', //기준점 브라우저
            scrub: true,
            onUpdate: self => {
                // console.log("progress:", self.progress)
                let v = Math.floor(self.progress * 4); //jpg 갯수 만큼 바꿔주기
                // console.log(v)
                $('#section01 .page02_refrigerator_box img').attr('src', `image/section02/page02/box${v + 1}.png`);
            }
        }
    });

    let se02_xScroll_icons = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll_icons,
        trigger: "#section01", //기준(해당 section)
        start: "51000px top", //기준점, 브라우저
        end: "54000px bottom", //기준점, 브라우저
        scrub: 1,
    });


    //('선택자',{구동,구동,구동},듀레이션(0~1))
    se02_xScroll_icons.to("#section01 .page02_color_icon01", {opacity: 1}, 0);
    se02_xScroll_icons.to("#section01 .page02_color_icon02", {opacity: 1}, 0.2);
    se02_xScroll_icons.to("#section01 .page02_color_icon03", {opacity: 1}, 0.4);
    se02_xScroll_icons.to("#section01 .page02_color_icon04", {opacity: 1}, 0.6);
    se02_xScroll_icons.to("#section01 .page02_color_icon05", {opacity: 1}, 0.8);


    // 냉장고 회전
    // gsap.to('.scroll_page03_img', {//대상
    //     scrollTrigger: {
    //         trigger: "#section01", //기준점
    //         start: "59000px top", //기준점 브라우저
    //         // end: () => "+=" + 5000,
    //         end: '62000px bottom', //기준점 브라우저
    //         scrub: 0.3,
    //         // onUpdate: self => {
    //         //     // console.log("progress:", self.progress)
    //         //     let v = Math.floor(self.progress * 56); //jpg 갯수 만큼 바꿔주기
    //         //     // console.log(v)
    //         //     // $('#section01 .scroll_page03_img img').attr('src', `image/section02/page03/rotate/refrigerator${v + 1}.png`);
    //         // }
    //     }
    // });


    let refrigerator = gsap.timeline();
    ScrollTrigger.create({
        animation: refrigerator,
        trigger: "#section01", //기준(해당 section)
        start: "61000px top", //기준점, 브라우저
        end: "63500px bottom", //기준점, 브라우저
        scrub: 1,
        onUpdate: self => {
            // console.log("progress:", self.progress)
            let v = Math.floor(self.progress * 56); //jpg 갯수 만큼 바꿔주기
            // console.log(v)
            $('#section01 .scroll_page03_img img').attr('src', `image/section02/page03/rotate/refrigerator${v + 1}.png`);
        }
    });

    refrigerator.to("#section01 .page03_img_move", {x: 2230}, 0);


    let se02_xScroll_photo01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll_photo01,
        trigger: "#section01", //기준(해당 section)
        start: "55800px top", //기준점, 브라우저
        end: "57500px bottom", //기준점, 브라우저
        scrub: 1,
    });

    se02_xScroll_photo01.to("#section01 .page02_moodup1", {y: 0}, 0);
    se02_xScroll_photo01.to("#section01 .page02_moodup2", {y: 0}, 0.01);

    let sc02_video_box = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02_video_box,
        trigger: "#section01", //기준(해당 section)
        start: "58000px top", //기준점, 브라우저
        end: "60000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    //('선택자',{구동,구동,구동},듀레이션(0~1))
    sc02_video_box.to("#section01 .scroll_page03 .page03_box .color_video", {x: 1140, y: -20, scale: 0.2}, 0);

    let sc02_video_box02 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02_video_box02,
        trigger: "#section01", //기준(해당 section)
        start: "63500px top", //기준점, 브라우저
        end: "65000px bottom", //기준점, 브라우저
        scrub: 2,
    });

    //('선택자',{구동,구동,구동},듀레이션(0~1))
    sc02_video_box02.to("#section01 .scroll_page04 .page04_box .music_video", {x: 1825, y: -50, scale: 0.2}, 0);

    let sc02_video_box03 = gsap.timeline();
    ScrollTrigger.create({
        animation: sc02_video_box03,
        trigger: "#section01", //기준(해당 section)
        start: "69500px top", //기준점, 브라우저
        end: "72000px bottom", //기준점, 브라우저
        scrub: 2,
    });

    //('선택자',{구동,구동,구동},듀레이션(0~1))
    sc02_video_box03.to("#section01 .scroll_page05 .page05_box .voice_video", {x: 1705, y: 53, scale: 0.2}, 0);


    // 컬러
    let se02_xScroll_color = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll_color,
        trigger: "#section01", //기준(해당 section)
        start: "58500px top", //기준점, 브라우저
        end: "61000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    //('선택자',{구동,구동,구동},듀레이션(0~1))
    se02_xScroll_color.to("#section01 .scroll_page03 .page03_box .color_collection_tittle_en", {opacity: 1, y: 0}, 0);
    se02_xScroll_color.to("#section01 .scroll_page03 .page03_box .text01", {opacity: 1, y: 0}, 0.1);
    se02_xScroll_color.to("#section01 .scroll_page03 .page03_box .text02", {opacity: 1, y: 0}, 0.3);
    se02_xScroll_color.to("#section01 .scroll_page03 .page03_box .tittle_kor", {opacity: 1, y: 0}, 0.3);
    se02_xScroll_color.to("#section01 .scroll_page03 .page03_box .color_sub", {y: 0}, 0);

    // 뮤직
    let se02_xScroll_music = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll_music,
        trigger: "#section01", //기준(해당 section)
        start: "63000px top", //기준점, 브라우저
        end: "68000px bottom", //기준점, 브라우저
        scrub: 1,
    });

    //('선택자',{구동,구동,구동},듀레이션(0~1))
    se02_xScroll_music.to("#section01 .scroll_page04 .page04_box .music_collection_en", {opacity: 1, y: 0}, 0);
    se02_xScroll_music.to("#section01 .scroll_page04 .page04_box .text1", {opacity: 1, y: 0}, 0.1);
    se02_xScroll_music.to("#section01 .scroll_page04 .page04_box .tittle_kor", {opacity: 1, y: 0}, 0.4);
    se02_xScroll_music.to("#section01 .scroll_page04 .page04_box .text2", {opacity: 1, y: 0}, 0.3);
    se02_xScroll_music.to("#section01 .scroll_page04 .page04_box .sub_image", {y: 0}, 0);


// 음성인식
    let se02_xScroll_voice = gsap.timeline();
    ScrollTrigger.create({
        animation: se02_xScroll_voice,
        trigger: "#section01", //기준(해당 section)
        start: "70000px top", //기준점, 브라우저
        end: "77000px bottom", //기준점, 브라우저
        scrub: 1,
    });


    //('선택자',{구동,구동,구동},듀레이션(0~1))
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .voice_assistant_en", {opacity: 1, y: 0}, 0);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .text01", {opacity: 1, y: 0}, 0.1);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .phone", {opacity: 1, y: 0}, 0.5);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .left_blah", {opacity: 1, y: 0}, 0.8);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .right_blah", {opacity: 1, y: 0}, 0.8);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .circle01", {opacity: 1, y: 0}, 0.4);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .circle02", {opacity: 1, y: 0}, 0.44);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .circle03", {opacity: 1, y: 0}, 0.4);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .circle04", {opacity: 1, y: 0}, 0.44);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .circle05", {opacity: 1, y: 0}, 0.4);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .tittle_kor", {opacity: 1, y: 0}, 1);
    se02_xScroll_voice.to("#section01 .scroll_page05 .page05_box .text02", {opacity: 1, y: 0}, 1);


    gsap.to('.fix_this_3', {
        scrollTrigger: {
            trigger: ".trigger_this_03",
            start: "top top",
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });


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
        start: "20000px top",
        end: "bottom bottom",
        scrub: 1,
    });

    se04_xScroll.to("#section04 .xScroll04", {left: 'calc(100vw - 8726px)'}, 0);


    let se04_xScroll_accordion01 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_xScroll_accordion01,
        trigger: "#section04",
        start: "4000px top",
        end: "4800px bottom",
        scrub: 1,
    });

    se04_xScroll_accordion01.to("#section04 .xScroll04 .page01 .accordion01 .main_image", {opacity: 1, y: 0}, 0.3);


    let se04_xScroll_accordion_list = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_xScroll_accordion_list,
        trigger: "#section04",
        start: "5000px top",
        end: "9000px bottom",
        scrub: 1,
    });

    se04_xScroll_accordion_list.to("#section04 .xScroll04 .page01 .accordion01", {flex: 1}, 0);
    se04_xScroll_accordion_list.to("#section04 .xScroll04 .page01 .accordion02", {flex: 21}, 0);
    se04_xScroll_accordion_list.to("#section04 .xScroll04 .page01 .accordion02 .photo1", {y: -2000}, 0);


    let se04_xScroll_accordion_list02 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_xScroll_accordion_list02,
        trigger: "#section04",
        start: "10000px top",
        end: "13000px bottom",
        scrub: 1,
    });

    se04_xScroll_accordion_list02.to("#section04 .xScroll04 .page01 .accordion02", {flex: 1}, 0);
    se04_xScroll_accordion_list02.to("#section04 .xScroll04 .page01 .accordion03", {flex: 21}, 0);

    let se04_xScroll_accordion_list03 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_xScroll_accordion_list03,
        trigger: "#section04",
        start: "15000px top",
        end: "18000px bottom",
        scrub: 1,
    });

    se04_xScroll_accordion_list03.to("#section04 .xScroll04 .page01 .accordion03", {flex: 1}, 0);
    se04_xScroll_accordion_list03.to("#section04 .xScroll04 .page01 .accordion04", {flex: 21}, 0);


    let se04_xScroll_accordion_list04 = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_xScroll_accordion_list04,
        trigger: "#section04", //기준
        start: "18000px top", //기준점 브라우저
        end: "20000px bottom", //기준점 브라우저
        scrub: 1,
    });

    se04_xScroll_accordion_list04.to("#section04 .page01 .accordion04 .photo1", {opacity: 1}, 0);
    se04_xScroll_accordion_list04.to("#section04 .page01 .accordion04 .photo2", {opacity: 1}, 0.2);
    se04_xScroll_accordion_list04.to("#section04 .page01 .accordion04 .photo3", {opacity: 1}, 0.4);
    se04_xScroll_accordion_list04.to("#section04 .page01 .accordion04 .photo4", {opacity: 1}, 0.6);
    se04_xScroll_accordion_list04.to("#section04 .page01 .accordion04 .photo5", {opacity: 1}, 0.8);


    //제품 라인 정렬
    gsap.set("#photo1", {xPercent: -30, yPercent: -50, x: 0, y: 0});
    gsap.set("#photo2", {xPercent: -20, yPercent: -40, x: 0, y: 0});
    gsap.set("#photo3", {xPercent: -30, yPercent: -30, x: 0, y: 0});
    gsap.set("#photo4", {xPercent: -50, yPercent: -50, x: 0, y: 0});

    var action = gsap.timeline({
        defaults: {duration: 1},
        scrollTrigger: {
            trigger: "#section04",
            scrub: true,
            start: "20000px top",
            end: "28000px bottom"
        }
    })
    .from("#photo1", {motionPath: {path: "#path"}}, 0)
    .from("#photo2", {motionPath: {path: "#path"}}, 0.2)
    .from("#photo3", {motionPath: {path: "#path"}}, 0.4)
    .from("#photo4", {motionPath: {path: "#path"}}, 0.6);


    let se04_rotate_img = gsap.timeline();
    ScrollTrigger.create({
        animation: se04_rotate_img,
        trigger: "#section04", //기준
        start: "20000px top",
        end: "28000px bottom",
        scrub: 1,
    });

    se04_rotate_img.to("#photo1 img", {rotate: 70}, 0);
    se04_rotate_img.to("#photo2 img", {rotate: -60}, 0.2);
    se04_rotate_img.to("#photo3 img", {rotate: -80}, 0.4);
    se04_rotate_img.to("#photo4 img", {rotate: 90}, 0.6);




    $('#section04 .xScroll04 .page01 .flex_box > div').click(function () {

        let v = $('#section04 .xScroll04 .page01 .flex_box > div').index(this)

        if (v === 0) {
            container.scrollTo(0, 103657, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 1) {
            container.scrollTo(0, 106218, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 2) {
            container.scrollTo(0, 112419, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 3) {
            container.scrollTo(0, 117439, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }
        if (v === 4) {
            container.scrollTo(0, 121307, 600, {
                callback: () => console.log('done!'),
                easing: easing.easeInOutCirc,
            });
        }

    })


})


