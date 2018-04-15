# OOS-App-Power-Dock-2

## Battery Level Reporting

To read last 24 hours of battery level:

```
logread | grep power-dock | tail -n `echo "24 * 60" | bc -l`
```
