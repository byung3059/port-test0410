gsap.registerPlugin(ScrollTrigger);

// 원형 테두리 줄어드는 애니메이션
gsap.to(".black_circle circle", {
    attr: { "stroke-dashoffset": 1697 }, // 줄어드는 값 설정
    scrollTrigger: {
        trigger: "#cic_box",
        start: "top top",
        end: "bottom top",
        scrub: true,
        markers: true // 디버깅 마커 표시 (테스트 후 제거 가능)
    }
});

// `.black_circle_bg`의 투명도(Opacity) 1 → 0 변화
gsap.to(".black_circle_bg", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#cic_box",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});


