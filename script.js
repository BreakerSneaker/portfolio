function isMobile(){
    return navigator.maxTouchPoints>=0 && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  }
     
  
  if(isMobile()==true){
  

    window.location.href = "https://breakersneaker.github.io/portfolioMobile/";
  

    close();
  
  }
     
  
     
   