function genSquare(color) {
    var x;
    var y;
    if (color === 1) {
        x = Math.floor(Math.random() * ($(window).height() - 10) / 2 + 1);
        y = Math.floor((Math.random() * $(window).width() - 10) / 2 + 1);
        sq = "red";
    }
    else if (color === 2) {
        x = Math.floor(Math.random() * ($(window).height() - 10) + 1);
        y = Math.floor(Math.random() * $(window).width() - 10 + 1);
        sq = "blue";
    }
    else if (color === 3) {
        x = Math.floor(Math.random() * ($(window).height() - 10) + 1);
        y = Math.floor(Math.random() * $(window).width() - 10 + 1);
        sq = "green";
    }
    else if (color === 4) {
        x = Math.floor(Math.random() * ($(window).height() - 10) + 1);
        y = Math.floor(Math.random() * $(window).width() - 10 + 1);
        sq = "violet";
    }
    else if (color === 5) {
        x = Math.floor(Math.random() * ($(window).height() - 10) + 1);
        y = Math.floor(Math.random() * $(window).width() - 10 + 1);
        sq = "white";
    }
    $("body").html($("body").html() + '<section class="'+sq+'Square" style="top :' + x + '; left : '+ y +'"></section>');
}

function genLoz(flower) {
    $("body").html($("body").html() + '<section class="Loz" style="top :' + flower[0] + '; left : ' + flower[1] + '"></section>');
    $("body").html($("body").html() + '<section class="Loz" style="top :' + flower[1] + '; left : ' + flower[0] + '"></section>');
    $("body").html($("body").html() + '<section class="Loz" style="top :' + flower[1] + '; left : ' + flower[1] + '"></section>');
    $("body").html($("body").html() + '<section class="Loz" style="top :' + flower[0] + '; left : ' + flower[0] + '"></section>');

    $("body").html($("body").html() + '<section class="Loz" style="top :' + flower[0] + '; left : ' + flower[2] + '"></section>');
    $("body").html($("body").html() + '<section class="Loz" style="top :' + flower[1] + '; left : ' + flower[2] + '"></section>');
    $("body").html($("body").html() + '<section class="Loz" style="top :' + flower[3] + '; left : ' + flower[0] + '"></section>');
    $("body").html($("body").html() + '<section class="Loz" style="top :' + flower[3] + '; left : ' + flower[1] + '"></section>');
    flower[0] += 10;
    flower[1] -= 10;
    return flower;
}

function genCar(coos)
{
    setTimeout(function () {
        x = coos[0];
        y = coos[1];
        $("body").html($("body").html() + '<section class="tile" style="top :' + y*100 + '; left : ' + x*100 + '"></section>');

        console.log(x);
        console.log(y);
        x+=2;
        if (x >= 16)
        {
            y++;
            y % 2 === 0 ? x = 0 : x = 1;
        }
        if (y < 8)
            genCar([x, y]);
    }, 5);
}

function main(x, flower, coos, chosen) {
    var color;
    setTimeout(function () {
        x++;
        if (chosen === 1) {
            color = Math.floor(Math.random() * 5 + 1);
            genSquare(color);
        }
        else if (chosen === 2) {
            if (x > 50)
                flower[0] = genLoz(flower[0]);
            else if (x > 40)
                flower[1] = genLoz(flower[1]);
            else if (x > 30)
                flower[2] = genLoz(flower[2]);
            else if (x > 20)
                flower[3] = genLoz(flower[3]);
            else if (x > 10)
                flower[4] = genLoz(flower[4]);
            else if (x > 0)
                flower[5] = genLoz(flower[5]);
        }
        else if (chosen === 3)
        {
            genCar(coos);
            x = 60;
        }
        if (x < 1)
            main(x, flower, coos, chosen);
    }, 50);
}