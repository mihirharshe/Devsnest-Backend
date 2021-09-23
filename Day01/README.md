# REDIS

1) Windows
	- Enable WSL from "Turn Windows features on or off settings"
	- Restart the machine
	- Install Ubuntu20.04 from Windows Store
	- Open Ubuntu and setup name and password
	- Run the following commands:
		```bash
        sudo apt-get update
		sudo apt-get upgrade
		sudo apt-get install redis-server
		sudo service redis-server restart
		redis-cli
        ```

2) Linux
	- Run the commands:
		```bash
        sudo apt-get install redis-server
		sudo service redis-server restart
		redis-cli
        ```

-----------------------------------------------------------------------

USAGE

- SET key value
- GET key
- ttl key
- KEYS *
- DEL key
- FLUSHALL
- EXISTS key
- expire key time
- setex key time value
	

For Arrays

- LPUSH array value
- RPUSH array value
- LRANGE array start stop
- LPOP array
- RPOP array


For Sets

- SADD myset value
- SMEMBERS myset
- SREM myset value


For Objects/Hash

- HSET key field value 
- HGET key field
- HGETALL key
- HDEL key field
- HEXISTS key field


# PostgreSQL

`Get started:`\
-> sudo service postgresql start\
-> psql -U postgres<br><br>

While running the second command, if you face any issues like ``Peer authentication failed``, try these:\
-> sudo service postgresql start\
-> sudo su postgres\
-> psql<br><br>
This will connect you to the user ``postgres`` and the database ``postgres``. The connection type will be ``local`` and the method will be ``peer``.

-> Check list of databases: `\l`\
-> Check list of users: `\du`\
-> Check the current user and database: `\conninfo`\
-> Select/connect to a desired database: `\c {dbname}`\
(If no database name is provided connects to default user "postgres" and database "postgres")<br><br>

-> Create a user: `create user {user-name} with password {pass in ''};`\
(wont work for "")\
-> Create a database: `create database {db}`<br><br>

-> Give permissions to the user: `grant {delete/select/insert/update/all...} privileges on database {database} to {user};`\
-> View granted permissions for the users: `\l`<br><br>

-> Delete a database: `drop database {db};`\
-> Delete an user: `drop use {user-name};`<br><br>

-> Create a table: `create table {tablename}({Column Name} {Data Type} {Constraint});`\
-> List tables: `\d`\
-> View table's data: `\d {tablename}`\
-> Drop a table: `drop table {tablename}`\
