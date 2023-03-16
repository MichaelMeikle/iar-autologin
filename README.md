# iar-autologin
Automatically launches browser, sets it full screen, and logs in with user provided credentials

## Setup/Installation
- Ensure fresh Pi image
- Setup restart times with crontab -e, at least twice a day
- Install Node/NPM
- Install Xterm
- Copy iar_autolaunch.desktop file into ~/.config/autostart
- Copy autolaunch node files into ~/
- Ensure display blanking is disabled
- Test by resetting Pi device, should automatically launch and login with provided credentials
