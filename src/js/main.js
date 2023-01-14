import $ from './lib/lib';

// console.log($('div'));
// $('.active').hide();
// $('.active').hide().show();
// $('.active').toggle();
// Добавление классов
// $('.active').addClass('hello', 'world');
// Удаление классов
// $('.active').removeClass('hello', 'world');
// toggle 
// $('.active').toggleClass('hello');
// $('.active').toggleClass('world');

// $('.active').on('click', hello);
// $('.active').off('click', hello);

// $('.active').click(hello);

// function hello(){
//     console.log('hello');
// }

// $('button').on('click', function() {
//     $(this).toggleClass('active');
// });

// // console.log($('button').html());
// console.log($('button').layout('hello'));

$('button').on('click', function() {
    $('div').listElement(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

console.log($('div').listElement(2).find('.some'));