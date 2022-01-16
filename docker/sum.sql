CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `password` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `reports` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `value` integer,
  `device_id` int,
  `image` varchar(255),
  `created_at` datetime,
  `updated_at` datetime
);

CREATE TABLE `devices` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` integer,
  `created_at` datetime,
  `updated_at` datetime
);

ALTER TABLE `reports` ADD FOREIGN KEY (`device_id`) REFERENCES `devices` (`id`);
