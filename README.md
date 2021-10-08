# fastify_clean_architecture
 - Clean Architecture For FastifyJS
# Package
 - FastifyJS 2.15.3
 - bcrypt
 - dotenv
 - fastify-cors
 - fastify-formbody
 - jsonwebtoken
 - knex
 - mysql
 - nodemon
# Alur routes
 - index.js (folder root project)
 - routes.js (folder app/v1)
 - routes.js (folder app/v1/modules/{folder_modules})
# Alur coding modules
 controller -> service -> repository
 - controller untuk interaksi dengan routes
 - service penanganan logic/alur bisnis
 - repository untuk interaksi dengan database
