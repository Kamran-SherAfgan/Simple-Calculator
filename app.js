function getNumber(num) {
    var mirror = document.getElementById('mirror');
    mirror.value += num;

}

function getResult(){
    var mirror = document.getElementById('mirror');
    mirror.value = eval(mirror.value);
}

function clearResult(){
    var mirror = document.getElementById('mirror');
    mirror.value = ""
}
