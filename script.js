function isMobile(){
    return navigator.maxTouchPoints>=0 && /Android|iPhone|iPad|ipad pro|ipad air|iPod/i.test(navigator.userAgent);
  
  }
     
  
  if(isMobile()==true){


    if(window.confirm('Wow, you are on mobile. Would you like to continue on mobile for better user experience?')){

      
      window.location.href="https://breakersneaker.github.io/portfolioMobile/";
      
    }
  
    
    
  
    close();
   
  
  }
     
  
     
   