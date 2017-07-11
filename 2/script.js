function player(nick, score, CD, DPS) {
    this.nick = nick;
    this.score = score;
    this.CD = CD;
    this.DPS = DPS;
    this.win = false;
}

function toInt(n) { return Math.round(Number(n)); };

function shopItem(name, price, dps, cd) {
    this.name = name;
    this.price = price;
    this.DPS = dps;
    this.CD = cd;
}

function buySomething(P1, id, shopArr) {
    const regex = /\w*$/g;
    var itemName = regex.exec(id)[0];
    var x = 0;
    while (shopArr[x].name != itemName && x < shopArr.length) {
        x++;
    }
    if (itemName !== undefined) 
    {
        if (P1.score >= shopArr[x].price)
        {
            P1.score -= shopArr[x].price;
            P1.DPS += shopArr[x].DPS;
            P1.CD += shopArr[x].CD;
        }
    }
    $("#score").html(P1.score);
}

function dps(P1) {
    P1.score += P1.DPS;
    $("#score").html(P1.score);
    if (P1.score >= 1000000 && P1.win == false) {
        P1.win = true;
        alert("VOUS AVEZ GAGNÉ !! VOUS AVEZ VOTRE BAC.");
    }
}

function click(P1) {
    P1.score = P1.score + P1.CD;
    $("#score").html(P1.score);
}

function clickCheat(P1) {
    P1.score = P1.score + P1.CD*100;
    $("#score").html(P1.score);
}