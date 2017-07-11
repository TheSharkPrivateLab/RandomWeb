function print(a) {console.log(a);}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function display() {
        $("#display").html($("#display").html() + '<section class="display-div">' + name);
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://anilist.co/api/anime/' + getRandomInt(1,500), false);
        xhr.send();
        var myJSON = xhr.responseText;
        var JSON = JSON.parse(myJSON);
}