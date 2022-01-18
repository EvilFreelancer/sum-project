from cv2 import cv2


class Camera:
    """Absolute path to image file"""
    filename = ""

    def __init__(self, filename):
        self.filename = filename

    def take_image(self):
        # Initialize the camera
        cam_port = 0
        cam = cv2.VideoCapture(cam_port)
        cam.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)
        cam.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)
        cam.set(cv2.CAP_PROP_AUTOFOCUS, 0)  # turn the autofocus off
        cam.set(cv2.CAP_PROP_FOCUS, 5)

        # Reading the input using the camera
        result, image = cam.read()

        # Saving image in local storage
        cv2.imwrite(self.filename, image)

        # Return image object back
        return image

    def read_image(self):
        # Using cv2.imread() method
        image = cv2.imread(self.filename)

        # Return image object back
        return image
