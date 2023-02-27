/*This load event was call to add a focus border on the input field reason being that, as the border has a gradient color, it can be added to the input field but can't add a border radius, reasons are better explained the css file
A parent element was used logically to display a focus border and invalid border through it background color
*/
document.addEventListener('load', loadFocus, true);

//The function call
function loadFocus() {
  //Getting all input fields
  let nameInput = document.querySelector('#card-holder');
  let numberInput = document.querySelector('#number');
  let monthInput = document.querySelector('#month');
  let yearInput = document.querySelector('#year');
  let cvcInput = document.querySelector('#cvc');

  //Adding the focus event listener to the input fields
  nameInput.addEventListener('focus', focusName, true);
  numberInput.addEventListener('focus', focusNumber, true);
  monthInput.addEventListener('focus', focusMonth, true);
  yearInput.addEventListener('focus', focusYear, true);
  cvcInput.addEventListener('focus', focusCvc, true);

  //Just assigned the gradient color to a variable
  let color = 'linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%))';
  
  //Calling each focus event listener functions
  function focusName() {
    /*Setting the background color of the input parent element to the gradient color while removing it from all others.
    This is because if other input fields are focused and the user focus on another, then the rest of it should not be focused again.
    If done in css that will be his default behavior
    */
    nameInput.parentElement.style.background = color;
    cvcInput.parentElement.style.background = '';
    yearInput.parentElement.style.background = '';
    monthInput.parentElement.style.background = '';
    numberInput.parentElement.style.background = '';
  }
  
  function focusNumber() {
    numberInput.parentElement.style.background =color;
    nameInput.parentElement.style.background = '';
    cvcInput.parentElement.style.background = '';
    yearInput.parentElement.style.background = '';
    monthInput.parentElement.style.background = '';
  }
  
  function focusMonth() {
    monthInput.parentElement.style.background =color;
    numberInput.parentElement.style.background = '';
    nameInput.parentElement.style.background = '';
    cvcInput.parentElement.style.background = '';
    yearInput.parentElement.style.background = '';
  }
  
  function focusYear() {
    yearInput.parentElement.style.background = color;
    monthInput.parentElement.style.background = '';
    numberInput.parentElement.style.background = '';
    nameInput.parentElement.style.background = '';
    cvcInput.parentElement.style.background = '';
  }
  
  function focusCvc() {
    cvcInput.parentElement.style.background = color;
    yearInput.parentElement.style.background = '';
    monthInput.parentElement.style.background = '';
    numberInput.parentElement.style.background = '';
    nameInput.parentElement.style.background = '';
  }
}

//Adding a click event to the complete state button just to refresh the page
const button = document.querySelector('.complete-state button');

button.addEventListener('click', () => {
  location.reload();
})

/*I just decided to add this function, it isn't part of the project but i just like doing some extra coding sometime just to know a bit more.
The function just basically adds space at every 4 digits intervals to the card number just to make it get the rigth card number format
*/
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

addSpace();

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // To prevent default form behavior
  
  //Getting all input fields
  let nameInput = document.querySelector('#card-holder');
  let numberInput = document.querySelector('#number');
  let monthInput = document.querySelector('#month');
  let yearInput = document.querySelector('#year');
  let cvcInput = document.querySelector('#cvc');
  let expiryDate =`${monthInput.value}/${yearInput.value}`;//Creating a new string our month and year valus
  
  //Getting all the error display p tags
  let nameError = document.querySelector('.name-error');
  let numberError = document.querySelector('.number-error');
  let monthError = document.querySelector('.month-error');
  let yearError = document.querySelector('.year-error');
  let cvcError = document.querySelector('.cvc-error');
  
  //The function is to update our card
  function updateCard() {
    const cardNumber = document.querySelector('.card-number h2');
    const cardHolderName = document.querySelector('.card-holder-name');
    const cardExpiryDate = document.querySelector('.card-expiry-date');
    const cardCVC = document.querySelector('.cvc-number');
    const completeState = document.getElementById('complete-state');

    //Setting the inputed values to the text content of the curresponding card detail fields
    cardHolderName.textContent = nameInput.value;
    cardNumber.textContent = numberInput.value;
    cardExpiryDate.textContent = expiryDate;
    cardCVC.textContent = cvcInput.value;

    //Setting all input values to be empty after card details are updated
    nameInput.value = '';
    numberInput.value = '';
    monthInput.value = '';
    yearInput.value = '';
    cvcInput.value = '';

    //Then making the form to be visibility hidden then showing the complete state
    form.style.visibility = 'hidden';
    completeState.style.visibility = 'visible';
  }
  
  //I just decided to use switch for my form validation instead of if else conditions, it's still all the same
  switch (true) {
    case (nameInput.value == ''):
      nameError.textContent = `Card holder name can't be empty`,
      //This is where the input parent element background will be set to red to indicate invalid field value
      nameInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {nameError.textContent = ''}, 1500);
      break;
    case (nameInput.value.length < 4 && nameInput.value.length >= 1):
      nameError.textContent = `Provide a valid name`,
      nameInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {nameError.textContent = ''}, 1500);
      break;
    case (/\d/.test(nameInput.value)):
      nameError.textContent = `Name can only be text string`,
      nameInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {nameError.textContent = ''}, 1500);
      break;
    case (numberInput.value.length < 19):
      numberError.textContent = 'Provide a valid card number',
      numberInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {numberError.textContent = ''}, 1500);
      break;
    case (numberInput.value == ''):
      numberError.textContent = `Card number field can't be empty`,
      numberInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {numberError.textContent = ''}, 1500);
      break;
    case (monthInput.value == ''):
      monthError.textContent = `Month field can't be empty`,
      monthInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {monthError.textContent = ''}, 1500);
      break;
    case (monthInput.value > 12):
      monthError.textContent = `Month can not be greater than 12`,
      monthInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {monthError.textContent = ''}, 1500);
      break;
    case (yearInput.value > 99 && yearInput.value < 23):
      yearError.textContent = `Provide a valid year`,
      yearInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {yearError.textContent = ''}, 1500);
      break;
    case (yearInput.value == ''):
      yearError.textContent = `Year field can't be empty`,
      yearInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {yearError.textContent = ''}, 1500);
      break;
    case (cvcInput.value == ''):
      cvcError.textContent = `Cvc field can't be empty`,
      cvcInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {cvcError.textContent = ''}, 1500);
      break;
    case (cvcInput.value.length < 3 && cvcInput.value.length >= 1):
      cvcError.textContent = `CVC should be three numbers`,
      cvcInput.parentElement.style.background = 'hsl(0, 100%, 66%)',
      setTimeout(() => {cvcError.textContent = ''}, 1500);
      break;
    default:
      updateCard();
  }
})