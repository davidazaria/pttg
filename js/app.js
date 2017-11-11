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

  // this is my initial log-in function

  $('#btonone').click(() => {
    console.log('Welcome to the form page!');
    $('.homepage').hide();
    $('.formpage').show();
  });

  // click function toggling between my different pages

  $('#btontwo').click(() => {
    console.log('Welcome to the intructions page!');
    $('.formpage').hide();
    $('.instructionpage').show();
  });

  // click function toggling between my different pages

  $('#btonthree').click(() => {
    console.log('Welcome to the game page!');
    $('.instructionpage').hide();
    $('.gamepage').show();
    $('.first_tweet').show();
  });

  // the below function will display a subsequent tweet when a click event occurs
  // the tweets are stored in an array.
  // will swap out the img_src for the one hard-coded into the index.HTML file.

  function gamePlay() {
    const tweetArray = [
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

    function getImage() {
      $('#tweet').attr('src', tweetArray[counter].url);
      counter++;
      console.log(counter);
    }

    $('#real').click(getImage);
    $('#fake').click(getImage);
  }
  gamePlay();
});
