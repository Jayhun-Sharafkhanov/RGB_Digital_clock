var h;
 var m;
 var s;
 var currTime;
 var currDay;
 var currMonth;
 var currYear;
 var currDate;
 function clockTick(){
      h = new Date().getHours();
      m = new Date().getMinutes();
      s = new Date().getSeconds();
      currDay = new Date().getDate();
      currMonth = new Date().getMonth();
      currYear = new Date().getFullYear();
      console.log(currDay);

       if(h < 10) {
        h = "0" + h;

      }
       if(m < 10) {
        m = "0" + m;

      }
       if(s < 10) {
        s = "0" + s;

      }
      if(currDay<10) {
        currDay = "0" + currDay;

      }
      if(currMonth<10) {
        currMonth = "0" + currMonth;

      }


      currDate = `${currDay}/${currMonth}/${currYear}`;
      document.getElementById("time").innerText = `${h}:${m}:${s}`;
      document.getElementById("date").innerText = currDate;
      setInterval(clockTick, 1000);


 }
 clockTick();