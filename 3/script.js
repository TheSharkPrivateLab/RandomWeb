function Player(hero) {
    var arrStats = getHeroStats(hero);
    this.hero = arrStats[0];
    this.element = arrStats[1];
    this.atk = arrStats[2];
    this.def = arrStats[3];

}

function getHeroStats(hero) {
    var arrStats = [];
    if (hero === "Ignifius") {
        arrStats = [
            "Ignifius",
            1, //Element -> 1 Fire, 2 Water, 3 Grass
            5, //Atk
            2  //Def
        ];
    }
    else if (hero === "Aquarius") {
        arrStats = [
            "Aquarius",
            1, //Element -> 1 Fire, 2 Water, 3 Grass
            3, //Atk
            3  //Def
        ];
    }
    else if (hero === "Gaïa") {
        arrStats = [
            "Gaïa",
            1, //Element -> 1 Fire, 2 Water, 3 Grass
            2, //Atk
            5  //Def
        ];
    }
    return arrStats;
}

function initGame(player)
{
    setCookie("playerHero", player.hero, 60);
    windMain();
}

function windMain() {
    var body = $("body");
    body.html("<h2>Menu principal</h2>");
    body.html(body.html() + '<button type="button" onclick="windStats()" id="windStats">Regarder ses statistiques</button>');
    body.html(body.html() + '<button type="button" onclick="windFight()" id="windFight">Combattre</button>');
}

function windStats(player) {
    var body = $("body");
    body.html('<h2>Statistiques</h2>');
    body.html(body.html() + '<button type="button" onclick="windMain()" id="windMain">Menu principal</button>');
    body.html(body.html() + '<p>'+ player.atk +'</p>');
}

function windFight() {
    var body = $("body");
    body.html('<h2>Combattre</h2>');
    body.html(body.html() + '<button type="button" onclick="windMain()" id="windMain">Menu principal</button>');
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}