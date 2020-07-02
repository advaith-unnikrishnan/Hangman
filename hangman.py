import pygame as pg
import math

#setup display
pg.init()
#width and height of the screen
width,height=800,500
win = pg.display.set_mode((width,height))
pg.display.set_caption("Hangman")

#load images
images=[]
for i in range(7):
    img = pg.image.load('images/hangman'+str(i)+'.png')
    images.append(img)

#button variables
radius=20
gap=10
letters=[]
A=65
startx=round((width-(radius*2+gap)*13)/2)
starty=400
for i in range(26):
    x=startx+(gap+radius*2)*(i%13)
    y=starty+((i//13)*(gap+radius*2))
    letters.append([x,y,chr(A+i),True])

#fonts to display text
letters_font=pg.font.SysFont('opensans',30)

#game variables
hang_status=0

#colors
white=(255,255,255)
black=(0,0,0)

#setup game loop
fps=60 #frames per second
clock=pg.time.Clock()
run=True


def draw():
    #fill the screen with white
    win.fill(white)

    #draw buttons
    for x,y,ltr,visible in letters:
        if visible:
            pg.draw.circle(win,black,(x,y),radius,3)
            txt=letters_font.render(ltr,1,black)
            win.blit(txt,(x-txt.get_width()/2,y-txt.get_height()/2))

    #display hangman images
    win.blit(images[hang_status],(150,100))
    pg.display.update()

while run:
    clock.tick(fps)    

    draw() 
    for event in pg.event.get():
        if event.type == pg.QUIT:
            run=False
        if event.type ==pg.MOUSEBUTTONDOWN:
            m_x,m_y=pg.mouse.get_pos()
            for x,y,ltr,visible in letters:
                if visible:
                    dis=math.sqrt((x-m_x)**2+(m_y-y)**2)
                    if dis<radius:
                       letters[3]=False

#quit the game
pg.quit()
