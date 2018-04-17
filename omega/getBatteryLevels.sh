#!/bin/sh

logread | grep "power-dock2\[" | tail -n `echo "24 * 60" | bc -l`

