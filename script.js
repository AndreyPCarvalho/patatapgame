//const canvas = $('#myCanvas')
//const context = canvas.getContext('2d')

for(var x = 100; x <= 1000; x+=100){
  for(var y = 100; y <= 1000; y+=100){
    var circle = new Path.Circle(new Point(x,y),20)
    circle.fillColor = 'white'
  }
}