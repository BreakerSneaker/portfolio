if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    window.open("https://breakersneaker.github.io/portfolioMobile/");
  }else{
    // false for not mobile device
    window.open('index.html');
  }