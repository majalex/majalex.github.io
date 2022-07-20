$(document).ready(function () {

    $('button').click(function(){

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php').done(function (data) {

            let person = (`${data.imie} ${data.nazwisko},  ${data.zawod} w ${data.firma}`)
    
            $('#dane-programisty').text(person);
        });
    })
});