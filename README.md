# Repositorio para Frontend

Notas para desarrolladores.

### Cómo descargar el repositorio? 
- Configurar una llave SSH en su perfil de Github. 
- Abrir una terminal e ingresar el comando `git clone git@github.com:JohanAltamar/mintic-next-js-frontend.git`.
- Dentro de la carpeta del proyecto ejecutar el comando `npm install` para instalar las dependencias.
- Iniciar el servidor de desarrollo con el comando `npm run dev`.

### Cómo contribuir al código
- Crear una rama nueva con los comandos:
```
  git checkout master
  git checkout -b <feature | hotfix>/<Jira-ticket-branch-name>
```
por ejemplo:
```
  git checkout master
  git checkout -b feature/E1-3-configurar-repositorio-github
```
- Los commits y títulos de Pull Requests debe seguir la siguiente nomenclatura:
```
< Add | Fix | Remove | Revert > (Jira-Ticket): <description>
```
Por ejemplo: 
```
Add(E1-3): agregar README.md
```
- Los Pull Requests deben tener los siguientes campos:
  - Link al Ticket de Jira.
  - Imágenes si son necesarias.
  - Alguna forma de probar los cambios.
  - Agregar a los compañeros para que revisen el código y dar aviso en el grupo de Whatsapp con el link de la PR.
  - Agregar los labels correspondientes (ready for review, do not merge, WIP: work in progress).
  - Para hacer el _merge_ todas las conversaciones deben estar _**resolved**_.
  - Las conversaciones sólo deben ser resueltas por la persona que las inició. 
  - Antes de subir los cambios, se debe procurar actualizar mi rama con la rama principal usando el comando `git pull master` y resolver los conflictos que se generen. 
  
- Una vez la PR sea aceptada, actualizar su estado en Jira a Complete.

Api Gateway 
https://graphql-gateway-makeares.herokuapp.com/ 

