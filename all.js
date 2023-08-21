console.log("Hello");

const nav = document.querySelector(".nav");
const img_me = document.querySelector(".img_me");
const william = document.querySelector(".william");
const introduction_contain = document.querySelector(".introduction_contain");
const introduction_img = document.querySelector(".introduction_img");
const good_point_list_01 = document.querySelector(".good_point_list_01");
const good_point_list_02 = document.querySelector(".good_point_list_02");
const good_point_list_03 = document.querySelector(".good_point_list_03");
const good_point_list_04 = document.querySelector(".good_point_list_04");
const about_me_contain = document.querySelector(".about_me_contain");
const contact_me = document.querySelector(".contact_me");
const my_projects_title = document.querySelector(".my_projects_title");
const projects_computer = document.querySelector(".projects_computer");
const projects_others_contain = document.querySelector(".projects_others_contain");
const projects_img_list = document.querySelector(".projects_img_list");

gsap.registerPlugin(ScrollTrigger);

gsap.from(nav,{
    opacity:0.3,
    x:-500,
    duration:0.8,
    scrollTrigger:{
        trigger:nav,
        // markers:true,
    }, }
);
gsap.from(img_me,{
    opacity:0.3,
    x:-500,
    duration:0.8,
    scrollTrigger:{
        trigger:img_me,
        // markers:true,
    }, }
);
gsap.from(william,{
    opacity:0.3,
    x:500,
    duration:0.8,
    scrollTrigger:{
        trigger:william,
        // markers:true,
    }, }
);
gsap.from(introduction_contain,{
    opacity:0.3,
    y:-300,
    duration:0.8,
    scrollTrigger:{
        trigger:introduction_contain,
        // markers:true,
        start:"top 80%",
        // end:"",
    }, }
);
gsap.from(introduction_img,{
    opacity:0.3,
    y:300,
    duration:0.8,
    scrollTrigger:{
        trigger:introduction_img,
        // markers:true,
        start:"top 80%",
        // end:"",
    }, }
);
// timeline無法正常顯示
const timeline = gsap.timeline();
timeline.from(good_point_list_01,{
    opacity:0.3,
    x:-300,
    duration:1.2,
    ease:"bounce.out",
    scrollTrigger:{
        trigger:good_point_list_01,
        // markers:true,
        start:"top 50%",
    }, }
);
timeline.from(good_point_list_02,{
    opacity:0.3,
    x:-300,
    duration:1.8,
    ease:"bounce.out",
    scrollTrigger:{
        trigger:good_point_list_02,
        // markers:true,
        start:"top 50%",
    }, }
);
timeline.from(good_point_list_03,{
    opacity:0.3,
    x:-300,
    duration:1.8,
    ease:"bounce.out",
    scrollTrigger:{
        trigger:good_point_list_03,
        // markers:true,
        start:"top 75%",
    }, }
);
timeline.from(good_point_list_04,{
    opacity:0.3,
    x:-300,
    duration:1.2,
    ease:"bounce.out",
    scrollTrigger:{
        trigger:good_point_list_04,
        // markers:true,
        start:"top 75%",
    }, }
);

gsap.from(about_me_contain,{
    opacity:0.3,
    y:300,
    duration:0.8,
    scrollTrigger:{
        trigger:about_me_contain,
        // markers:true,
        start:"top 80%",
        // end:"",
    }, }
);
gsap.from(contact_me,{
    opacity:0.3,
    x:-500,
    duration:0.8,
    scrollTrigger:{
        trigger:contact_me,
        // markers:true,
    }, }
);
gsap.from(my_projects_title,{
    opacity:0.3,
    x:-500,
    duration:0.8,
    scrollTrigger:{
        trigger:my_projects_title
        // markers:true,
    }, }
);
gsap.from(projects_computer,{
    opacity:0.3,
    x:-500,
    duration:0.8,
    scrollTrigger:{
        trigger:projects_computer
        // markers:true,
    }, }
);
gsap.from(projects_others_contain,{
    opacity:0.3,
    x:-500,
    duration:0.8,
    scrollTrigger:{
        trigger:projects_others_contain
        // markers:true,
    }, }
);
gsap.from(projects_img_list,{
    opacity:0.3,
    x:500,
    duration:0.8,
    scrollTrigger:{
        trigger:projects_img_list,
        // markers:true,
    }, }
);
