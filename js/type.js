//This object is used to control the velocity, delay and loop of the type
//This has attributes to change this parameters.
const type = new Typed('.text__main__coreword', {
    strings: ['Developer', 'Coder', 'Student'],//words that you wanna show
    loop: true,//If you want to be a loop
    typeSpeed: 80,//Type speed
    backSpeed: 80,//Back Type speed
    startDelay: 300,//If u want a delay at start
    loopCount: false,//How many times to repeat the array
});