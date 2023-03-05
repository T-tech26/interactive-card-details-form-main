# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/My%20Frontend%20Mentor%20Interactive%20card%20details%20form%20solution.png)

### Links

- Solution URL: [Add solution URL here](https://t-tech26.github.io/interactive-card-details-form-main/)
- Live Site URL: [Add live site URL here](https://t-tech26.github.io/interactive-card-details-form-main/)

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Javascript
- ECMAScript 6 Standards

### What I learned

The project was majorly a beginners level project, but it was interesting, the stuff I really learned from this project was in the javascript, where I had to make research on how i could validate my credit card number format with a regular expression, with some string and array methods which I knew but learnt how to work with it in slightly different way, aside from that all other stuffs were just stuffs i knew already but still it came a bit more like a challenge so i guess, going through what i knew did taught me some thing.

```js
function addSpace() {
  let cardNumberInput = document.querySelector('#number');

  //Adding a keyup event to detect the key is been released so to add the space if it is up to 4 digits
  cardNumberInput.addEventListener('keyup', function(e) {
    //Assigning the input value to a variable
    let inpVal = cardNumberInput.value;

    /*I don't understand this line of code lol, because i took the whole function code from online
    But i believe it's replacing the value gotten with a empty string then will try and get the substring of any new value coming in
    */
    let cardCode = inpVal.replace(/\s/g, '').substring(0, 16);

    /*Then here it will now compare the cardCode value which is an empty string now then check if the value is no long empty, so if not the match the regexp which is at every 1 to 4 digit add a space, then returning the value of the cardCde back to the input field.
    which is, in every 4 digit we type the function will basically update our input values with the space
    */
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join(' ') : ' ';
    cardNumberInput.value = cardCode;
  })
}
```

It's just a function to add space to my credit card number, validate the format at which it is entered

### Continued development

I will really want to be focusing on 
- DOM manipulations to be able to get full control over the DOM
- Server side scripting with node js and express
- React js for more dynamic DOM manipulations
- APIs
- Server requests with Ajax or fetch api


### Useful resources

- [Example resource 1](https://codereview.stackexchange.com/questions/261287/how-to-make-my-code-shorter-this-code-formats-credit-card-number-vanilla-js) - This helped me for my credit card formating, it is where I saw the importants of regular expressions. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@T-tech26](https://www.frontendmentor.io/profile/T-tech26)
- LinkedIn - [@tariladei-doutua](https://www.linkedin.com/in/tariladei-doutua-109059226)
- Twitter - [@TariDoutua](https://twitter.com/TariDoutua/status/1630022392075395072)