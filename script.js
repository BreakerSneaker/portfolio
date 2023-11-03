function isMobile(){
    return navigator.maxTouchPoints>=0 && /Android|iPhone|iPad|ipad pro|ipad air|iPod/i.test(navigator.userAgent);
  
  }
     
  
  if(isMobile()==true){



    window.location.href="https://breakersneaker.github.io/portfolioMobile/";
  
  
  
  }
     
 
  var size = [window.width,window.height];
  (window).resize(function(){
    window.resizeTo(size[0],size[1]);
});