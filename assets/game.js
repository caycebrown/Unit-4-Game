//add click event for characters that will:
//append all other characters to the enemy bank div and assign them the attribute type=enemy
//move selected character to the your character column and assign attribut type=user



/*
$('.character').on('click', function(){
    $('#user').append(this);
    $('#user .character').addClass('fighter');
    $('#enemy-bank').append($('#character-select .character'));
    $('#enemy-bank .character').removeClass('character').addClass('enemy');
    userHp = parseInt($(this).attr('hp'));
    userAtk = parseInt($(this).attr('attack'));
    $('.enemy').off();
});

$('.enemy').on('click', function(){
    $('#current-enemy').append(this);
    $('#current-enemy .enemy').addClass('fighting');
    enemyHp = parseInt($(this).attr('hp'));
    enemyAtk = parseInt($(this).attr('attack'));
    counter = parseInt($(this).attr('counter'));
})
*/

var getHero = function(){
    $('#user').append(this);
    $('#user .character').addClass('hero');
    $('#enemy-bank').append($('#character-select .character'));
    $('#enemy-bank .character').removeClass('character').addClass('enemy');
    userHp = parseInt($(this).attr('hp'));
    userAtk = parseInt($(this).attr('attack'));
    $('.enemy').off('click', getHero);
    $('.enemy').on('click', getEnemy);
};

$('#character-select .character').on('click', getHero);


var getEnemy = function(){
    $('#current-enemy').append(this);
    $('#current-enemy .enemy').removeClass('enemy').addClass('fighting');
    enemyHp = parseInt($(this).attr('hp'));
    enemyAtk = parseInt($(this).attr('attack'));
    counter = parseInt($(this).attr('counter'));
    $('.enemy').off('click', getEnemy);
    
};












