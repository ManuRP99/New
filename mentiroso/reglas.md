

-ELEMENTOS

	n manos , cada una []

	baraja[ 4 de cada numero 1-10]

	monton []

	buffer []
TURNOS

	__mostrar mano anterior?*

	elegir N 

	elegir N cartas para tirar

	elegir n para mentir
	
		*Mano anterior

			if  verdad 
				monton => mano
			else 
				monton => otra mano
		

FIN 
	if mano1 o mano2 esta vacía


PLAN

	0-  arrays para n manos, monton(como añadir al monton?), baraja
	1-  funcion que genere una baraja con 4 de cada numero 
	2-  funcion que reparta la baraja entre n manos(contar mano)
	3-  funcion que muestre la mano de un jugador
	4-  funcion que selec n cartas y mentira, =>monton,buffer, del
	5-  win condition = any mano.length = 0
	
	
PROGRESO
	
	crear manos 
	crear baraja {carta: N, color: '', libre: boo}  boo is for the scramble
	asignar colores
	scramble
	interfaz turno
	// function tirar
	





		"join(' ') to log tables without commas
		




