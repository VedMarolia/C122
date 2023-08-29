x = 0
y = 0
draw_rect = ""
draw_circle = ""
draw_square = ""
var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "System is listning please speak."
    recognition.start()
}

recognition.onresult = function(event){
    console.log(event)

    var content = event.results[0][0].transcript

    document.getElementById("status").innerHTML = "The speech has been recognised as "+content

    if(content == "circle"){
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML = "Started drawing the circle"
        draw_circle = "set"
    }

    if(content == "rectangle"){
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML = "Started drawing the rectangle"
        draw_rect = "set"
    }

    if(content == "square"){
        x = Math.floor(Math.random()*900)
        y = Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML = "Started drawing the square"
        draw_square = "set"
    }
}

function setup(){
    canvas = createCanvas(900, 600)
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random()*200)
        circle(x,y,radius)
        document.getElementById("status").innerHTML = "Circle is drawn."
        draw_circle = ""
    }

    if(draw_rect == "set"){
       width = Math.floor(Math.random()*300)
       height = Math.floor(Math.random()*150)
       rect(x,y,width,height)
       document.getElementById("status").innerHTML = "Rectangle is drawn."
       draw_rect = ""
    }

    if (draw_square == "set"){
        width = Math.floor(Math.random()*300)
        height = width
        rect(x,y,width,height)
        document.getElementById("status").innerHTML = "Square is drawn."
        draw_square = ""
    }
}