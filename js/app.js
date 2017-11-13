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
    playerName = $('#name').val();
    playerTwitter = $('#twitterhandle').val();
    playerZip = $('#zip_code').val();
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

  const tweetArray = [
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

  $('.game_bton').click(function grabclickID() {
    for (let i = 0; i < 1; i++) {
      clickArray.push(this.id);
    }
  });

  const clickCount = [];
  $('.game_bton').click(() => {
    for (let i = 0; i < tweetArray.length; i++) {
      clickCount.push('foo');
    }
  });

  const clickClength = clickCount.length;
  $('.game_bton').click(() => {
    if (clickClength === 10) {
      console.log('Thanks for playing!');
      $('.gamepage').hide();
      $('.finalpage').show();
    }
  });

  // I want this function here to unshift the tweet
  // w/ the class first_tweet into the tweetArray with an ID of real
  // triggering the below logic to mark it correct/incorrect.
  function changefirstTweet() {
    tweetArray.unshift($('.first_tweet'));
    $('.first_tweet').id('real');
  }

  function swapImage() {
    $('#tweet').attr('src', tweetArray[counter].url);
    counter++;
    const trueCounter = counter + 1;
    const lengthNumber = tweetArray.length + 1;
    $('.progress').text(`question ${trueCounter} ` + `out of ${lengthNumber}`);

    const score = [];
    for (let i = 0; i < tweetArray.length; i++) {
      if (tweetArray[i].id === clickArray[i]) {
        score.push('correct');
      }
    }
    $('.score').text(`current score is: ${score.length}`);
  }

  $('#real').click(changefirstTweet);
  $('#fake').click(changefirstTweet);
  $('#real').click(swapImage);
  $('#fake').click(swapImage);

  // this below is deprecated because I don't believe it's within the correct scope
  // const clickCount = [];
  // $('.game_bton').click(() => {
  //   for (let i = 0; i < 10; i++) {
  //     clickCount.push(1);
  //   }
  // });

  // const clickClength = clickCount.length;
  // $('.game_bton').click(() => {
  //   if (clickClength === 9) {
  //     console.log('Thanks for playing!');
  //     $('.gamepage').hide();
  //     $('.finalpage').show();
  //   }
  // });
});
