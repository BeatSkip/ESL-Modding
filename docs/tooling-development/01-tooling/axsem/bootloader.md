---
sidebar_label: Bootloader
title: Bootloader
sidebar_position: 2
---

In order to quickly flash the axsem mcu with new firmware, and to rely as little as possible on the very janky flashing setup that i have. I wanted to have a serial bootloader to just use a serial connection to flash the firmware.

By chance i found a demo bootloader in one of the axsem application notes somewhere on the internet (data is very sparse on this MCU, so cannot remember where i sourced this exactly). All i had to do to get it working with the Vusion board was to change the bootloader selection pin to one that is available on the vusion board. After that it worked like a charm.

The bootloader source can be found in the [axsem bootloader repository](https://github.com/BeatSkip/SES-Imagotag-UU340/tree/main/bootloader).