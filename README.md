command for running the app: 
npx nodemon index.js

PACKAGES:
-express: para crear una app de backend
-dotenv:  para cargar variables de entorno desde un archivo .env.; Las variables de entorno son valores configurables que afectan el comportamiento de una aplicación. Almacenar estas variables en un archivo .env facilita su gestión y configuración, especialmente en entornos de desarrollo local o en implementaciones en diferentes entornos.
-que es una variable de entorno?
valores configurables que se utilizan en
una aplicación para controlar su comportamiento en diferentes entornos.
-las variables de entorno, utilizadas con el paquete dotenv, ofrecen una forma flexible y segura de configurar y controlar el comportamiento de una aplicación en diferentes entornos, mejorando la portabilidad, la seguridad y la colaboración en el desarrollo.
-PORT=8000 es un ejemplo de una variable que puede ser usada para especificar en que puerto se debe escuchar el serv
-.GITIGNORE: .gitignore es usado para
especificar los archivos y directorios que deben ser ignorados por el git, sistema de control de versiones. Es usado para evitar que archivos innecesarios o sensibles sean agregados al repo y compartidos
publicamente. Algunos archivos agregados normalmente son archivos de config local como archivos de credenciales o configuración, archivos
generados en automatico como node_modules,
-NODEMON: Nodemon es una herramienta que se utiliza en el desarrollo de aplicaciones Node.js. Su principal función es reiniciar automáticamente la aplicación cuando se detectan cambios en los archivos de origen, lo que elimina la necesidad de reiniciar manualmente el servidor cada vez que se realiza una modificación en el código.
-NPX: forzamos a la app a usar las librerias
internas configuradas e instaladas
a nivel del proyecto

INSTALLS:
-npm i express dotenv
-npm i -D nodemon
-npm i -D typescript @types express @types/node
-npm i -D webpack webpack-cli webpack-node-externals webpack-shell-plugin
-npm i -D eslint jest ts-jest @types/jest supertest
-npx eslint --init (luego hacemos estas selecciones: check syntax, find problems and enforce..., javascript modules, none, yes, node, use popular guide, standar, 
JSON, yes, npm, 
)
-npx jest --init: (y, node, yes, babel, yes)
-npm run test
-npm i -D serve