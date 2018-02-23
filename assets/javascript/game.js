var hermione = $("<button>");
hermione.addClass("contender gryffindor");
var granger = {
    health: 160,
    attack: 16,
    house: "Gryffindor"
};

var cedric = $("<button>");
cedric.addClass("contender hufflepuff");
var diggory = {
    health: 190,
    attack: 19,
    house: "Hufflepuff"
};

var luna = $("<button>");
luna.addClass("contender ravenclaw");
var lovegood = {
    health: 100,
    attack: 10,
    house: "Ravenclaw"
};

var draco = $("<button>");
draco.addClass("contender slytherin");
var malfoy = {
    health: 130,
    attack: 13,
    house: "Slytherin"
};

var characterHealth;
var characterAttack;
var baseAttack;
var opponentHealth;
var counterAttack;
var house;
var wins = 0;


    $("#instructions").html("Instructions");
    $("#lockhart, #attack, #restart").hide();
    $("#gryffindor").append(hermione);
    $("#hufflepuff").append(cedric);
    $("#ravenclaw").append(luna);
    $("#slytherin").append(draco);
    $("#step").html("Who will be our first Challenger?");
    $("#statsChar, #0statsOpp").empty();
   // $("#attack").hide();


    $("#instructions").on("click", function() {
        if ($("#lockhart:hidden").length){
            $("#lockhart").show();
            $("#instructions").html("Hide Instructions");
        }
        else if ($("#lockhart:visible").length){
            $("#lockhart").hide();
            $("#instructions").html("Instructions");
        }
    });

    $(".gryffindor").on("click", function() {
        if ( $('#champion').is(':empty') ) {
            $("#champion").append(hermione);
            characterHealth = granger.health;
            characterAttack = granger.attack;
            baseAttack = granger.attack;
            house = granger.house;
            $("#statsChar").html("Health: " + characterHealth + " Attack: " + baseAttack);
            $("#step").html("Ah! Hermione Granger from Gryffindor house. Excellent! Choose your first opponent.");
        }
        else if ( $('#opponent').is(':empty') ) {
            $("#opponent").append(hermione);
            opponentHealth = granger.health;
            counterAttack = granger.attack;
            $("#statsOpp").html("Health: " + opponentHealth + " Attack: " + counterAttack);
            $("#step").html("Wands at the ready? Cast your spells!");
            $("#attack").show();
        }
    });

    $(".hufflepuff").on("click", function() {
        if ( $('#champion').is(':empty') ) {
            $("#champion").append(cedric);
            characterHealth = diggory.health;
            characterAttack = diggory.attack;
            baseAttack = diggory.attack;
            house = diggory.house;
            $("#statsChar").html("Health: " + characterHealth + " Attack: " + baseAttack);
            $("#step").html("Ah! Cedric Diggory from Hufflepuff house. Excellent! Choose your first opponent.");
        }
        else if ( $('#opponent').is(':empty') ) {
            $("#opponent").append(cedric);
            opponentHealth = diggory.health;
            counterAttack = diggory.attack;
            $("#statsOpp").html("Health: " + opponentHealth + " Attack: " + counterAttack);
            $("#step").html("Wands at the ready? Cast your spells!");
            $("#attack").show();
        }
    });

    $(".ravenclaw").on("click", function() {

        if ( $('#champion').is(':empty') ) {
            $("#champion").append(luna);
            characterHealth = lovegood.health;
            characterAttack = lovegood.attack;
            baseAttack = lovegood.attack;
            house = lovegood.house;
            $("#statsChar").html("Health: " + characterHealth + " Attack: " + baseAttack);
            $("#step").html("Ah! Luna Lovegood from Ravenclaw house. Excellent! Choose your first opponent.");
        }
        else if ( $('#opponent').is(':empty') ) {
            $("#opponent").append(luna);
            opponentHealth = lovegood.health;
            counterAttack = lovegood.attack;
            $("#statsOpp").html("Health: " + opponentHealth + " Attack: " + counterAttack);
            $("#step").html("Wands at the ready? Cast your spells!");
            $("#attack").show();
        }
    });

    $(".slytherin").on("click", function() {

        if ( $('#champion').is(':empty') ) {
            $("#champion").append(draco);
            characterHealth = malfoy.health;
            characterAttack = malfoy.attack;
            baseAttack = malfoy.attack;
            house = malfoy.house;
            $("#statsChar").html("Health: " + characterHealth + " Attack: " + baseAttack);
            $("#step").html("Ah! Draco Malfoy from Slytherin house. Excellent! Choose your first opponent.");
        }
        else if ( $('#opponent').is(':empty') ) {
            $("#opponent").append(draco);
            opponentHealth = malfoy.health;
            counterAttack = malfoy.attack;
            $("#statsOpp").html("Health: " + opponentHealth + " Attack: " + counterAttack);
            $("#step").html("Wands at the ready? Cast your spells!");
            $("#attack").show();
        }
    });

    $("#attack").on("click", function() {
        characterHealth -= counterAttack;
        characterAttack += baseAttack;
        $("#statsChar").html("Health: " + characterHealth + " Attack: " + characterAttack);
        opponentHealth -= characterAttack;
        $("#statsOpp").html("Health: " + opponentHealth + " Attack: " + counterAttack);

        if (characterHealth < 1) {
            $("#champion").empty();
            $("#statsChar").empty();
            $("#step").html("It seems like our Challenger has run out of health. Better luck next time!");
            $("#attack").hide();
            $("#restart").show();
        }

        else {
            
            if (opponentHealth < 1) {
                $("#opponent").empty();
                $("#statsOpp").empty();
                $("#step").html("You won this round! Choose your next opponent.");
                wins++;
                $("#attack").hide();
            }
    
            if (wins === 3){
                $("#step").html("Congratulations! You are the Hogwarts Dueling Champion. Fifty points to " + house + "!");
                $("#attack").hide();
                $("#restart").show();
            }
        }

        
    });

    $("#restart").on("click", function() {
        location.reload();
    });