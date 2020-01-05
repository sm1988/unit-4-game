
$(document).ready(function () {
    // Dark mode enable
    $("#darkMode").click(function () {
        $('#bg').addClass('.dark-mode');
    });

    //Function to generate a random target number

    var rNum = function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    crystal1 = rNum(1, 12);
    crystal2 = rNum(1, 12);
    crystal3 = rNum(1, 12);
    crystal4 = rNum(1, 12);


    $("#playGame").click(function () {
        target = rNum(19, 120);
        $('#target').append(target);
        var score = 0;
        $('.score').append(score);
    });

    var score = 0;
    var getNum = function () {
    };

    $("#crystal1").click(function () {
        getNum(crystal1);
        score = score + crystal1;
        $(".score").text(score);
    });

    $("#crystal2").click(function () {
        getNum(crystal2);
        score = score + crystal2;
        $(".score").text(score);
    });

    $("#crystal3").click(function () {
        getNum(crystal3);
        score = score + crystal3;
        $(".score").text(score);
    });

    $("#crystal4").click(function () {
        getNum(crystal4);
        score = score + crystal4;
        $(".score").text(score);
    });


});