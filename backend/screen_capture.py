import os
import pygame.camera
from datetime import datetime

# initializing the camera
pygame.camera.init()

# make the list of all available cameras
camlist = pygame.camera.list_cameras()

# if camera is detected or not
if camlist:

    # initializing the cam variable with default camera
    cam = pygame.camera.Camera(camlist[0], (800, 600))

    # opening the camera
    cam.start()

    # capturing the single image
    image = cam.get_image()

    # Get current datetime
    now = datetime.now()

    # Generate string with date and time
    time = now.strftime("%Y-%m-%d_%H:%M:%S")

    # Generate absolute path to images folder
    imagesPath = os.path.dirname(os.path.abspath(__file__)) + '/images'

    # saving the image
    pygame.image.save(image, imagesPath + "/" + "counter_" + time + ".jpg")

# if camera is not detected the moving to else part
else:
    print("No camera on current device")
