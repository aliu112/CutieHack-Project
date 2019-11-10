
    function orangeSkyfall() {
    
      var orange = $('<div class="orange"> </div>');
        $('#orangeZone').prepend(orange);
        orangeX = Math.floor(Math.random() * $('#container').width());
        orangeSpd = Math.floor(Math.random() + 8000);

        orange.css({'left':orangeX+'px'});
        orange.animate({
            top: "500px",
            opacity : "0",

        }, orangeSpd, function(){
            $(this).remove();
            orangeSkyfall();
        });
 
    }
   
   /* function teslaSkyfall() {
    
      var orange = $('<div class="tesla"> </div>');
        $('#orangeZone').prepend(orange);
        orangeX = Math.floor(Math.random() * $('#container').width());
        orangeSpd = Math.floor(Math.random() + 8000);

        orange.css({'left':orangeX+'px'});
        orange.animate({
            top: "500px",
            opacity : "0",

        }, orangeSpd, function(){
            $(this).remove();
            teslaSkyfall();
        });
 
    }
*/

    var timer = Math.floor(Math.random() +700);
    
 
  function makeitrainOrange(){

    window.setInterval(function(){
        orangeSkyfall();
    }, timer);
  }

   /*function makeitrainTesla(){

    window.setInterval(function(){
        teslaSkyfall();
    }, timer);
  }*/





    
    function calculateCarbon(){
      var mpg = (document.getElementById("mpg").value);
      if(mpg <= 0){
        alert("Input valid mpg")
      }
      var miles = (document.getElementById("miles").value);
      if(miles <= 0){
        alert("Input valid miles")
      }
      var gas = document.getElementById("gas").value;

      if(gas == "Gasoline"){
        var num = (miles/mpg)*(8887/1000000);
        document.getElementById("result").innerHTML = num.toFixed(4) +' metric tons of CO2 / year';
        }
      else if(gas == "Diesel"){
        var num = (miles/mpg)*(8887/1000000);
        document.getElementById("result").innerHTML= num.toFixed(4) +' metric tons of CO2 / year';
      }
      else{
        alert("Choose Gasoline or Diesel");
      }
      if (num <=4){
        makeitrainOrange();
        document.getElementById("report").innerHTML = 'Good job! Your carbon footprint is less than average';
        }
        else if (num>4&&num<5){
          //makeitrainOrange();
          document.getElementById("report").innerHTML = "Your carbon footprint is average";
        }
        else if(num>=5){
          //makeitrainOrange();
          document.getElementById("report").innerHTML = "You output too much carbon, consider using public transportation or buying a tesla";
        }
      return false;
    }
