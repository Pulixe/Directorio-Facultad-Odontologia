# Directorio-Facultad-Odontologia
Este proyecto desarrollado en NodeJs, ANGULAR 11, MYSQL. Con la intención de crear un espacio personal para los estudiantes de la faculta de odontología de la Universida de Panamá, donde se facilite la relación entre paciente y practicantes.

## Ver RAMA master

# Tecnologias
 - NodeJS (framework EXPRESS) (Backend)
 - Angular 11 (Frontend) 
 - Bootstrap 4
 - MYSQL (database)

# Base de datos
Se han creado 2 tablas 
- tabla patients
- tabla practicants

hacen referencia a los pacientes que podran registrar sus necesidades en la plataforma y a los practicantes que podran registrarse en la plataforma y ver a los pacientes que se han postulado para buscar ser atendidos.

# Reglas
1. Solo los practicantes podran acceder a la información de los pacientes, para mantener la privacidad de los pacientes. es necesario y recomendado que se utilize alguna identificador personal unico para los estudiantes de odontologia y utilizarlo como atributo para registrarse en la plataforma.
2. los pacientes solo deben de incluir en el formulario para postularse como paciente. no pueden registrarse como usuario en la plataforma ni tener acceso al tablero de pacientes.

# Logica de archivos
1. dentro de la carpeta server, se encuentra toda la logica relacionada al backend utilizando nodejs framework express para la realizacion de la API
  - la carpta routes y controller definen las rutas de acceso de la API

2. la carpeta frontend, es todo el proyecto en angular 11.
  - se utiliza servicios, en la carpeta services esta la conexion a la API y se hace el itercambio de datos.
  - los metodos CRUD estan definidos en services.patient y service.practicant

3. enfocarse en los componentes para la continuacion de este proyecto.
