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
    console.log(this.id);
    for (let i = 0; i < 1; i++) {
      clickArray.push(this.id);
    } console.log(clickArray);
  });

  function getImage() {
    $('#tweet').attr('src', tweetArray[counter].url);
    counter++;
    const trueCounter = counter + 1;
    const length = tweetArray.length + 1;
    const currentScore = counter + 1;
    $('.progress').text(`question ${trueCounter} ` + `out of ${length}`);
    $('.score').text(`current score is: ${currentScore}`);

    const realSelection = document.querySelector('#real').innerHTML;
    const fakeSelection = document.querySelector('#fake').innerHTML;
    const firstTweet = 'real';
    const secondTweet = tweetArray[0].value;
    const thirdTweet = tweetArray[1].value;
    const fourthTweet = tweetArray[2].value;
    const fifthTweet = tweetArray[3].value;
    const sixthTweet = tweetArray[4].value;
    const seventhTweet = tweetArray[5].value;
    const eighthTweet = tweetArray[6].value;
    const ninthTweet = tweetArray[7].value;
    const tenthTweet = tweetArray[8].value;


    if (clickArray[0] === firstTweet) { console.log('question 1 is correct!'); } else
    { console.log ('question 1 is incorrect!'); }

    if (clickArray[1] === secondTweet) { console.log('questoin 2 is correct!'); } else
    { console.log ('questoin 2 is incorrect!'); }


         // (clickArray[0] !== firstTweet) { console.log('question 1 is incorrect!'); } else if
         // (clickArray[1] === secondTweet) { console.log('question 2 is correct!'); } else if
         // (clickArray[1] !== secondTweet) { console.log('question 2 is incorrect!'); }
      // if (clickArray[1] === secondTweet) { console.log('question 2 is correct!'); } else { console.log('question 2 is incorrect!'); }
      // (fakeSelection && counter === 0)
      // else if (
      //   fakeSelection && counter === 1) { console.log('question 2 is correct'); } else if (
      //   realSelection && counter ===1) { console.log('question 2 is incorrect'); }
      // (fakeSelection && counter === 1) { console.log('question 1 is incorrect'); } else if
      // (fakeSelection && counter === 2) { console.log('question 2 is correct'); } else if
      // (realSelection && counter === 2) { console.log('question 2 is incorrect'); }
    }

  $('#real').click(getImage);
  $('#fake').click(getImage);
});

