function isMobile(){
    return navigator.maxTouchPoints>=0 && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  }
     
  
  if(isMobile()==true){
  
    window.open('https://breakersneaker.github.io/portfolioMobile/');
    alert("hello world");
    close();
  
  }
     
  
     
   