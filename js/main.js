$(document).ready(function () {
  var menuIcon = $('.navbar-toggler');
  var menu = $('#menu-nav');

  menuIcon.click(function() {
    menu.toggleClass('show');
  });

  menu.find('a').click(function() {
    menu.removeClass('show');
  });

  $(document).click(function(event) {
    if(!menu.is(event.target) && menu.has(event.target).length === 0) {
      menu.removeClass('show');
    }
  });


    $('#telefone').mask('(00) 0000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
    });

    $("#email").mask("A", {
        translation: {
        A: { pattern: /[\w@\-.+]/, recursive: true },
    }});

    $('#contato').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Por favor, informe seu nome",
                minlength: "Seu nome deve ter pelo menos 3 caracteres"
            },
            email: {
                required: "Por favor, informe seu email",
                email: "Por favor, informe um email válido"
            },
            mensagem: {
                required: "Por favor, escreva sua mensagem",
                minlength: "Sua mensagem deve ter pelo menos 10 caracteres"
            }
        },

        errorElement: 'span',
        errorClass: 'help-block',
        highlight: function(element, errorClass, validClass) {
          $(element).parents('.mb-3').addClass('has-error').removeClass('has-success');
        },
        unhighlight: function(element, errorClass, validClass) {
          $(element).parents('.mb-3').addClass('has-success').removeClass('has-error');
        },
        errorPlacement: function(error, element) {
          if (element.parent('.input-group').length || element.prop('type') === 'checkbox' || element.prop('type') === 'radio') {
            error.insertAfter(element.parent());
          } else {
            error.insertAfter(element);
          }
        },
        submitHandler: function(form) {
          console.log(form);
          form.submit();
        },
        invalidHandler: function(evento, validador) {
          let camposIncorretos = validador.numberOfInvalids();
          if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`);
          }
        }
    })
})