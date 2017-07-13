function Player() {
    this.x = 0;
    this.y = 0;
    this.map = [
        ["w", "w", "w", "w", "w", "w", "w", "w"],
        ["w", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "w"],
        ["w", "&nbsp;", "w", "w", "w", "w", "&nbsp;", "w"],
        ["w", "&nbsp;", "w", "p", "w", "w", "&nbsp;", "w"],
        ["win", "&nbsp;", "w", "&nbsp;", "w", "w", "&nbsp;", "w"],
        ["w", "w", "w", "&nbsp;", "w", "w", "&nbsp;", "w"],
        ["w", "&nbsp;", "&nbsp;", "&nbsp;", "w", "w", "&nbsp;", "w"],
        ["w", "&nbsp;", "w", "&nbsp;", "w", "w", "&nbsp;", "w"],
        ["w", "&nbsp;", "w", "&nbsp;", "&nbsp;", "w", "&nbsp;", "w"],
        ["w", "&nbsp;", "w", "w", "w", "w", "&nbsp;", "w"],
        ["w", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "w"],
        ["w", "w", "w", "w", "w", "w", "w", "w"],
    ];

    return this;
}

function print(msg) {
    console.log(msg);
}

function init(player) {
    var x = 0;
    var y = 0;
    $("body").html("<p>ZQSD POUR BOUGER</p>");
    player.map.forEach(function (line) {
        line.forEach(function (column) {
            if (column === "w")
                $("body").html($("body").html() + "<div class=\"span full\">" + "&nbsp" + "</div>");
            else if (column === "p") {
                $("body").html($("body").html() + "<div class=\"span char\">" + "&nbsp" + "</div>");
                player.x = x;
                player.y = y;
            }
            else if (column === "win") {
                $("body").html($("body").html() + "<div class=\"span win\">" + "&nbsp" + "</div>");
            }
            else
                $("body").html($("body").html() + "<div class=\"span\">" + column + "</div>");
            x++;
        });
        $("body").html($("body").html() + "<br/>");
        x = 0;
        y++;
    });
}

function mv(player, direction) {
    var x = player.x;
    var y = player.y;
    player.map[y][x] = "&nbsp;";
    switch (direction) {
        case "z":
            y--;
            break;
        case "q":
            x--;
            break;
        case "s":
            y++;
            break;
        case "d":
            x++;
            break;
        default:
            print("Error");
        }
    if (player.map[y][x] === "w") {
        x = player.x;
        y = player.y;
    }
    if (player.map[y][x] === "win") {
        display(player, x, y);
        $("body").html("<h1>VOUS AVEZ GAGNE</h1>");
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
    else {
        player.map[y][x] = "p";
        display(player, x, y);
    }
}

function display(player, x, y) {
    $("body").html("<p>ZQSD POUR BOUGER</p>");
    player.map.forEach(function (line) {
        line.forEach(function (column) {
            if (column === "w")
                $("body").html($("body").html() + "<div class=\"span full\">" + "&nbsp;" + "</div>");
            else if (column === "p") {
                $("body").html($("body").html() + "<div class=\"span char\">" + "&nbsp;" + "</div>");
                player.x = x;
                player.y = y;
            }
            else if (column === "win") {
                $("body").html($("body").html() + "<div class=\"span win\">" + "&nbsp" + "</div>");
            }
            else
                $("body").html($("body").html() + "<div class=\"span\">" + column + "</div>");
        });
        $("body").html($("body").html() + "<br/>");
    });
}