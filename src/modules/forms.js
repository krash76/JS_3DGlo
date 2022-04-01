const forms = () => {

  const inputs = document.querySelectorAll('input.calc-item');
  const nameInputs = document.querySelectorAll('input[name="user_name"]');
  const emailInputs = document.querySelectorAll('input[name="user_email"]');
  const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

  inputs.forEach((input)=> {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    })
  });

  nameInputs.forEach((input)=> {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яё\-\s]/ig, "");
    })
  });

  emailInputs.forEach((input)=> {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^a-z\d\@\-\_\.\!\~\*\']/ig, "");
    })
  });

  phoneInputs.forEach((input)=> {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d\(\)\-\+]/ig, "");
    })
  });
};

export default forms;

