---Hacker App Uyuyorum_hackerphone
--- Add Phone Client


RegisterNUICallback("qb-phone:hackerApp:OpenPhone", function()
    SendNUIMessage({HackerPhoneNui = 'open'})
end)

RegisterNUICallback('qb-phone:hackerApp:blackout', function()
    TriggerServerEvent('qb-weathersync:server:toggleBlackout')
end)

RegisterNUICallback("qb-phone:hackerApp:targetinformation", function()
    TriggerServerEvent('qb-phone:hackerApp:server:targetinformation')
end)


RegisterNUICallback("qb-phone:hackerApp:vehiclehealth", function()
	local vehicle = QBCore.Functions.GetClosestVehicle()
	if vehicle ~= nil and vehicle ~= 0 then
		local ped = PlayerPedId()
		local pos = GetEntityCoords(ped)
		local vehpos = GetEntityCoords(vehicle)
		if #(pos - vehpos) < 20 then
        AddExplosion(vehpos.x, vehpos.y, vehpos.z, 5, 50.0, true, false, true)
        else
           TriggerEvent('qb-phone:hackerApp:client:notify"')
		end
    end
end)

RegisterNetEvent("qb-phone:hackerApp:client:targetinfornui", function(targetinfo)
    SendNUIMessage({HackerPhoneTargetNui = 'open',targetinformation = targetinfo})
end)

RegisterNetEvent("qb-phone:hackerApp:client:notify", function()
    SendNUIMessage({HackerPhoneNotifyNui = 'open'})
end)
