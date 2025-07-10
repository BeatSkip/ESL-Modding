---
sidebar_label: Toolchain
sidebar_position: 1
---

Getting the toolchain working for the Axsem MCU was an absolute pain. My perfectionism would not allow me to keep writing code in visual studio with broken intellisense. So i spent litteral weeks just fiddling with everything to get simple intellisense working. Secondly, a big factor was the compiler i'd be using. There are a couple of options to compile C code for 8051 base MCU's.

8051 compilers:
- SDCC: This is the straight forward open-source choice. It's free and open source and in theory should work fine. I have read however that it has odd bugs, can be very version dependent and does not generate very optimized outputs. 
- Keil: This is the most popular commercial compiler for 8051. Not sure why, but i didn't necessarily look into this one too much.
- IAR8051: This was recommended from multiple source and seems to be a solid choice. It's commercial, but i found references to it on both the axsem and Ti CC resources. Which would allow me to use a single toolchain for both the axsem and CC2538 based devices. I ended up going with this one. But over the course flipped back and forth between SDCC and IAR8051 a couple of times.


To set up the project i went through multiple iterations, first started out with a simple makefile, but for the life of me could not get it working with the IAR8051. After a while i tried using QBS, this worked surprisingly well, but saw the whole QBS project was killed off by Qt. So with the setup still in flux, i managed to find a way to get IAR8051 working with CMake. This is my setup for now. 

the sample 'hello world' project can be found in the [axsem hello world repository](https://github.com/BeatSkip/ImagoTag-Vusion-custom-firmware)