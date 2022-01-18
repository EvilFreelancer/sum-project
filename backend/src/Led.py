import os
import RPi.GPIO as GPIO


class Led:

    """Default pin for interact with LED lamp"""
    pin = 14

    def __init__(self):

        if os.getenv('GPIO_PIN') is not None:
            self.pin = int(os.getenv('GPIO_PIN'))

        GPIO.setwarnings(False)
        GPIO.setmode(GPIO.BOARD)
        GPIO.setup(self.pin, GPIO.OUT, initial=GPIO.LOW)

    def on(self):
        GPIO.output(self.pin, GPIO.HIGH)

    def off(self):
        GPIO.output(self.pin, GPIO.LOW)
