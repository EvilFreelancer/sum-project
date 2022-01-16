import os
from datetime import datetime
from src.Camera import Camera
from src.Counter import Counter
from src.Led import Led
from src.Db import Db

# Settings of device
device_id = 1

# Database settings
db_host = '192.168.1.10'
db_port = 3306
db_name = 'sum'
db_user = 'sum_user'
db_pass = 'sum_pass'

# GPIO settings
gpio_pin = 14

# Turn on LED
led = Led(gpio_pin)
led.on()

# Generate filename by current time
now = datetime.now()
time = now.strftime("%Y-%m-%d_%H:%M:%S")
imagesPath = os.path.dirname(os.path.abspath(__file__)) + '/images'
# filename = imagesPath + "/" + "counter_" + time + ".png"
filename = imagesPath + "/" + "test.png"

# Capture an image
camera = Camera(filename)
image = camera.take_image()

# Extract counter from image
counter = Counter(filename)
digits = counter.get_digits()

# Turn off LED
led = Led(gpio_pin)
led.off()

# Insert into database
db = Db(db_host, db_port, db_name, db_user, db_pass)
sql = "INSERT INTO reports (value, device_id, image) VALUES (%s, %s, %s)"
val = (digits, device_id, filename)
db.query(sql, val)

print(digits)
