## UM-Hackerphone for qb-phone Integration 


- First of all, I am not helping you with the errors you will encounter. It does not have a stable version, so far it seems to be successful in the tests.
- Here I will tell you what and where you need to add it.
- You may experience CSS issues. It is up to you to improve them. I will confirm it if you open PR.
- Enter the application download password in qstore.js. Do not forget to change it.


- STEP 1 : Open index.html and copy/edit inside qb-phone>html>index.html Add it to the bottom of Whatshapp or any App.
- STEP 2 : Open client.lua and copy/edit inside qb-phone>client>client.lua Add it to the bottom line or somewhere convenient for you.
- STEP 3 : Copy hacker.css this path html>css(folder)>paste. 
- STEP 4 : Copy hacker.js this path html>js(folder)>paste. 

- STEP 5 : Open qb-phone Config.lua It should look like the one below.

```
Config.StoreApps = {
    ["territory"] = {
        app = "territory",
        color = "#353b48",
        icon = "fas fa-globe-europe",
        tooltipText = "Territorium",
        tooltipPos = "right",
        style = "";
        job = false,
        blockedjobs = {},
        slot = 15,
        Alerts = 0,
        password = true,
        creator = "QBCore",
        title = "Territory",
    },
    ["hacker"] = {
        app = "hacker",
        color = "#353b48",
        icon = "fas fa-hat-cowboy",
        tooltipText = "Hacker",
        tooltipPos = "bottom",
        style = "";
        job = false,
        blockedjobs = {},
        slot = 18,
        Alerts = 0,
        password = true,
        creator = "UM",
        title = "Hacker CLI",
    },        
}
```

- STEP 6: Market applications are disabled in the original qb-phone. Even if you try to install it, you cannot install it. In order for you to open it, you need to make a small change. Find 

```
RegisterNUICallback('InstallApplication', function(data, cb)
    local ApplicationData = Config.StoreApps[data.app]
    local NewSlot = GetFirstAvailableSlot()

    if not CanDownloadApps then
        return
    end

    if NewSlot <= Config.MaxSlots then
        TriggerServerEvent('qb-phone:server:InstallApplication', {
            app = data.app,
        })
        cb({
            app = data.app,
            data = ApplicationData
        })
    else
        cb(false)
    end
end)
```
- Delete the part I have shown or turn it into a comment line.

```
RegisterNUICallback('InstallApplication', function(data, cb)
    local ApplicationData = Config.StoreApps[data.app]
    local NewSlot = GetFirstAvailableSlot()

    --if not CanDownloadApps then
        --return
    --end

    if NewSlot <= Config.MaxSlots then
        TriggerServerEvent('qb-phone:server:InstallApplication', {
            app = data.app,
        })
        cb({
            app = data.app,
            data = ApplicationData
        })
    else
        cb(false)
    end
end)
```

- Or you can do as follows

```
local CanDownloadApps = false
RegisterNUICallback('InstallApplication', function(data, cb)
    local ApplicationData = Config.StoreApps[data.app]
    local NewSlot = GetFirstAvailableSlot()
    if not CanDownloadApps then
        if NewSlot <= Config.MaxSlots then
            TriggerServerEvent('qb-phone:server:InstallApplication', {
                app = data.app,
            })
            cb({
                app = data.app,
                data = ApplicationData
            })
        else
            cb(false)
        end
    end
end)
```
- ### The licenses belong to their original owners. Their owners licensing policies apply. Please do not use this resource for money.

[Preview](https://streamable.com/kc612z)

[Orjinal Creator Alp1x](https://github.com/alp1x/um-hackerphone)

[Forum CFX](https://forum.cfx.re/t/free-qb-um-hacker-phone/4774707/2)

[Orjinal qb-phone](https://github.com/qbcore-framework/qb-phone)


# License

    QBCore Framework
    Copyright (C) 2021 Joshua Eger and QBCore Maintenance Team Alp1x

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>

