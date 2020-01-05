
$(document).ready(function () {
    // Dark mode enable
    $("#darkMode").click(function () {
        $('body').removeClass('light-mode');
        $('.jumbotron').removeClass('light-mode');
        $('body').addClass('dark-mode');
        $('.jumbotron').addClass('dark-mode');

    });

    // Light Mode enable
    $("#lightMode").click(function () {
        $('body').removeClass('dark-mode');
        $('.jumbotron').removeClass('dark-mode');
        $('body').addClass('light-mode');
        $('.jumbotron').addClass('light-mode');

    });

    var target = 0;
    var score = 0;
    var win = 0;
    var loss = 0;
    //Function to generate a random target number

    var rNum = function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    crystal1 = rNum(1, 12);
    crystal2 = rNum(1, 12);
    crystal3 = rNum(1, 12);
    crystal4 = rNum(1, 12);


    $("#playGame").click(function () {
        $("#target").empty();
        target = rNum(19, 120);
        $('#target').append(target);
    });

    $("#reset").click(function () {
        target = 0;
        score = 0;
        win = 0;
        loss = 0;
        $("#target").empty();
        $(".score").empty();
        $("#win").text("Won : 0");
        $("#win").text("Lost : 0");
        alert ("Game Over! Restart!");
    });

    var replay = function () {
        $("#target").empty();
        $(".score").empty();
    };
    
    var getNum = function () {
    };
    var success = function () {
        if (target === 0) {
            alert ("Press the Play Button");
        }
        else if (target > score) {
            $(".score").text(score);
        }
        else if (target === score) {
            $(".score").text(score);
            win++;
            $("#win").text(" Won : " + win);
            replay();
        }
        else {
            loss++;
            $("#loss").text(" Lost : " + loss);
            replay();
        }
    };
    $("#crystal1").click(function () {
        getNum(crystal1);
        score = score + crystal1;
        success();
    });

    $("#crystal2").click(function () {
        getNum(crystal2);
        score = score + crystal2;
        success();
    });

    $("#crystal3").click(function () {
        getNum(crystal3);
        score = score + crystal3;
        success();
    });

    $("#crystal4").click(function () {
        getNum(crystal4);
        score = score + crystal4;
        success();
    });


});