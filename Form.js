class Form{
 constructor(){

 }
 
 display(){
  var title = createElement('h2','car racing game');
  var input = createInput('name');
  var button = createButton('play');
  title.position(130,0);
  input.position(130,160);
  button.position(250,200);
  var greeting = createElement('h3');
  button.mousePressed();
  
 }



}