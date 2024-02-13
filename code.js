function main() {
   let ballon = document.getElementById('ballon')
   let video = document.getElementById('video')
   let header = document.getElementById('header')
   let vid = document.getElementById('vid')
   let envelope = document.getElementById('envelopeImg')
   let container = document.querySelector('.container')
   let letter = document.getElementById('letter')
   ballon.addEventListener('click', () => {
      video.style.display = 'block';
      ballon.style.display = 'none';
      header.style.display = 'none';
      vid.requestFullscreen();
      vid.autoplay=true
      container.style.backgroundImage='none'
      console.log('hi')
   })
   // document.addEventListener('keydown',(e)=>{
   //    console.log(e)
   //    if(e.code=='Escape')
   //    { 
   //       envelope.style.display='block'
   //       video.style.display='none';
   //       ballon.style.display='none';
   //       }
   // })
   document.getElementById('vid').addEventListener('ended', myHandler, false);
   function myHandler(e) {
      envelope.style.display = 'block'
      video.style.display = 'none';
      ballon.style.display = 'none';
      document.exitFullscreen();
   }
   envelope.addEventListener('click', () => {
      envelope.style.display = 'none'
      letter.style.display='flex'
   })
}
main()
