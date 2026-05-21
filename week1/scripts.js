let bodyTag = document.body;

let hongikFestival = {
    name: "축제 라인업",
    date: "2026.05.13 - 2026.05.15",
    location: "서울특별시 마포구 홍익대학교",
    lineup: {
        day1: "다이나믹듀오",
        day2: "백예린",
        day3: "프로미스나인",
    }
}

// section 태그를 찾는다.
let sectionTag = document.querySelector("section");

let dynamicDuoTag = document.createElement("p");
dynamicDuoTag.innerText = hongikFestival.lineup.day1; // "다이나믹듀오"
sectionTag.appendChild(dynamicDuoTag);
// 화면을 본다.