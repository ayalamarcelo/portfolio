# SQL

Es un lenguaje de consulta estructurada (structure query language). Es un lenguaje específico de dominio. Esto quiere decir que está específicamente diseñado para poder administrar, consultar sistemas de gestión de bases de datos.
SQL es un standard, pese a eso los motores como: MySQL, Postgre no son 100% SQL. Son pequeños cambios que puede que te tengas que adaptar fijandote la documentación. Es decir, tienen ligeras variaciones.
SQL es una base de datos relacional. Todas la llamadas familia de sql y las no relacionales, las no-sql. Hablamos de bases de datos relaciones, porque lo que intentamos en este tipo de bd es optimizar y evitar la duplicidad de los datos de forma que creamos relaciones entre las tablas para evitar la duplicidad de los mismos datos. 

SQL:

* Tablas
* Relaciona los datos
* Evitar la duplicidad, evitas la redundancia de datos
* Ocupan menos
`Negativo` Hacer muchas consultas para recuperar toda la informacióm que te interesa
`Positivo` Coherencia

NoSQL:

* Colecciones de documentos
* Puedes relacionar los documentos pero es más costoso

{
    id: 1,
    username: mra_,
    full_username: 'Marcelo Ayala',
    texto: 'Hola mundo'
}

{
    user_id: 1,
    username: mra_,
    full_username: 'Marcelo Ayala'
}

* Consultas más rápidas

`Negativo` Normalizar los datos en problemático, Updates se tienen que hacer en todos los ducumentos, La integridad de los datos no está garantizada
`Positivo` Muchisimo más rápido para hacer consultas, Especialmente consultas grandes
