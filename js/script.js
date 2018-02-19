var flag = 1;

function showMenu() {
    // body...
    console.log("CLICKED");
    var block = document.getElementsByClassName('menu-toggle');


    if (flag) {
        for (var i = 0; i < block.length; i++) {
            var classList = block[i].classList;
            classList.add("hideDiv--mobile--show");
            console.log("Flag is one");
        }
    } else {
        for (var i = 0; i < block.length; i++) {
            var classList = block[i].classList;
            classList.remove("hideDiv--mobile--show");
            console.log("Flag is zero");
        }
    }
    flag = !flag;

}