#!/bin/bash
#/* **************** LFD201:2022-02-16 s_25/lab_nproc.sh **************** */
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
#!/bin/sh

set -x

########################################################*****
nproc=$(ps | wc -l)

nproc=$(($nproc - 1 ))
# or nproc=$(expr $nproc - 1)

echo "You are running $nproc processes"
#exit 0
########################################################*****

#one line, method 1
echo "You are running $( expr $(ps | wc -l) - 1 )  processes" 

########################################################*****

#one line, method 2
echo "You are running $((     $(ps | wc -l) - 1 )) processes" 

########################################################*****
