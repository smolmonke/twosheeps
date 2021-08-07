var s1 = new Audio('audio/shbaa.mp3');

function playAudio() {
  s1.play();
}
function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
}
