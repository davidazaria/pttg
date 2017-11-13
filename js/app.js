/* eslint-env browser, jquery */
let playerName = null;
let playerTwitter = null;
let playerZip = null;

$(() => {
  console.log('Ready for Trump Tweets!');
  $('.formpage').hide();
  $('.instructionpage').hide();
  $('.gamepage').hide();
  $('.first_tweet').hide();
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
    playerName = $('#name').val();
    playerTwitter = $('#twitterhandle').val();
    playerZip = $('#zip_code').val();
    $('.formpage').hide();
    $('.instructionpage').show();
  });

  // click function toggling between my different pages

  $('#btonthree').click(() => {
    console.log(`Welcome to the game page, ${playerName}!`);
    $('.instructionpage').hide();
    $('.gamepage').show();
    swapImage();
    $('.first_tweet').show();
  });

  // the below function will display a subsequent tweet when a click event occurs
  // the tweets are stored in an array.
  // will swap out the img_src for the one hard-coded into the index.HTML file.

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
    if (tweetArray.url !== null) {
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
    }
  }

  $('#real').click(swapImage);
  $('#fake').click(swapImage);
});
