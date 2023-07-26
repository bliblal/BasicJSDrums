function playsound(e){
    console.log(e.code);
    const audio=document.querySelector(`audio[key="${e.code}"]`);
    const key=document.querySelector(`div[key="${e.code}"]`);
    console.log(key);
    if(!audio){
      return;
    }

    key.classList.add('playing');


    audio.currentTime =0;

    audio.play();
  }


  function endTransition(e){
    if(!e.propertyName=='transform'){
      return;
    }

    e.target.classList.remove('playing');
  }


  window.addEventListener('keydown', playsound);
  const keys=Array.from(document.querySelectorAll('.key'));
  console.log(keys);
  keys.forEach( (key) => key.addEventListener('transitionend', endTransition) );