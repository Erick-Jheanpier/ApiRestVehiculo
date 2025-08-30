
## apirest utilizando express + mysql
no ilvide construir la tabla:
```sql
CREATE DATABASE tiendaveh;
use tiendaveh;
create table vehiculos (
id int auto_increment primary key,
marca varchar(30) not null,
modelo varchar(30) not null,
color varchar(30) not null,
precio decimal(9,2) not null,
placa char(7) not null,
constraint uk_placa_veh unique(placa)
)engine=innodb;
insert into vehiculos(marca,modelo,color,precio,placa) values
("nissan","frontier","gris",145000,"abc-111");
modulos requeridos:
```
npm install ezpress mysql2 dotenv nodemon