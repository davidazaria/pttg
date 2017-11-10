/* eslint-env browser, jquery */
$(() => {
  console.log('Ready for Trump Tweets!');
  $('.formpage').hide();
  $('.instructionpage').hide();
  $('.gamepage').hide();
  $('.first_tweet').hide();
  $('.second_tweet').hide();
  $('.third_tweet').hide();
  $('.fourth_tweet').hide();
  $('.fifth_tweet').hide();
  $('.sixth_tweet').hide();
  $('.seventh_tweet').hide();
  $('.eighth_tweet').hide();
  $('.ninth_tweet').hide();
  $('.tenth_tweet').hide();
  $('.finalpage').hide();

  $('#btonone').click(() => {
    console.log('Welcome to the form page!');
    $('.homepage').hide();
    $('.formpage').show();
  });

  $('#btontwo').click(() => {
    console.log('Welcome to the intructions page!');
    $('.formpage').hide();
    $('.instructionpage').show();
  });

  $('#btonthree').click(() => {
    console.log('Welcome to the game page!');
    $('.instructionpage').hide();
    $('.gamepage').show();
    $('.first_tweet').show();
  });
//make this an object with url, id, true/false values.

let tweetArray = [
        { url: 'http://bit.ly/2zx2LCj', value: false },
        { url: 'http://bit.ly/2zwJe4R', value: false },
        { url: 'http://bit.ly/2m9LVnS', value: true },
        { url: 'http://bit.ly/2yrdI57', value: true },
        { url: 'http://bit.ly/2jfkWqa', value: false },
        { url: 'http://bit.ly/2AwxihD', value: true },
        { url: 'http://bit.ly/2iKcriT', value: false },
        { url: 'http://bit.ly/2mbrcjH', value: false },
        { url: 'http://bit.ly/2zxeyyr', value: true },
  ];
let counter = 0;

$('#real').click(getImage);
$('#fake').click(getImage);

function getImage () {
  $('#tweet').attr("src", tweetArray[counter].url);
  counter ++;
};

    // <img src="http://bit.ly/2zx2LCj" class="second_tweet tweet" id="hamis_tweet"/>
    // <img src="http://bit.ly/2zwJe4R" class="third_tweet tweet" id="hamis_tweet"/>
    // <img src="http://bit.ly/2m9LVnS" class="fourth_tweet tweet" id="igaz_tweet"/>
    // <img src="http://bit.ly/2yrdI57" class="fifth_tweet tweet" id="igaz_tweet"/>
    // <img src="http://bit.ly/2jfkWqa" class="sixth_tweet tweet" id="hamis_tweet"/>
    // <img src="http://bit.ly/2AwxihD" class="seventh_tweet tweet" id="igaz_tweet"/>
    // <img src="http://bit.ly/2iKcriT" class="eighth_tweet tweet" id="hamis_tweet"/>
    // <img src="http://bit.ly/2mbrcjH" class="ninth_tweet tweet" id="hamis_tweet"/>
    // <img src="http://bit.ly/2zxeyyr" class="tenth_tweet tweet" id="igaz_tweet"/>

  // $('.game_bton').click(() => {
  //   console.log('Welcome to the game page!');
  //   $('.gamepage').show();
  //   $('.first_tweet').hide();
  //   $('.second_tweet').show();
  // });

  // $('.game_bton').click(() => {
  //   console.log('Welcome to the game page!');
  //   $('.gamepage').show();
  //   $('.second_tweet').hide();
  //   $('.third_tweet').show();
  // });

  // $('.game_bton').click(() => {
  //   console.log('Welcome to the game page!');
  //   $('.gamepage').show();
  //   $('.third_tweet').hide();
  //   $('.fourth_tweet').show();
  // });

  // $('.game_bton').click(() => {
  //   console.log('Welcome to the game page!');
  //   $('.gamepage').show();
  //   $('.fourth_tweet').hide();
  //   $('.fifth_tweet').show();
  // });

  // $('.game_bton').click(() => {
  //   console.log('Welcome to the game page!');
  //   $('.gamepage').show();
  //   $('.fifth_tweet').hide();
  //   $('.sixth_tweet').show();
  // });

  // $('.game_bton').click(() => {
  //   console.log('Welcome to the game page!');
  //   $('.gamepage').show();
  //   $('.sixth_tweet').hide();
  //   $('.seventh_tweet').show();
  // });

  // $('.game_bton').click(() => {
  //   console.log('Welcome to the game page!');
  //   $('.gamepage').show();
  //   $('.seventh_tweet').hide();
  //   $('.eighth_tweet').show();
  // });

  // $('.game_bton').click(() => {
  //   console.log('Welcome to the game page!');
  //   $('.gamepage').show();
  //   $('.eighth_tweet').hide();
  //   $('.ninth_tweet').show();
  // });

  // $('.game_bton').click(() => {
  //   console.log('Welcome to the game page!');
  //   $('.gamepage').show();
  //   $('.ninth_tweet').hide();
  //   $('.tenth_tweet').show();
  // });

});

