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

  $('.game_bton').click(() => {
    console.log('Welcome to the game page!');
    $('.gamepage').show();
    $('.first_tweet').hide();
    $('.second_tweet').show();
  });

  //look into slider for this
  $('.game_bton').click(() => {
    console.log('Welcome to the game page!');
    $('.gamepage').show();
    $('.second_tweet').hide();
    $('.third_tweet').show();
  });

  $('.game_bton').click(() => {
    console.log('Welcome to the game page!');
    $('.gamepage').show();
    $('.third_tweet').hide();
    $('.fourth_tweet').show();
  });

  $('.game_bton').click(() => {
    console.log('Welcome to the game page!');
    $('.gamepage').show();
    $('.fourth_tweet').hide();
    $('.fifth_tweet').show();
  });

  $('.game_bton').click(() => {
    console.log('Welcome to the game page!');
    $('.gamepage').show();
    $('.fifth_tweet').hide();
    $('.sixth_tweet').show();
  });

  $('.game_bton').click(() => {
    console.log('Welcome to the game page!');
    $('.gamepage').show();
    $('.sixth_tweet').hide();
    $('.seventh_tweet').show();
  });

  $('.game_bton').click(() => {
    console.log('Welcome to the game page!');
    $('.gamepage').show();
    $('.seventh_tweet').hide();
    $('.eighth_tweet').show();
  });

  $('.game_bton').click(() => {
    console.log('Welcome to the game page!');
    $('.gamepage').show();
    $('.eighth_tweet').hide();
    $('.ninth_tweet').show();
  });

  $('.game_bton').click(() => {
    console.log('Welcome to the game page!');
    $('.gamepage').show();
    $('.ninth_tweet').hide();
    $('.tenth_tweet').show();
  });

});

