import turtle

shin = turtle.Turtle()
shin.getscreen().bgcolor("#D58486")
shin.speed(10)
shin.penup()
shin.goto((-200,100))
shin.pendown()

def star(turtle, size):
	if size <= 10:
		return
	else:
		turtle.begin_fill()
		for i in range(5):

			turtle.forward(size)
			star(turtle, size/3)
			turtle.left(216)
		turtle.end_fill()

star(shin, 360)