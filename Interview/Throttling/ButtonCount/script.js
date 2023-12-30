const btn_click = document.querySelector(".btn-click")
const btn_increment = document.querySelector(".increment-pressed");
const btn_triggred = document.querySelector(".increment-count");

var press_count = 0
var triggered_count = 0;
const throttleCount=_.throttle(()=>{
    btn_triggred.innerHTML = ++triggered_count;

},500)

btn_click.addEventListener('click', () => {
    btn_increment.innerHTML = ++press_count;
    // btn_triggred.innerHTML = ++triggered_count;
    throttleCount()
    console.log("press_count",press_count);

})