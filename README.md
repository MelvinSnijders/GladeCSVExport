## Windesheim Glade to CSV Chrome extension
Convert a Windesheim Glade (Amazing Challenge SE) to a readable and parsable CSV file.
This is a chrome extension that adds an export button to all glades in the Amazing Challenge of Windesheim SE.

![Screenshot](https://img.melvinsnijders.nl/gVjjCmqK)

## CSV Syntax

This is the same syntax as [this](https://github.com/CalliEve/windesheim_glade) "Taal 20" interpreter uses.
| letter | object         | number                                          |
| ------ | -------------- | ----------------------------------------------- |
| q      | obstacle       |
| x      | bomb           | seconds (steps) till explosions                 |
| t      | target (doel)  | number of target                                |
| m      | money (bonus)  | 2 ^ x is the bonus gained                       |
| d      | turner (draai) | 1-3 times turning to the left, 0 is random turn |
| s      | start          | 0-3 is direction, clock-wise with 0 being north |
| w      | white square   |
| g      | gray square    |
| r      | red square     |
| o      | orange square  |
| y      | yellow square  |
| e      | green square   |
| b      | blue square    |
| p      | purple square  |
| l      | black square   |