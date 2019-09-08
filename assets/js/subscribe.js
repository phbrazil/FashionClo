$(function() {

    $("#subscribe input,#subscribe emailSub").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var email = $("input#emailSub").val();

            $.ajax({
                url: "http://www.opportunity-web.com.br/subscribe.jsp",
                type: "POST",
                data: {
                    email: email
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#successSubscribe').html("<div class='alert alert-success'>");
                    $('#successSubscribe > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#successSubscribe > .alert-success')
                        .append("<strong>Em breve você receberá nossas novidades! </strong>");
                    $('#successSubscribe > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#subscribe').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#successSubscribe').html("<div class='alert alert-danger'>");
                    $('#successSubscribe > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#successSubscribe > .alert-danger').append("<strong>Desculpe " + firstName + ", aparentemente nossos servidores não estão respondendo. Por favor tente novamente mais tarde!");
                    $('#successSubscribe > .alert-danger').append('</div>');
                    //clear all fields
                    $('#successSubscribe').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#email').focus(function() {
    $('#successSubscribe').html('');
});
