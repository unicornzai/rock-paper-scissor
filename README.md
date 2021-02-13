## Overview

A hide and seek game using two micro:bits.   One micro:bit is hidden, the other is given to a team who use the proximity sensor to find the other micro:bit.  As you get closer the finding the other micro:bit, more leds will light up indicating your closeness.

This is developed utilising the micro:bit radio strength function, which acts as a proximity sensor.

## Requirements:

*  2 x micro:bit

## Usage:

On the beacon micro:bit (i.e the one you are hiding).   Press Button A to start the beacon, which will emit periodic radio signals.

On the second micro:bit, you just have to reset it.  It will automatically start listening and will light up when it receives a radio signal.
