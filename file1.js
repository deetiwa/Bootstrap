// Bootstrap => Most popular fontend framework, for building responsive sites,named twitter blueprint,was developed by mark otto.
// Bootstrap => (Grid System + Classes + Components).
// Grid System => For Responsive., Classes => Class for look making responsive., Components =>copy the link
// CDN => Content Delivery Network 

// 1. Grid System => a.Breakpoint, b.Container, c.Row, d.Column
// container-fluid => give always 100% width,
// row always use 100% width

// Bootstrap Flow => container => row => column => content (Text ang Image)./ column always inside row

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()