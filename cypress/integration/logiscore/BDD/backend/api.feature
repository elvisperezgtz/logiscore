Feature: Consumo de servicios
    Para poder consumir servicios
    Como usuario
              Yo quiero un framework que me permita ejecutar API's

        Scenario: Servicio obtener token
            Given que el servicio esta en linea
             When se ejecuta el endpoint token
             Then deberia poder ver el status '200' en la respuesta del servicio
    
    