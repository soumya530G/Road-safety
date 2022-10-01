#!/bin/bash
#/* **************** LFD201:2022-02-16 s_26/lab_setuid.sh **************** */
#/*
# * The code herein is: Copyright the Linux Foundation, 2022
# *
# * This Copyright is retained for the purpose of protecting free
# * redistribution of source.
# *
# *     URL:    https://training.linuxfoundation.org
# *     email:  info@linuxfoundation.org
# *
# * This code is distributed under Version 2 of the GNU General Public
# * License, which you should have received with the source.
# *
# */
#!/bin/bash

set -x

gcc -o lab3_write -O2 lab_write.c
