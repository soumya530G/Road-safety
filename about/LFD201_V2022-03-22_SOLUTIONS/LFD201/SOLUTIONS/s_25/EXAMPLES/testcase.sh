#!/bin/bash
#/* **************** LFD201:2022-02-16 s_25/testcase.sh **************** */
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

echo "Do you want to destroy your entire file system?"
read response

case "$response" in
   "yes")              echo "I hope you know what you are doing!" ;;
   "no" )              echo "You have some comon sense!" ;;
   "y" | "Y" | "YES" ) echo "I hope you know what you are doing!" ;
                       echo 'I am going to type: " rm -rf /"';;
   "n" | "N" | "NO" )  echo "You have some comon sense!" ;;
   *   )               echo "You have to give an answer!" ;;
esac
exit 0
