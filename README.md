# express-typeorm

```
Up application:
docker-compose -f developer.docker-compose.yml up -d

Down application:
docker-compose -f developer.docker-compose.yml down -v --rmi all

---

Steps to create a server in PgAdmin:

1. Open PgAdmin in the web browser by visiting http://localhost:5433.
2. Log in using your email and password in the docker-compose.yml file.
3. In the left-hand sidebar, click Servers to expand the Servers menu.
4. Right-click on Servers and select Register -> Server.
5. In the General tab of the Create - Server dialog,
we can give the server a name of our choice (docker-postgres).
6. In the Connection tab, fill in the following details:
> Host name/address: postgres
> Port: 5432
> Maintenance database: postgres
> Username: admin
> Password: admin
7. Click Save to save the server configuration.

Reference:

Example using TypeORM with Express
https://typeorm.io/example-with-express

Configure PostgreSQL and pgAdmin with Docker Compose
https://anasdidi.dev/articles/200713-docker-compose-postgres/

Using PlanetScale and TypeORM to build a Node.js REST API
https://blog.tericcabrel.com/using-planetscale-and-typeorm-to-build-a-node-js-rest-api/

```
