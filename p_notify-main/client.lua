--//
    -- TriggerEvent("p_notify:notify", "TITLE", "MESSAGWE", "TYPE")
    -- TYPY:
    -- info,
    -- error,
    -- success,
--//

RegisterNetEvent("p_notify:notify")
AddEventHandler("p_notify:notify", function(title, message, type)
    SendNUIMessage({
        action = "notify",
        title = title,
        message = message,
        type = type or "info",
        id = math.random(1, 1000000000)
    })
end)

Citizen.CreateThread(function()
    while true do
        Wait(0)
    local playerGroup = GetHashKey('PLAYER')
    end
end)

RegisterCommand("test_notify", function()
    TriggerEvent("p_notify:notify", "SUCCESS", "Test Message", "success")
    TriggerEvent("p_notify:notify", "ERROR", "Test Message",  "error")
    TriggerEvent("p_notify:notify", "INFO", "Test Message", "info")
end)

function Notify(title, message, type)

	if sound then 
		SendNUIMessage({

            action = "notify",
            title = title,
            message = message,
            type = type or "info",
            id = math.random(1, 1000000000)
		})
	else
		SendNUIMessage({

            action = "notify",
            title = title,
            message = message,
            type = type or "info",
            id = math.random(1, 1000000000)
		})
	end
end

RegisterNetEvent('p_notify:notify_server')
AddEventHandler('p_notify:notify_server', function(title, message, type)
	Notify(title, message, type)
end)
