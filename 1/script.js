function write_res(res) {
    var x = 0;
    var string;

    for (var key in res) {
        if (Object.prototype.hasOwnProperty.call(res, key)) {
            var val = res[key][0];
            var newHTML = "<span style=\"margin : 10px;\">" + res[key][2] + val + "</span>";
            if (val != 1) {
                if (val == 0) {
                    $("#immunities").html($("#immunities").html() + newHTML);
                }
                else if (val > 1) {
                    $("#weaknesses").html($("#weaknesses").html() + newHTML);
                }
                else if (val < 1) {
                    $("#resistances").html($("#resistances").html() + newHTML);
                }
            }
            x++;
        }
    }
    console.log(res);
}

function def_res(res) {
    res.water = new Array;
    res.fire = new Array;
    res.grass = new Array;
    res.normal = new Array;
    res.electrik = new Array;
    res.ice = new Array;
    res.fighting = new Array;
    res.steel = new Array;
    res.dragon = new Array;
    res.fairy = new Array;
    res.insect = new Array;
    res.poison = new Array;
    res.psy = new Array;
    res.rock = new Array;
    res.ground = new Array;
    res.ghost = new Array;
    res.dark = new Array;
    res.ice = new Array;
    res.flying = new Array;
    res.water[0] = res.fire[0] = res.grass[0] = res.normal[0] = res.electrik[0] = res.ice[0] = res.fighting[0] = res.steel[0] = res.dragon[0] = res.fairy[0] = res.insect[0] = res.poison[0] = res.psy[0] = res.rock[0] = res.ground[0] = res.ghost[0] = res.dark[0] = res.flying[0] = 1;
    res.water[1] = "water";
    res.fire[1] = "fire";
    res.grass[1] = "grass";
    res.normal[1] = "normal";
    res.electrik[1] = "electrik";
    res.ice[1] = "ice";
    res.fighting[1] = "fighting";
    res.steel[1] = "steel";
    res.dragon[1] = "dragon";
    res.fairy[1] = "fairy";
    res.insect[1] = "insect";
    res.poison[1] = "poison";
    res.psy[1] = "psy";
    res.rock[1] = "rock";
    res.ground[1] = "ground";
    res.ghost[1] = "ghost";
    res.dark[1] = "dark";
    res.flying[1] = "flying";

    res.water[2] = "Eau : x";
    res.fire[2] = "Feu : x";
    res.grass[2] = "Plante : x";
    res.normal[2] = "Normal : x";
    res.electrik[2] = "Electrik : x";
    res.ice[2] = "Glace : x";
    res.fighting[2] = "Combat : x";
    res.steel[2] = "Acier : x";
    res.dragon[2] = "Dragon : x";
    res.fairy[2] = "Fée : x";
    res.insect[2] = "Insecte : x";
    res.poison[2] = "Poison : x";
    res.psy[2] = "Psy : x";
    res.rock[2] = "Roche : x";
    res.ground[2] = "Sol : x";
    res.ghost[2] = "Spectre : x";
    res.dark[2] = "Ténèbres : x";
    res.flying[2] = "Vol : x";
    return res;
}

