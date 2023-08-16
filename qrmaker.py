import pyqrcode
url = pyqrcode.create('https://www.gggg.pet/111')
url.svg('uca-url.svg', scale=8)
url.eps('uca-url.eps', scale=2)
print(url.terminal(quiet_zone=1))

# big_code = pyqrcode.create('0987654321', error='L', version=27, mode='binary')
# big_code.png('code.png', scale=6, module_color=[0, 0, 0, 128], background=[0xff, 0xff, 0xcc])
# big_code.show()