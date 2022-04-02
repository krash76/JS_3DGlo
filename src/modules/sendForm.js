const sendForm = ({formId, someElem = []}) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
 // const loadText = "Загрузка...";
  const loader = `<div class="sk-rotating-plane"></div>`;
  
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер свяжется с Вами";

  const validate = (list) => {
    let success = true;
    
    list.forEach(input => {
      inputSuccess(input);
      if (!input.classList.contains("success")) {
        success = false;
        console.log (input.classList);
      };
    })
     return success
  };

  const inputSuccess = (input) => {
    if ((input.name === "user_name" && /^([а-яА-ЯёЁ\s]*)$/.test(input.value))
        || (input.name === "user_email")
        || (input.name === "user_phone" && /^([\d\(\)\-\+]*)\d$/.test(input.value))
        || (input.name === "user_message" && /([^а-яё\s\d\,\.\"\?\!\:\;\-\)\(]*)$/.test(input.value))) {
          input.classList.add ("success");
          console.log (input.classList);
        }  
  };
  
  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};
    
    //statusBlock.textContent = loadText;
    statusBlock.insertAdjacentHTML("beforeend", loader);
    const skDiv = statusBlock.querySelector(".sk-rotating-plane");
   
    skDiv.style.cssText = `
      width: 30px;
      height: 30px ;
      margin: auto;
      background-color: white;
      animation: sk-rotating-plane 1.2s infinite ease-in-out;
    `;
    
    skDiv.animate([
      {
        transform: 'perspective(120px) rotateX(0deg) rotateY(0deg)', offset: 0.0
      },
      {
        transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)', offset: 0.5
      },
      {
        transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)', offset: 1.0
      }
    ], 1000);


    form.append(statusBlock);
    formData.forEach ((val, key) => {
      formBody[key] = val;
    });
    someElem.forEach((elem) => {
      const element  = document.getElementById(elem.id);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });
    if (validate(formElements)) {
      sendData(formBody)
      .then(data => {
        statusBlock.style = "color: #fff";
        statusBlock.textContent = successText;
        formElements.forEach(input => {
          input.value = "";
        })
      })
      .catch(error => {
        statusBlock.textContent = errorText;
      })
    }else {
      alert ("введенные данные не валидны")
    }
  };

  try {
    if (!form) {
      throw new Error ("Верните форму на место, пож-ста!")
    };
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    })
  } catch (error) {
    console.log (error.message)
  };

};

export default sendForm;