from turtle import * 
color("brown")
width(5)
begin_fill()
#start of the cube

forward(200)

left(90)

forward(160)

left(90)

forward(350)

left(90)

forward(160)

left(90)

forward(150)

end_fill()

#end of the cube

#start of the door

color('yellow')
begin_fill()

left(90)

forward(90)

right(90)

forward(50)

right(90)

forward(90)

end_fill()

#end of the door 

#start of the roof 

color("orange")


penup()
goto(200, 160)
pendown()

begin_fill()

right(160)

forward(40)

left(20)

forward(40)

left(50)

forward(270)

left(50)

forward(50)

left(20)

forward(30)

end_fill()

#end of the roof 

#start of the windows

color("blue")

penup()
goto(160, 100)
pendown()

begin_fill()

left(20)

forward(50)

right(90)

forward(50)

right(90)

forward(50)

right(90)

forward(50)

end_fill()

#2nd window 

penup()
goto(-90, 100)
pendown()

begin_fill()

forward(50)

right(90)

forward(50)

right(90)

forward(50)

right(90)

forward(50)

end_fill()

#end of the windows

#coloring the grass

color("green")

penup()
goto(330, 0)
pendown()

begin_fill()

left(90)

forward(668)

left(90)

forward(280)

left(90)

forward(668)

left(90)

forward(280)

end_fill()

exitonclick()