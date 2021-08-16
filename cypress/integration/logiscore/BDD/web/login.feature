Feature: Inicio de sesion

    Como Usuario de la pagina
    Yo quiero una funcionalidad
    Para el inicio de sesion en el sistema


    Background: Abrir el sitio web
        Given Que el usuario se encuentra en el modulo de inicio de sesion

    Scenario: Inicio de sesion exitoso
        When el inicia sesion con sus credenciales
        Then entonces el deberia poder ver el saludo de bienvenida


    Scenario: Inicio de sesion fallido

        When el inicia sesion con credenciales erroneas
        Then el deberia poder el mensaje "Usuario o contraseña incorrectos."



