# import sys
# print('Hello from Python!')
# sys.stdout.flush()

import time

i = 0
while True:
    print(i, flush=True)
    i+=1
    time.sleep(1)