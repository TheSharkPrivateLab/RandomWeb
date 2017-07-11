function print(a) {console.log(a);}

function main() {
    var x = 1;
    var y = 1;
    var array = [1, 2];
    var stats = ["Speed", "Défense Spé","Attaque Spé","Défense","Attaque", "HP"];
    $("body").html($("body").html() + '<section class="pkmn">');
    $("body").html($("body").html() + '<p class="div">Image</p>');
    $("body").html($("body").html() + '<p class="div">ID</p>');
    $("body").html($("body").html() + '<p class="div">Nom</p>');
    array.forEach(function (type) {
        $("body").html($("body").html() + '<p class="div">Type '+y+'</p>');
        y++;
    });
    y = 1;
    array.forEach(function (ability) {
        $("body").html($("body").html() + '<p class="div">Type ' + y + '</p>');
        y++;
    });
    $("body").html($("body").html() + '<p class="div">Moves</p>');
    stats.forEach(function (stat) {
        $("body").html($("body").html() + '<p class="div">' + stat + '</p>');
    })
    $("body").html($("body").html() + '</section>');
    while (x < 7) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://pokeapi.co/api/v2/pokemon/' + x + '/', false);
        xhr.send();
        var myJSON = xhr.responseText;
        var pokemon = JSON.parse(myJSON);

        console.log(pokemon);
        $("body").html($("body").html() + '<section class="pkmn">');
        $("body").html($("body").html() + '<img class="div" src="' + pokemon.sprites.front_default + '"></img>');
        $("body").html($("body").html() + '<p class="div">' + pokemon.id + '</p>');
        $("body").html($("body").html() + '<p class="div">' + pokemon.name + '</p>');
        pokemon.types.forEach(function (type) {
            $("body").html($("body").html() + '<p class="div">' + type.type.name + '</p>');
        });
        pokemon.abilities.forEach(function (ability) {
            $("body").html($("body").html() + '<p class="div">' + ability.ability.name + '</p>');
        });
        $("body").html($("body").html() + '<input class="div" list="div-' + pokemon.name + '">');
        $("body").html($("body").html() + '<datalist id="div-'+pokemon.name+'"></datalist>');
        pokemon.moves.forEach(function (move) {
            $("#div-" + pokemon.name).html($("#div-" + pokemon.name).html() + '<option value="' + move.move.name + '"></option>');
        });
        pokemon.stats.forEach(function (stat) {
            $("body").html($("body").html() + '<p class="div">' + stat.base_stat+ '</p>');
        })
        $("body").html($("body").html() + '</section>');
        x++;
    }
}