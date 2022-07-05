    var adviceId = document.getElementById('advice-id');
    var adviceText = document.getElementById('advice-text');
    var btn = document.getElementById('btn');

    var box = document.getElementById('advice-container');
    var loader = document.getElementById('loader');

    function getAdvice(){

      btn.classList.add('rotate');
      adviceText.classList.remove('animated');
      adviceId.classList.remove('animated');

      setTimeout(function(){
        btn.classList.remove('rotate');
      },1200)

      fetch('https://api.adviceslip.com/advice')
      
      .then(response => { return response.json();})

      .then(data => {

        let adviceObject = data.slip;
        adviceText.classList.add('animated');
        adviceId.classList.add('animated');
        adviceId.textContent = 'advice #' + adviceObject.id;
        adviceText.textContent = adviceObject.advice;

      })
      .catch(error => console.log(error))
    }

    window.onload = getAdvice();
    btn.addEventListener("submit",getAdvice());