# CodeChallenge

CodeChallenge para LaunchX - Innovacion Virtual.

**Requerimientos:**

- Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
- Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
- Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.

**Dependencias:**
- Jest
Para el testing
- Express
Se utiliza para poder crear los endpoints requeridos
- Linter
Para revision del codigo y formato de este.

**Ejecutar localmente:**

- Clonar repositorio
- Instalar dependencias:
    ```
	npm install express --save-dev
	npm install jest --save-dev
	npm install eslint --save-dev
	```
- Correr pruebas para asegurarse que el codigo este funcionando correctamente.  
Se agregaron 2 set de pruebas, dependiendo del sistema operativo:
    ```
	# Para computadoras con Windows:
	npm run test_windows
	
	# Para equipos Linux/MacOS:
	npm run test
	```
**Acceder a los endpoints:**  
Esto se puede hacer con [postman](https://www.postman.com), [hoppscotch](https://hoppscotch.io/es/) o tu navegador web usando las siguientes URL:
- http://localhost:3000/v1/students/  
    Para obtener todos los estudiantes
- http://localhost:3000/v1/students/certified  
    Obtener solo estudiantes certificados
- http://localhost:3000/v1/students/credits/:credits  
    Este endpoint es ligeramente distinto al requerimento. En lugar de obtener solo los estudiantes que tienen mas de 500 creditos, 
    se le pide al usuario que ingrese un numero (sustituyendo ":credits" por la cantidad de creditos). Se obtendran todos los estudiantes que tengas una cantidad
    mayor a esa cantidad de puntos. Por ejemplo, para el requerimento se podria usar lo siguiente: http://localhost:3000/v1/students/credits/500
