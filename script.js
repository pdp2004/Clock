setInterval(() => {
    let d = new Date();
    let hour = d.getHours()-12;
    let minute = d.getMinutes();
    let second = d.getSeconds();
    
    let h = document.getElementById("h");
    let m = document.getElementById("m");
    let s = document.getElementById("s");

    let hr = (30*hour)+minute/2;
    let min = 6*minute;
    let sec = 6 * second;

   //  console.log(hr);

   h.style.transform=`rotate(${hr}deg)`;
   m.style.transform=`rotate(${min}deg)`;
   s.style.transform=`rotate(${sec}deg)`;

   }, 1000);