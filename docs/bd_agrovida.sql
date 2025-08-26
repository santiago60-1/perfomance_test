create database if not exists bd_agrovida;
use bd_agrovida;


create table sensors (
id_sensors int not null primary key auto_increment,
sensor_status varchar(45),
created_at timestamp default current_timestamp,
update_at timestamp default current_timestamp on update current_timestamp
);

create table monitoring_sensors (

id_sensors_monitoring int not null primary key auto_increment,
sensor_type varchar(100) not null,
risk_system varchar(100) not null,
id_sensors int,
foreign key(id_sensors)references sensors (id_sensors) on delete set null on update cascade
);

create table organic_farm (
id_organic int not null primary key auto_increment,
abreviature varchar(45),
created_at timestamp default current_timestamp,
update_at timestamp default current_timestamp on update current_timestamp
);

create table maintenance (
id_maintenance int not null primary key auto_increment,
fertilizer varchar(100) not null,
date_ date not null,
created_at timestamp default current_timestamp,
update_at timestamp default current_timestamp on update current_timestamp
);

create table pryce_cultive (
id_pryce_cultive int not null primary key auto_increment,
value_ decimal(4,2) not null,
crop_type varchar(100)
);

create table production_reports (
id_reports int not null primary key auto_increment,
id_pryce_cultive int,
date_time datetime not null,
production_tons int not null,
created_at timestamp default current_timestamp,
update_at timestamp default current_timestamp on update current_timestamp,
foreign key(id_pryce_cultive) references pryce_cultive (id_pryce_cultive)
);

create table farms (
id_farm int not null primary key auto_increment,
name_ varchar(100) not null,
region varchar(100),
technical_manager varchar(100) not null,
soil_type varchar(100),
id_organic int,
id_sensors int,
id_maintenance int,
id_reports int,
created_at timestamp default current_timestamp,
update_at timestamp default current_timestamp on update current_timestamp,
foreign key(id_organic) references organic_farm(id_organic),
foreign key(id_sensors) references sensors (id_sensors),
foreign key(id_maintenance) references maintenance (id_maintenance),
foreign key(id_reports) references production_reports(id_reports)
);