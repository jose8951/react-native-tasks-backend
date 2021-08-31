create database if not exists tasksdb;

use tasksdb;
crate table if not exists tasks(
    id int not null auto_increment,
    title varchar(50) not null,
    description text,
    PRIMARY KEY (id)
);

insert into tasks(title, description) values
('task1', 'sone descrip'),
('task 2 ', 'description 2'); 

