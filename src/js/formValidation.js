export default function formValidation() {

  const form = document.querySelector("#formCallback"),
    btnSubmit = document.querySelector("#submit"),
    termsCheckbox = document.querySelector('#terms'),

    inputPhone = document.querySelector("#phone"),
    errorMsgPhone = document.querySelector("#error-msg-phone"),
    validMsgPhone = document.querySelector("#valid-msg-phone"),

    inputName = document.querySelector("#name"),
    errorMsgName = document.querySelector("#error-msg-name"),
    validMsgName = document.querySelector("#valid-msg-name");

  const regexpName = /^[a-zA-ZА-Яа-яЁё\s]+$/g;
  const regexpPhone = /^((\+7|7|8)+([0-9]){10})$/g;
  let validName = false;
  let validPhone = false;
  let validTerms = false;

  const reset = function (input, error, valid) {
    input.classList.remove("pop-up__message_error");
    error.classList.add("display-none");
    valid.classList.add("display-none");
  };

  form.addEventListener('input', (e) => {
    if (e.target === inputName) {
      reset(inputName, errorMsgName, validMsgName);

      if (inputName.value.trim().length >= 2) {
        regexpName.lastIndex = 0;
        if (regexpName.test(inputName.value)) {
          validMsgName.classList.remove("display-none");
          validName = true
        } else {
          inputName.classList.add("pop-up__message_error");
          errorMsgName.classList.remove("display-none");
          validName = false;
        }
      }
    }

    if (e.target === inputPhone) {
      reset(inputPhone, errorMsgPhone, validMsgPhone);

      if (inputPhone.value.trim()) {
        regexpPhone.lastIndex = 0;
        if (regexpPhone.test(inputPhone.value)) {
          validMsgPhone.classList.remove("display-none");
          validPhone = true;
        } else {
          inputPhone.classList.add("pop-up__message_error");
          errorMsgPhone.classList.remove("display-none");
          validPhone = false;
        }
      }
    }

    if (e.target === termsCheckbox) {
      termsCheckbox.checked ? validTerms = true : validTerms = false;
    }

    if (validName && validPhone && validTerms) {
      btnSubmit.disabled = false;
      btnSubmit.classList.add('active')
    } else {
      btnSubmit.disabled = true;
      btnSubmit.classList.remove('active')
    }
  })
  form.addEventListener('reset', () => {
    reset(inputName, errorMsgName, validMsgName);
    reset(inputPhone, errorMsgPhone, validMsgPhone);
    btnSubmit.disabled = true;
    btnSubmit.classList.remove('active');
    validName = validPhone = validTerms = false;
  })
}
