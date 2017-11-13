/* eslint-env browser, jquery */

//  the below are global variables I will amend with user entries in the forms page

let playerName = null;
let playerTwitter = null;
let playerZip = null;

//  the below click function will hide all the section classes that are not yet in action until, if ever, we get to it based on the corresponding click events
//  this was my low-brow way of handling multiple html pages by showing/hiding different section classes. this was excellent practice for click event "toggles"
//  line 29 was originally a "won't do" feature that i decided to tackle to give me some more jQuery beefiness in what was an otherwise straightforward game
//  what line 29 does is disable my submit button unless i had entered information in all three of my form fields. not a bad feature all things considered.
//  for the #btontwo click starting at line 38, there I reassign some DOM elements with user inputs for name, twitter handle, and zip code, for which only name i will use later on in the game.

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

    // form validation
    if ($('.row').val() === '') { $('#btontwo').attr('disabled', true); }
    $('.row').keyup(() => {
      if (($('#name').val() !== '') &&
           ($('#twitterhandle').val() !== '') &&
           ($('#zip_code').val() !== '')
      ) { $('#btontwo').attr('disabled', false); } else { $('#btontwo').attr('disabled', true); }
    });
  });

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
    gamePlay();
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

  //  the above array has a url of the tweet image, a boolean t/f value which I would like to use in future iterations, and an id [see below]
  //  the tweet id here will be used to match against a button's id that the user selected, determining whether the selection was correct or incorrect

  //  this will count the nth number of tweet I am currently playing and displaying
  let tweetCounter = 0;

  //  this is an empty array I will push in the id of the button I am playing which I will then use to match against the id of the tweet
  const clickArray = [];

  //  starting at 0, which I will increment up for every click, and then kill the game once I've hit the 10th click
  let clickCount = 0;

  //  in this click event on the class of game button, which represents both options the user could click to log a response, I will be grabbing and manipulating a series of information
  //  for one, I will be grabbing the id of the button to match against the id of the tweet for logging purposes

  $('.game_bton').click((e) => {
    clickArray.push(e.target.id);
    clickCount++;

    //  in addition, given the number of clicks I am on, I will also trigger the eventual winning event to finalize the game. ideally i would like to move this function elsewhere along with the click(gamePlay) functionality

    if (clickCount === 10) {
      console.log('Thanks for playing!');
      $('.gamepage').hide();
      $('.finalpage').show();
    }
  });

  //  this is a rather bloated function, which does the following:

  function gamePlay(event) {
    if ('url' in tweetArray[tweetCounter]) { //  guards against going too far in the number of clicks so that there is no log of a click against an item in an array that does not exist
      $('#tweet').attr('src', tweetArray[tweetCounter].url); // swaps the image of a tweet based on the tweetCounter position

      $('.progress').text(`question ${tweetCounter + 1} ` + `out of ${tweetArray.length}`);
      tweetCounter++; // adds to the DOM the current position of the game the user is in

      //  within the same function bloated function in need of a refactoring, as i loop through the length of my array, i stash the matches of the id's of the tweet and click's id
      //  if there is a match, the we increment the variable for score with a point

      let score = 0; // here i start with a blank score which i will continuously add to through the below for loop
      for (let i = 0; i < tweetArray.length; i++) {
        if (tweetArray[i].id === clickArray[i]) {
          score++;
        }
      }
      $('.score').text(`current score is: ${score}`); //  additionally, we throw the current score on the game page
      $('#scored').text(`your score was ${score} out of ${tweetArray.length}! thanks for playing, ${playerName}!`); //  and finally we know to update the final page with the score's final tally
    }
  }

  $('#real').click(gamePlay); //  this is to call the gamePlay function
  $('#fake').click(gamePlay); //  this is to call the gamePlay function

});
