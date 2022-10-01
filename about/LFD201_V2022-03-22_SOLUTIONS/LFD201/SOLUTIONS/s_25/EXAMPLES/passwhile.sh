#!/bin/bash
#/* **************** LFD201:2022-02-16 s_25/passwhile.sh **************** */
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

ntry_max=4 ; ntry=0 ; password=' '

while [[ $ntry -lt $ntry_max ]] ; do

   ntry=$(( $ntry + 1 ))
   echo -n 'Give password:  '
   read password
   if  [[ $password == "linux" ]] ; then
       echo "Congratulations: You gave the right password on try $ntry!"
       exit 0
   fi
   echo "You failed on try $ntry; try again!"

done

echo "you failed $ntry_max times; giving up"
exit -1
