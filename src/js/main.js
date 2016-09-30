$(document).ready(function() {
    $('select').material_select();
});

$("form").submit(function(event) {
    // Validate 'first name' field
    var $firstName = $('[name="first_name"]');
    if ($firstName.val() === "") {
        $firstName.addClass('invalid');
        $firstName
          .siblings('.validation-messages')
          .find('.custom-error')
          .text('This field is required.');
        event.preventDefault();
    } else {
        $firstName.addClass('valid');
    }




    event.preventDefault();

});
