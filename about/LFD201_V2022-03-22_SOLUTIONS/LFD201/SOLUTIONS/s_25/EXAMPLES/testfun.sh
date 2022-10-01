#!/bin/bash
#/* **************** LFD201:2022-02-16 s_25/testfun.sh **************** */
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

test_fun1(){
    var=FUN_VAR
    shift
    echo "   PARS after fun shift:   $0 $1 $2 $3 $4 $5"
}

var=MAIN_VAR
echo ' '
echo "BEFORE FUN MAIN, VAR=$var"
echo "   PARS starting in main:  $0 $1 $2 $3 $4 $5"

test_fun1 "$@"
echo "   PARS after fun in main: $0 $1 $2 $3 $4 $5"
echo "AFTER FUN MAIN, VAR=$var"

exit 0
