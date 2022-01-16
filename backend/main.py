import os
from datetime import datetime
from src.Camera import Camera
from src.Counter import Counter

# Generate filename by current time
now = datetime.now()
time = now.strftime("%Y-%m-%d_%H:%M:%S")
imagesPath = os.path.dirname(os.path.abspath(__file__)) + '/images'
filename = imagesPath + "/" + "counter_" + time + ".png"
#filename = imagesPath + "/" + "test.png"

# Capture an image
camera = Camera(filename)
image = camera.take_image()

# Extract counter from image
counter = Counter(filename)
digits = counter.get_digits()

print(digits)
