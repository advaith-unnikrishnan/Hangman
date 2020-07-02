import pygame as pg
import os

pg.init()
#width and height of the screen
width,height=800,500
pg.display.set_mode((width,height))
pg.display.set_caption("HANGMAN")


fps=60 #frames per second
clock=pg.time.Clock(fps)