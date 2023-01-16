// Cambio desde Dell utilizando GITHUB DESKTOp
// Cambio desde Github
// Segunda Linea desde GITHUB para probar en VSCODE GITHUB
// Linea Agregada desde rama test_GITHUBDESKTOP

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







