
const btns = document.querySelectorAll(".question-btn");

//loop over btns

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
      const question = e.currentTarget.parentElement.parentElement;  
      question.classList.toggle("show-text");
    });
});