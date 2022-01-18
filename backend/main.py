import os
from datetime import datetime
from src.Camera import Camera
from src.Counter import Counter
from src.Led import Led
from src.Db import Db
from dotenv import load_dotenv

# Read env from .env file
load_dotenv()

# Turn on LED
# TODO: if is too dark check
if os.getenv('DEVICE_LED', 'on') != 'off':
    led = Led()
    led.on()

# Generate filename by current time
now = datetime.now()
time = now.strftime("%Y-%m-%d_%H:%M:%S")
imagesPath = os.path.dirname(os.path.abspath(__file__)) + '/images'
if os.getenv('DEBUG', 'on') == 'on':
    filename = imagesPath + "/" + "counter_" + time + ".png"
else:
    filename = imagesPath + "/" + "test.png"

# Capture an image
if os.getenv('DEBUG', 'on') != 'on':
    camera = Camera(filename)
    image = camera.take_image()

# Extract counter from image
counter = Counter(filename)
digits = counter.get_digits()

# Turn off LED
if os.getenv('DEVICE_LED', 'on') != 'off':
    led.off()

# Insert into database
db = Db()
sql = "INSERT INTO reports (value, device_id, image) VALUES (%s, %s, %s)"
val = (digits, os.getenv('DEVICE_ID'), filename)
db.query(sql, val)

print(digits)
