import { animate } from "./helpers";

const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcType = document.querySelector(".calc-type");
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");
  const total = document.getElementById("total");

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;
    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value/10;
    };
    
    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    };
/*
    const animate = ({timing, draw, duration}) => {
      let start = performance.now();
      requestAnimationFrame(function animate(time) {
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        let progress = timing(timeFraction);
        draw(progress); 
        if (timeFraction < 1) {
          requestAnimationFrame(animate);
        }
      }) 
    };
*/
    if (calcType.value && calcSquare.value) {
      animate({
        duration: 1500,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue; 
          total.textContent = Math.floor(progress * totalValue);
        } 
      });
    } else {
      totalValue = 0;
    };
  };

  calcBlock.addEventListener("input", (e) => {
    if (e.target === calcType || e.target === calcSquare ||
      e.target === calcCount || e.target === calcDay) {
      countCalc();  
    }
  })
};
 
export default calc;