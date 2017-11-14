# President Trump Twitter Game ("PTTG") - David Azaria / November 2017

## What is PTTG?

I am probably seen as a problem for Twitter. Like a monsterous percentage of their users (% here TK), I do not Tweet very often, but yet, I consume a heckuva lot of content through their free platform. Of the percentage of their user population who do produce Tweets, one is our current president, Donald J. Trump, aka @realDonaldTrump. 

Plenty has been written about President Trump's prolific Twitter presence, and I will not attempt to distill all of those insights here. However, I will say that with its prolific nature, Trump's Twitter feed is a never-ending well of content, opinions, thoughts, (certainly) feelings, and, more importantly, a rare peak into the psyche of one of the world's most powerful people. 

As more Americans today consume their news through social media and digital means than ever before - a number that will certainly only continue to rise - we are constantly, for better or worse, made privvy to the thoughts and feelings of our current president. Even more has been written about President Trump's idiolect - the lexical and grammatical formation of his sentences. Chances are you, too, have tried impersonating his speech patterns. 

So what is the President Trump Twitter Game ("PTTG")? Well, for one, it is _not_ sponsored by Twitter; let's get that out of the way. Nor is it sponsored by the current administration. But what it is is a, perhaps only at the present momet, feeble attempt to highlight our ability to discern: real from fake; true from false; bias from knowledge. 

This is not a political statement. In truth, I do not want it to be. What I do want this to be is, first, fun. Second, I would like for this to be both exploratory and informative of the limits of what we might believe to be true. There is no fancy data science, Markov chain powered bot behind this game like there might be elsewhere, e.g. https://filiph.github.io/markov/ - it is just a mix of real President Trump Tweets and ones I've composed myself. 

With that, give it a go. Run through ten Tweets and see if you can spot which are real and fake. At the end of the game I will provide a score. Future iterations might include some more fancy bells and whistles, but at the moment I am supremely limited in my depth of programmatic languages. Stay tuned for more robust features.   

## My wireframe

Wireframe can be found in the project repo, file labeled "Donald Trump - Twitter Project 1.pdf".

## My initial thoughts on game structure

In the initial concept phase, the game included: a landing/home page; a page to collect someone's information; a brief(er) description of how the game works; a series of Tweets to click through; and finally a score/closing page. Some challenges were initially thought to be: linking a series of HTML pages together; CSS'ing the heck out of the page to appear somewhat decent; collecting progress and the display of correct Real and Fake; and not getting too tripped up in the code. 

## How it works

In short, the game is rather boilerplate HTML, CSS, JavaScript with the inclusion of jQuery to manipulate not only my DOM but the gameplay itself. Almost every piece of functionality I wanted to set out to complete was completed save for the unnecessary stitching of multiple HTML files; I used section classes and .hide's and.show's to toggle between div's based on user clicks. This presents a more seamless and code-friendly environment, in my opinion.

Otherwise, the basic breakdown is that of a homescreen with an embedded .gif; a form page that must take in information in every field; a brief primer on the game itself; and then the click throughs on the game followed by a score page at the end. 

The mechanics of the array set up, click functions/event listeners, and other scoring functions are in need of a refactor to better accommodate future iterations on the game -- something I intend to do. Otherwise, I'm happy to report the game works, is fun (try it out!), and can be used as a fun launchpad for future installations on the series!

## Phases to completion

Phase 1: Wireframming and story writing. **Due Thursday November 9** **COMPLETE**

Phase 2: Minimum viable product, which will consist of a Real & Fake button with an image. **Due Friday November 10** **COMPLETE**

Phase 3: HTML/CSS/Javascript writing. **Due Saturday November 11** **COMPLETE**

Phase 4: Feature writing. **Due Sunday November 12** **COMPLETE**

Phase 5: Feature writing and bugs. **Due Monday November 13** **COMPLETE**

**Presentation** **Tuesday November 14**

## Links and Resources

Here is a link to a similar - yet different - quiz on Sporcle: https://www.sporcle.com/games/zigga/trump-tweets

And here is a link to a more robust Trump Tweet producer using Markov chains: https://filiph.github.io/markov/

I tackled a form validation feature with the help of MDN: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation

Here is the game on BitBalloon http://attorney-minimums-63843.bitballoon.com/
