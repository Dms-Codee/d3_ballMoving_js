


const svg = d3.select('svg');
const circle = svg.append('circle');
var radius=0; 
var change=true;
var flag=true;
var y=0;
var x=0

  var aumento=setInterval(function(){
  
  circle.attr('r', 40); 
  circle.attr('cx', x+50);
  circle.attr('cy', y+50);
   
      if(y<400){
         if(y==0){
           flag=true;
         }
      } else{
        flag=false;   
      }

      if(flag){
        y++;
        x++;
      }else{
        y--;
        x--;
      }
   
    // if (change){
    //   circle.attr('fill', 'green')
    //   change=false;
    // }else{
    //   circle.attr('fill', 'yellow')
    //   change=true;
    // }

  //  if(radius>=50){
  //      clearInterval(aumento);
  //  }
 }, 1);





  // var xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function () {
  //     if(this.readyState == 4 && this.status==200){
  //        console.log("Respuesta correcta")
        
  //        console.log(JSON.parse(this.responseText));

  //     }
  // };
  // xhr.open("GET","https://script.google.com/macros/s/AKfycbzQm4c9DH-v9i77b9yiDR7ipB_ydbqKK86nO7Bp1nC5zjtrjWCkmW7e/exec" , true);
  // xhr.send();

