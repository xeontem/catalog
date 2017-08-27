export default function(elem, container){

document.body.addEventListener('scroll', Ascroll, false);
window.addEventListener('scroll', Ascroll, false);

  function Ascroll() {
  var a = document.querySelector(elem);
  var b = document.querySelector(container);
    if(a) {let top = a.getBoundingClientRect().top;
      if(b.getBoundingClientRect().top < 100 && Math.abs(b.getBoundingClientRect().top-100) < b.offsetHeight - a.offsetHeight - 100){
          a.style.top = Math.abs(b.getBoundingClientRect().top-100)+'px';
      }
      if(b.getBoundingClientRect().top > 100) {
          a.style.top = '';
      }
    }
  }

};
