create database projetoweb;

use projetoweb;

create table users(
id int primary key auto_increment,
username varchar(50) not null,
password varchar(50) not null
);

create table company(
cnpj varchar(50) unique not null,
name varchar(100) not null,
contact varchar(50) not null,
adress varchar(100) not null,
company_sector varchar(50) not null,
is_partner int not null default 0,
stg_id int, 
user_id int,
foreign key (stg_id) references stg(stg_id),
foreign key (user_id) references users(id)
);

create table stg(
stg_id int primary key auto_increment,
name varchar(50) not null,
companies_quantity int
);


