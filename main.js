 var btn = document.getElementsByClassName('btn');
 var flow = document.getElementById('flow');
    
    btn[0].onclick = function(){
      flow.style.transform = "translateX(0px)";
      for(i=0; i<8; i++){
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    } 
    btn[1].onclick = function(){
      flow.style.transform = "translateX(-400px)";
      for(i=0; i<8; i++){
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    } 
    btn[2].onclick = function(){
      flow.style.transform = "translateX(-800px)";
      for(i=0; i<8; i++){
        btn[i].classList.remove("active");
      } 
      this.classList.add("active");
    } 
    btn[3].onclick = function(){
      flow.style.transform = "translateX(-1200px)";
      for (i = 0; i<8; i++) {
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    } 
    btn[4].onclick = function(){
      flow.style.transform = "translateX(-1600px)";
      for (i = 0; i<8; i++) {
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    } 
     btn[5].onclick = function(){
      flow.style.transform = "translateX(-2000px)";
      for (i = 0; i<8; i++) {
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    } 
    btn[6].onclick = function(){
      flow.style.transform = "translateX(-2400px)";
      for (i = 0; i<8; i++) {
        btn[i].classList.remove("active");
      }
      this.classList.add("active");
    } 
    btn[7].onclick = function(){
      flow.style.transform = "translateX(-2800px)"
      for(i=0; i<8; i++){
        btn[i].classList.remove("active");
      } 
      this.classList.add("active");
    } 
    btn[8].onclick = function(){
      flow.style.transform = "translateX(-3200px)";
      for(i=0; i<8; i++){
        btn[i].classList.remove("active");
      } 
      this.classList.add("active");
    };
