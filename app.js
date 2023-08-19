let btn = document.getElementById('toggleBtn')
let bulb = document.getElementById('bulb')
btn.addEventListener('click', toggleBulb)
function toggleBulb(e){
    if (btn.textContent.includes('On')){
        bulb.src = "/Images/bulb-on.png"
        btn.textContent = "Turn Off"
    } else {
        bulb.src = "/Images/bulb-off.png"
        btn.textContent = "Turn On"
    }
}