function calc_res(res, type) {
    if (type == "Acier") {
        res.steel[0] /= 2;
        res.fighting[0] *= 2;
        res.dragon[0] /= 2;
        res.fairy[0] /= 2;
        res.fire[0] *= 2;
        res.ice[0] /= 2;
        res.insect[0] /= 2;
        res.normal[0] /= 2;
        res.grass[0] /= 2;
        res.poison[0] = 0;
        res.psy[0] /= 2;
        res.rock[0] /= 2;
        res.ground[0] *= 2;
        res.flying[0] /= 2;
    }
    else if (type == "Combat") {
        res.fairy[0] *= 2;
        res.insect[0] /= 2;
        res.psy[0] *= 2;
        res.rock[0] /= 2;
        res.dark[0] /= 2;
        res.flying[0] *= 2;
    }
    else if (type == "Dragon") {
        res.dragon[0] *= 2;
        res.water[0] /= 2;
        res.electrik[0] /= 2;
        res.fairy[0] *= 2;
        res.fire[0] /= 2;
        res.ice[0] *= 2;
        res.grass[0] /= 2;
    }
    else if (type == "Eau") {
        res.steel[0] /= 2;
        res.water[0] /= 2;
        res.electrik[0] *= 2;
        res.fairy[0] == 2;
        res.fire[0] /= 2;
        res.ice[0] /= 2;
        res.grass[0] *= 2;
    }
    else if (type == "Electrik") {
        res.steel[0] /= 2;
        res.electrik[0] /= 2;
        res.ground[0] *= 2;
        res.flying[0] /= 2;
    }
    else if (type == "Fée") {
        res.steel[0] *= 2;
        res.fighting[0] /= 2;
        res.dragon[0] = 0;
        res.insect[0] /= 2;
        res.poison[0] *= 2;
        res.dark[0] /= 2;
    }
    else if (type == "Feu") {
        res.steel[0] /= 2;
        res.water[0] *= 2;
        res.fairy[0] /= 2;
        res.fire[0] /= 2;
        res.ice[0] /= 2;
        res.insect[0] /= 2;
        res.grass[0] /= 2;
        res.rock[0] *= 2;
        res.ground[0] *= 2;
    }
    else if (type == "Glace") {
        res.steel[0] *= 2;
        res.fighting[0] *= 2;
        res.fire[0] *= 2;
        res.ice[0] /= 2;
        res.rock[0] *= 2;
    }
    else if (type == "Insecte") {
        res.fighting[0] /= 2;
        res.fire[0] *= 2;
        res.grass[0] /= 2;
        res.rock[0] *= 2;
        res.ground[0] /= 2;
    }
    else if (type == "Normal") {
        res.fighting[0] *= 2;
        res.ghost[0] = 0;
    }
    else if (type == "Plante") {
        res.water[0] /= 2;
        res.electrik[0] /= 2;
        res.fire[0] *= 2;
        res.ice[0] *= 2;
        res.insect[0] *= 2;
        res.grass[0] /= 2;
        res.poison[0] *= 2;
        res.ground[0] /= 2;
        res.flying[0] *= 2;
    }
    else if (type == "Poison") {
        res.fighting[0] /= 2;
        res.fairy[0] /= 2;
        res.insect[0] /= 2;
        res.grass[0] /= 2;
        res.poison[0] /= 2;
        res.psy[0] *= 2;
        res.ground[0] *= 2;
    }
    else if (type == "Psy") {
        res.fighting[0] /= 2;
        res.insect[0] *= 2;
        res.psy[0] /= 2;
        res.ghost[0] *= 2;
        res.dark[0] *= 2;
    }
    else if (type == "Roche") {
        res.steel[0] *= 2;
        res.fighting[0] *= 2;
        res.water[0] *= 2;
        res.fire[0] /= 2;
        res.normal[0] *= 2;
        res.grass[0] *= 2;
        res.poison[0] *= 2;
        res.flying[0] *= 2;
    }
    else if (type == "Sol") {
        res.water[0] *= 2;
        res.electrik[0] = 0;
        res.ice[0] *= 2;
        res.grass[0] *= 2;
        res.poison[0] /= 2;
        res.rock[0] /= 2;
    }
    else if (type == "Spectre") {
        res.fighting[0] = 0;
        res.insect[0] /= 2;
        res.normal[0] = 0;
        res.poison[0] /= 2;
        res.ghost[0] *= 2;
        res.dark[0] *= 2;
    }
    else if (type == "") {
        res.fighting[0] *= 2;
        res.fairy[0] *= 2;
        res.insect[0] /= 2;
        res.psy[0] = 0;
        res.ghost[0] /= 2;
        res.dark[0] /= 2;
    }
    else if (type == "Vol") {
        res.fighting[0] /= 2;
        res.electrik[0] *= 2;
        res.ice[0] *= 2;
        res.insect[0] /= 2;
        res.grass[0] /= 2;
        res.rock[0] *= 2;
        res.ground[0] = 0;
    }
    return res;
}