from cv2 import cv2
import pytesseract


class Counter:
    """Absolute path to image file"""
    filename = ""

    def __init__(self, filename):
        self.filename = filename

    def get_digits(self):
        image = cv2.imread(self.filename)
        gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        # performing Canny edge detection to remove non essential objects from image
        edges = cv2.Canny(gray_image, 400, 300, apertureSize=3)
        # since findContours affects the original image, we make a copy
        image_ret = edges.copy()

        # converting image to binary
        ret, thresh = cv2.threshold(image_ret, 127, 255, 0)
        # getting the contours

        contours, hierarchy = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

        digits = dict()

        # getting bounding boxes having a minimum area
        # this large area is surely to contain the output values
        for (i, c) in enumerate(contours):
            if cv2.contourArea(c) > 10000:
                (x, y, w, h) = cv2.boundingRect(c)
                roi = thresh[y:y + h, x:x + w]
                digits[i] = roi
                break

        # we just need the numbers
        custom_config = r'--oem 1 --psm 7 outputbase digits -c tessedit_char_whitelist=0123456789'
        output = pytesseract.image_to_string(digits[i], config=custom_config)
        output = filter(str.isdigit, output)

        return "".join(output)
