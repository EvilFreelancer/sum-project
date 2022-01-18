insert into users (username, password, created_at) values ('user1', 'demo', now());
insert into users (username, password, created_at) values ('user2', 'demo', now());
insert into users (username, password, created_at) values ('user3', 'demo', now());

insert into devices (name, created_at) values ('device1', now());
insert into devices (name, created_at) values ('device2', now());

insert into reports (device_id, value, image, created_at) values (1, 1111, 'capture_2022-01-01_12:00:00', now());
insert into reports (device_id, value, image, created_at) values (1, 2222, 'capture_2022-01-01_12:30:00', now());
insert into reports (device_id, value, image, created_at) values (1, 3333, 'capture_2022-01-01_13:00:00', now());
insert into reports (device_id, value, image, created_at) values (1, 4444, 'capture_2022-01-01_12:30:00', now());
