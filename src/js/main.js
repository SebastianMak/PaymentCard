$(document).ready(function() {
    $('select').material_select();

$("form").submit(function(event) {
  firstNameField()
  lastNameField()
  emaillAdressField()
  cardHoldNameField()
  cardtypeField()
  cardNumberField()
  selectMonthField()
  selectYearField()
  ccvCodeField()
  event.preventDefault()
})
$('[name="first_name"]').blur(function(){
  var error = firstNameField();
  if (error) {
    applyErrorToInput($('[name="first_name"]'), error)
  }
  else {
    applySuccesToInput($('[name="first_name"]'))
  }
})
$('[name="last_name"]').blur(function(){
  var error = lastNameField()
  if (error) {
    applyErrorToInput($('[name="last_name"]'), error)
  }
  else {
    applySuccesToInput($('[name="last_name"]'))
  }
})
$('[name="email_adress"]').blur(function(){
  var error = emailAdressField()
  if (error) {
    applyErrorToInput($('[name="email_adress"]'), error)
  }
  else {
    applySuccesToInput($('[name="email_adress"]'))
  }
})
$('[name="cardholder_name"]').blur(function(){
  var error = cardHoldNameField()
  if (error) {
    applyErrorToInput($('[name="cardholder_name"]'), error)
  }
  else {
    applySuccesToInput($('[name="cardholder_name"]'))
  }
})
$('[name="card_type"]').siblings('.select-dropdown').blur(function(){

  function callTimeout() {
    var error = cardtypeField()
    if (error) {
      applyErrorToSelect($('[name="card_type"]').siblings('.select-dropdown'), error)
    }
    else {
      applySuccesToSelect($('[name="card_type"]').siblings('.select-dropdown'))
    }
  }
  setTimeout(callTimeout, 150)
})
$('[name="card_number"]').blur(function(){
  var error = cardNumberField()
  if (error) {
    applyErrorToInput($('[name="card_number"]'), error)
  }
  else {
    applySuccesToInput($('[name="card_number"]'))
  }
})
$('[name="select_month"]').siblings('.select-dropdown').blur(function(){
  setTimeout(callTimeout, 150)
  function callTimeout() {
    var error = selectMonthField()
    if (error) {
      applyErrorToSelect($('[name="select_month"]').siblings('.select-dropdown'), error)
    }
    else {
      applySuccesToSelect($('[name="select_month"]').siblings('.select-dropdown'))
    }
  }
})
$('[name="select_year"]').siblings('.select-dropdown').blur(function(){
  setTimeout(callTimeout, 150)
  function callTimeout() {
    var error = selectYearField()
    if (error) {
      applyErrorToSelect($('[name="select_year"]').siblings('.select-dropdown'), error)
    }
    else {
      applySuccesToSelect($('[name="select_year"]').siblings('.select-dropdown'))
    }
  }
})
$('[name="ccv_code"]').blur(function(){
  var error = ccvCodeField()
  if (error) {
    applyErrorToInput($('[name="ccv_code"]'), error)
  }
  else {
    applySuccesToInput($('[name="ccv_code"]'))
  }
})

//Error/Succes Patterns

function applyErrorToInput($input, errorMessage) {
  $input
    .removeClass('valid')
    .addClass('invalid')
  $input
    .siblings('.validation-messages')
    .find('.custom-error')
    .text(errorMessage);
}
function applySuccesToInput($input) {
  $input
    .removeClass('invalid')
    .addClass('valid');
}
function applyErrorToSelect($input, errorMessage) {
  $input
     .parent()
     .removeClass('valid')
     .addClass('invalid')
  $input
    .parent()
    .siblings('.validation-messages')
    .find('.custom-error')
    .text(errorMessage)
  $input
    .removeClass('valid')
    .addClass('invalid')
}
function applySuccesToSelect($input) {
  $input
    .parent()
    .addClass('valid')
  $input
    .parent()
    .removeClass('invalid')
  $input
    .addClass('valid')
    .removeClass('invalid')
}

$(':input').on('keyup, change',function(){
  // debugger
  // Enable/disable the submit button
  var hasErrors = false;
    if(firstNameField() === 'This field is required'){
        hasErrors = true
    }
    if (lastNameField() === 'This field is required') {
        hasErrors = true
    }
    if (emailAdressField() === 'This field is required' || emailAdressField() === 'Invalid email adress') {
        hasErrors = true
    }
    if (cardHoldNameField() === 'This field is required') {
    }
    if (cardtypeField() === 'Please select your card type') {
        hasErrors = true
    }
    if (cardNumberField() === "Invalid Card Number" || cardNumberField() === "This field is required" ||cardNumberField() === "First select your card type") {
        hasErrors = true
    }
    if (selectMonthField() === "Select month!") {
        hasErrors = true
    }
    if (selectYearField() === "Select year!") {
        hasErrors = true
    }
    if (ccvCodeField() === "Invalid CCV Code" || ccvCodeField() === "Required field") {
        hasErrors = true
    }
    $('.submitbtn')
      .toggleClass('disabled', hasErrors)
      .prop('disabled', hasErrors)

    // Enable/disable the reset button
    var hasData = false;
    if ($('[name="first_name"]').val()) {
        hasData = true
    }
    if ($('[name="last_name"]').val()) {
       hasData = true
    }
    if ($('[name="email_adress"]').val()) {
       hasData = true
    }
    if ($('[name="cardholder_name"]').val()) {
       hasData = true
    }
    if ($('[name="card_type"]').val()) {
       hasData = true
    }
    if ($('[name="card_number"]').val()) {
       hasData = true
    }
    if ($('[name="select_month"]').val()) {
       hasData = true
    }
    if ($('[name="select_year"]').val()) {
       hasData = true
    }
    if ($('[name="ccv_code"]').val()) {
       hasData = true
    }
    $('.reset')
      .toggleClass('disabled', false)
      .prop('disabled', false)


})



function firstNameField() {
  // debugger
  var $firstName = $('[name="first_name"]');
  if ($firstName.val() === "") {
    return 'This field is required'
  }
  else {
  }
}

  // Validate 'first name' field
function lastNameField() {

    var $lastName = $('[name="last_name"]');
    if ($lastName.val() === "") {
      $('a').addClass('disabled')
        return 'This field is required'
      }
  }
  // Validate 'email adress' field
  function emailAdressField() {
    var $emailAdress = $('[name="email_adress"]')
    var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var testing = regEx.test($emailAdress.val())
    if(!testing){
      if ($emailAdress.val() == "") {
        return 'This field is required'
      }
      return 'Invalid email adress'
    }

  }
  // Validate 'CardHolder's Name' field
  function cardHoldNameField() {
      var $cardHolderName = $('[name="cardholder_name"]')
      if ($cardHolderName.val() === "") {
        return 'This field is required'
      }
  }
  // Validate 'Card type select' field
  function cardtypeField() {
       var $selectField = $('[name="card_type"]');
       var $selectInput = $selectField.siblings('.select-dropdown')
       if($selectField.val()){
         return false
       }
       else {
         return "Please select your card"
       }
    }
    // Validate 'Card number' field
  function cardNumberField() {
       var $cardNumber = $('[name="card_number"]');
       var cardNumberValue = $cardNumber.val();
       var cardType = $cardNumber.attr('id');
       var cardPatterns = {
         'maestro' : /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)\d{12,15}$/,
         'visa' : /^4\d{11,15}$/,
         'discover': /^6(?:011\d{12}|5\d{14}|4[4-9]\d{13}|22(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d{2}|9(?:[01]\d|2[0-5]))\d{10})$/,
         'master-card' : /^(51|52|53|54|55)\d{14,17}$/
        }
      if (cardType) {
       if (!cardNumberValue.match(cardPatterns[cardType])){
          if (cardNumberValue === "") {
            return "This field is required"
            }
          else {
            return "Invalid Card Number"
          }
       }
     }
     else {
         return "First select your card type!"
     }
  }
    // Validate 'Select Month' field
  function selectMonthField() {
      var $selectMonth = $('[name="select_month"]');
      var $selectMonthInput = $selectMonth.siblings('.select-dropdown')
        if($selectMonth.val()){
          return false
        }
         else {
           return "Select month!"
         }
      }
      // Validate 'Select Year' field
    function selectYearField() {
       var $selectYear = $('[name="select_year"]');
       var $selectYearInput = $selectYear.siblings('.select-dropdown')
         if($selectYear.val()){
           return false
         }
         else {
           return "Select year!"
         }
     }
     //Valide "CCV Code" field
  function ccvCodeField() {
     var $ccvInput = $('[name="ccv_code"]')
     var ccvValue = $ccvInput.val()
     var ccvPattern = /^[0-9]{3,4}$/
        if(!ccvValue.match(ccvPattern)){
          if (ccvValue === "") {
            return "Required field"
          }
          else {
            return "Invalid CCV Code"
          }
        }
  }
  // Reset all form data
    $('.reset').bind("click", function() {
      $("input[type=text]").val("");
      var $dropDowns = $('input.select-dropdown')
        for (var i = 0; i < $dropDowns.length; i++) {
          var $x = $($dropDowns[i]);
          var value = $x.attr("value");
          $($dropDowns[i]).val(value)
        }
      $('.invalid').removeClass('invalid')
      $('.valid').removeClass('valid')
      $('[name="card_number"]').removeAttr('id')
  });
    // Change cart number icon
    $('[name="card_type"]').change(function () {
        $('[name="card_number"]')
            .removeAttr('id')
            .attr('id', $('[name="card_type"]').val())
});
});
