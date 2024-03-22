let tl = gsap.timeline()

tl.from("#nav",{
    width : 0,
    duration : 1,
    delay : .5
})

tl.from("#nav h3,#nav-part2 h4, #nav h5", {
    y : -100,
    opacity : 0,
    duration : 1,
    stagger : .3,
})

tl.from("#left h1, #left h1 span img",{
    x: -1000,
    opacity : 0,
    duration : 1,
    stagger : .5
})

tl.from("#right img",{
    scale : 0,
    duration : 1,
    opacity : 0
})

tl.from("#page2 #box",{
    opacity : 0,
    duration : 1,
    x : -400,
    stagger : .5,
    scrollTrigger : {
        trigger : "#page2 #box",
        scroller : "body",
        // markers : true,
        start : "top 80%",
        end : "top 40%",
        scrub : 2
    }
})
