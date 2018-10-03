import turtle
import math

shin = turtle.Turtle()

shin.color("#D58486")
shin.speed(15)


for i in range(200):
	shin.forward(math.sqrt(i)*50)
	shin.left(170)
