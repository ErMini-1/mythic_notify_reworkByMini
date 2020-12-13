# mythic_notify_reworkByMini
Remodelación del script mythic_notify_rework del foro de FiveM. En esta versión se le puede modificar el titulo, la duración, más colores, y la posición

**COLORES:<br>**
success - Verde<br>
inform - Azul<br>
error - Rojo<br>
white - Blanco<br>
dark - Negro<br>
warning - Amarillo<br>
purple - Morado

**POSICIONES:<br>**
top - Arriba a la derecha<br>
center - En medio (derecha)<br>
down-right - Abajo (derecha)<br>

```TRIGGERS DE CLIENTE```<br>
**TriggerEvent('mythic_notify_rework:client:SendAlert', "color", "titulo", "mensaje", duración en milisegundos, posición)**

```TRIGGERS DE SERVIDOR```<br>
__A UN SOLO JUGADOR__<br>
**TriggerEvent('mythic_notify_rework:client:SendAlert', source, "color", "titulo", "mensaje", duración en milisegundos, posición)**

__A TODOS LOS JUGADORES__<br>
**TriggerEvent('mythic_notify_rework:client:SendAlert', -1, "color", "titulo", "mensaje", duración en milisegundos, posición)**
