function isMobile(){
    return navigator.maxTouchPoints>=0 && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  }
     
  
  if(isMobile()==true){


    if(window.confirm('Wow, you are on mobile. Would you like to continue on mobile for better user experience?')){

      alert("redirecting...");
      window.location.href = "https://breakersneaker.github.io/portfolioMobile/";
      close();
    }
  
    
    
  

   
  
  }
     
  
     
   