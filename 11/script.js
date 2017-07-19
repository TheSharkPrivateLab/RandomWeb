function Player() {
    this.x = 0;
    this.y = 0;
    this.map = [
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
        ["wall", "path", "path", "path", "path", "path", "path", "wall"],
        ["wall", "path", "wall", "wall", "wall", "wall", "path", "wall"],
        ["wall", "path", "wall", "play", "wall", "wall", "path", "wall"],
        ["winn", "path", "wall", "path", "wall", "wall", "path", "wall"],
        ["wall", "wall", "wall", "path", "wall", "wall", "path", "wall"],
        ["wall", "path", "path", "path", "wall", "wall", "path", "wall"],
        ["wall", "path", "wall", "path", "wall", "wall", "path", "wall"],
        ["wall", "path", "wall", "trap", "path", "wall", "path", "wall"],
        ["wall", "path", "wall", "wall", "wall", "wall", "path", "wall"],
        ["wall", "path", "path", "path", "path", "swor", "path", "wall"],
        ["wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall"],
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
            if (column === "wall")
                $("body").html($("body").html() + "<div class=\"span full\">" + "&nbsp" + "</div>");
            else if (column === "play") {
                $("body").html($("body").html() + "<div class=\"span char\">" + "&nbsp" + "</div>");
                player.x = x;
                player.y = y;
            }
            else if (column === "trap") {
                $("body").html($("body").html() + "<div class=\"span trap\">" + "&nbsp" + "</div>");
            }
            else if (column === "swor") {
                $("body").html($("body").html() + "<div class=\"span sword\">" + "&nbsp" + "</div>");
            }
            else if (column === "winn") {
                $("body").html($("body").html() + "<div class=\"span win\">" + "&nbsp" + "</div>");
            }
            else if (column === "path")
                $("body").html($("body").html() + "<div class=\"span\">" + "&nbsp" + "</div>");
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
    if (player.map[y][x] === "wall" || player.map[y][x] === "swor" || player.map[y][x] === "trap") {
        x = player.x;
        y = player.y;
    }
    if (player.map[y][x] === "winn") {
        display(player, x, y);
        $("body").html("<h1>VOUS AVEZ GAGNE</h1>");
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
    else {
        player.map[y][x] = "play";
        display(player, x, y);
    }
}

function display(player, x, y) {
    $("body").html("<p>ZQSD POUR BOUGER</p>");
    player.map.forEach(function (line) {
        line.forEach(function (column) {
            if (column === "wall")
                $("body").html($("body").html() + "<div class=\"span full\">" + "&nbsp;" + "</div>");
            else if (column === "play") {
                $("body").html($("body").html() + "<div class=\"span char\">" + "&nbsp;" + "</div>");
                player.x = x;
                player.y = y;
            }
            else if (column === "winn") {
                $("body").html($("body").html() + "<div class=\"span win\">" + "&nbsp" + "</div>");
            }
            else if (column === "swor") {
                $("body").html($("body").html() + "<div class=\"span sword\">" + "&nbsp" + "</div>");
            }
            else if (column === "trap") {
                $("body").html($("body").html() + "<div class=\"span trap\">" + "&nbsp" + "</div>");
            }
            else if (column === "path") {
                $("body").html($("body").html() + "<div class=\"span\">" + "&nbsp" + "</div>");
            }
            else
                $("body").html($("body").html() + "<div class=\"span\">" + column + "</div>");
        });
        $("body").html($("body").html() + "<br/>");
    });
}