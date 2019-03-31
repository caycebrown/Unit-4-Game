//add click event for characters that will:
//append all other characters to the enemy bank div and assign them the attribute type=enemy
//move selected character to the your character column and assign attribut type=user



var x = new Audio('assets/CharacterSelect.mp3');
var y = new Audio('assets/HyruleCastle.mp3');
var z = new Audio('assets/ModerateHit.wav');
var x2 = new Audio('assets/HomeRun.wav');
var y2 = new Audio('assets/CrowdCheering.wav');
var z2 = new Audio('assets/ClickWhoosh.wav');

function audioPlay(a){
    a.play();
};

function audioOff(a){
    a.pause();
}


var getHero = function(){
    audioPlay(z2);
    $('#user').append(this);
    $('#user .character').addClass('hero');
    $('#enemy-bank').append('<h2 id="enemy-title">Choose Your<br/> Opponent</h2>');
    $('#enemy-bank').append($('#character-select .character'));
    $('#enemy-bank .character').removeClass('character').addClass('enemy');
    userHp = parseInt($(this).attr('hp'));
    userAtk = parseInt($(this).attr('attack'));
    $('#user-health').html('Health: ' + userHp);
    $('.hero').off('click', getHero);
    $('.enemy').off('click', getHero);
    $('.enemy').on('click', getEnemy);
};

$('#ready').on('click', function(){
    $('#character-select .character').on('click', getHero);
    audioPlay(x);
    $('#ready').remove();
    $('#logo').append('<h2>Choose Your Character</h2>');
})



var getEnemy = function(){
    audioPlay(z2);
    $('#current-enemy').append(this);
    $('#current-enemy .enemy').removeClass('enemy').addClass('fighting');
    enemyHp = parseInt($(this).attr('hp'));
    enemyAtk = parseInt($(this).attr('attack'));
    counter = parseInt($(this).attr('counter'));
    $('#enemy-health').html('Health: ' + enemyHp);
    $('.fighting').off('click', getEnemy);
    $('.enemy').off('click', getEnemy);
    audioOff(x);
    audioPlay(y);
    
};

$('#attack-button').on('click', function(){
    if ($('#current-enemy .fighting').length){
        audioPlay(z);
        enemyHp -= userAtk;
        userHp -= counter;
        $('#user-stats').html('<p>You lost ' + counter + ' health</p>' + '<p>You did ' + userAtk + ' damage</p>');
        $('#enemy-stats').html('<p>Opponent took ' + userAtk + ' damage</p>' + '<p>Opponent dealt ' + counter + ' counter damage</p>');
        $('#enemy-health').html('<p>Health: ' + enemyHp + '</p>');
        $('#user-health').html('<p>Health: ' + userHp + '</p>');
        userAtk += 6;
        if (enemyHp <= 0){
            audioPlay(x2);
            $('#current-enemy .fighting').remove();
            $('#enemy-stats').html('');
            $('#user-stats').html('');
            $('#enemy-health').html('<p>Health: 0</p>');
            $('#enemy-health').append('<h1>Game Set</h1>');
            $('.enemy').on('click', getEnemy);
            if ($('#enemy-bank .enemy').length == false){
                audioPlay(y2);
                $('#enemy-title').html('<h1>Victory!</h1>');
                $('#attack-button').off();
            }
        }else if (userHp <= 0){
            $('.hero').remove();
            $('#enemy-title').html('<h1>You Lost!</h1>');
            $('#attack-button').off();
        }
    }
})












