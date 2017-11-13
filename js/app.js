/* eslint-env browser, jquery */

//  the below are global variables I will amend with user entries in the forms page

let playerName = null;
let playerTwitter = null;
let playerZip = null;

//  the below click function will start the game
//  what this does in essence is showing certain section classes while hiding others
//  so for each click based on a button's id, it will hide/show certain sections

$(() => {
  console.log('Ready for Trump Tweets!');
  $('.formpage').hide();
  $('.instructionpage').hide();
  $('.gamepage').hide();
  $('.first_tweet').hide();
  $('.finalpage').hide();

  $('#btonone').click(() => {
    console.log('Welcome to the form page!');
    $('.homepage').hide();
    $('.formpage').show();
  });

  //  on this click function, we will be displaying the user's name, twitter handle, and zip code in the console log, proving the user entry into the form worked!

  $('#btontwo').click(() => {
    console.log('Welcome to the intructions page!');
    playerName = $('#name').val();
    playerTwitter = $('#twitterhandle').val();
    playerZip = $('#zip_code').val();
    $('.formpage').hide();
    $('.instructionpage').show();
  });

  $('#btonthree').click(() => {
    console.log(`Welcome to the game page, ${playerName}!`);
    $('.instructionpage').hide();
    $('.gamepage').show();
    swapImage();
    $('.first_tweet').show();
  });

  //  the below is the core of the game functionality, starting with an array of tweets

  const tweetArray = [
    { url: 'http://bit.ly/2zxNoHQ', value: false, id: 'real' },
    { url: 'http://bit.ly/2zx2LCj', value: false, id: 'fake' },
    { url: 'http://bit.ly/2zwJe4R', value: false, id: 'fake' },
    { url: 'http://bit.ly/2m9LVnS', value: true, id: 'real' },
    { url: 'http://bit.ly/2yrdI57', value: true, id: 'real' },
    { url: 'http://bit.ly/2jfkWqa', value: false, id: 'fake' },
    { url: 'http://bit.ly/2AwxihD', value: true, id: 'real' },
    { url: 'http://bit.ly/2iKcriT', value: false, id: 'fake' },
    { url: 'http://bit.ly/2mbrcjH', value: false, id: 'fake' },
    { url: 'http://bit.ly/2zxeyyr', value: true, id: 'real' }];

  //  the above array has a url of the tweet image, a boolean t/f value, and an id
  //  the tweet id here will be used to match against a button's id that the user selected, determining whether the selection was correct or incorrect

  let counter = 0;
  const clickArray = [];
  let clickCount = 0;

  $('.game_bton').click((e) => {
    clickArray.push(e.target.id);
    clickCount++;
    if (clickCount === 10) {
      console.log('Thanks for playing!');
      $('.gamepage').hide();
      $('.finalpage').show();
    }
  });

  function swapImage() {
    if (tweetArray.url !== 'undefined') {
      $('#tweet').attr('src', tweetArray[counter].url);
      $('.progress').text(`question ${counter + 1} ` + `out of ${tweetArray.length}`);
      counter++;

      let score = 0;
      for (let i = 0; i < tweetArray.length; i++) {
        if (tweetArray[i].id === clickArray[i]) {
          score++;
        }
      }
      $('.score').text(`current score is: ${score}`);
      $('#scored').text(`your score was ${score} out of ${tweetArray.length}! thanks for playing, ${playerName}!`);
    }
  }

  $('#real').click(swapImage);
  $('#fake').click(swapImage);
});
