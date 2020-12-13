RegisterNetEvent('mythic_notify_rework:client:SendAlert')
AddEventHandler('mythic_notify_rework:client:SendAlert', function(type, title, text, length, position, style)
	SendAlert(type, title, text, length, position, style)
end)

RegisterNetEvent('mythic_notify_rework:client:PersistentHudText')
AddEventHandler('mythic_notify_rework:client:PersistentHudText', function(data)
	PersistentHudText(data.action, data.id, data.type, data.text, data.style)
end)

function DoShortHudText(type, text, style)
	SendNUIMessage({
		type = type,
		text = text,
		length = 1000,
		style = style
	})
end

function SendAlert(type, title, text, length, position, style)
	SendNUIMessage({
		type = type,
		title = title,
		text = text,
		length = length,
		position = position,
		style = style
	})
end

function DoHudText(type, text, style)
	SendNUIMessage({
		type = type,
		text = text,
		length = 2500,
		style = style
	})
end

function DoLongHudText(type, text, style)
	SendNUIMessage({
		type = type,
		text = text,
		length = 5000,
		style = style
	})
end

function DoCustomHudText(type, text, length, style)
	SendNUIMessage({
		type = type,
		text = text,
		length = length,
		style = style
	})
end

RegisterCommand('errortext', function()
	SendAlert("inform", "Kevin", "Has cobrado tu cheque de 500$", 2500, "top")
end)


function PersistentHudText(action, id, type, text, style)
	if action:upper() == 'START' then
		SendNUIMessage({
			persist = action,
			id = id,
			type = type,
			text = text,
			style = style
		})
	elseif action:upper() == 'END' then
		SendNUIMessage({
			persist = action,
			id = id
		})
	end
end