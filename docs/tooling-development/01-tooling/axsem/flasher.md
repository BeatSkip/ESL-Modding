---
sidebar_label: Flasher
sidebar_position: 3
---


In order to flash the axsem MCU using the created bootloader, i initially went overboard and created a full blown flasher application using C# and WPF. I wanted to replicate the experience of using a Teensy board, even though successfull, it as a bit overkill for the task at hand. Later on through the absolute laziness of AI i just copied over my C# logic into claude and asked it to generate a simple python script that does the same thing. This was a lot more lightweight and easier to use, so i ended up including that in the repositories of the axsem based firmware. 

the python script can be found in the [ImagoTag-Vusion-custom-firmware/tools/axsem-flasher.py](https://github.com/BeatSkip/ImagoTag-Vusion-custom-firmware/blob/7753e95472078c87ba0b99c74a67283055b9b051/tools/axsem-flasher.py)
