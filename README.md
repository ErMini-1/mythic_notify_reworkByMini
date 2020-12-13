# mythic_notify_reworkByMini
Remodelación del script mythic_notify_rework del foro de FiveM. En esta versión se le puede modificar el titulo, la duración, más colores, y la posición

**COLORES:**
success - Verde
inform - Azul
error - Rojo
white - Blanco
dark - Negro
warning - Amarillo
purple - Morado

**POSICIONES:**
top - Arriba a la derecha
center - En medio (derecha)
down-right - Abajo (derecha)

```TRIGGERS DE CLIENTE```
**TriggerEvent('mythic_notify_rework:client:SendAlert', "color", "titulo", "mensaje", duración en milisegundos, posición)**

```TRIGGERS DE SERVIDOR```
__A UN SOLO JUGADOR__
**TriggerEvent('mythic_notify_rework:client:SendAlert', source, "color", "titulo", "mensaje", duración en milisegundos, posición)**

__A TODOS LOS JUGADORES__
**TriggerEvent('mythic_notify_rework:client:SendAlert', -1, "color", "titulo", "mensaje", duración en milisegundos, posición)**
