CREATE TABLE IF NOT EXISTS enterprises(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS enterprises_discharges(
    e_id BIGINT NOT NULL,
    d_id BIGINT NOT NULL
);
CREATE TABLE IF NOT EXISTS discharges(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS discharges_substances(
    d_id BIGINT NOT NULL,
    s_id BIGINT NOT NULL
);
CREATE TABLE IF NOT EXISTS substances(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS background_concentrations(
    d_id BIGINT NOT NULL,
    s_id BIGINT NOT NULL,
    date DATE NOT NULL,
    concentration INT NOT NULL
);
CREATE TABLE IF NOT EXISTS concentration_limits(
    d_id BIGINT NOT NULL,
    s_id BIGINT NOT NULL,
    date DATE NOT NULL,
    concentration INT NOT NULL
);
CREATE TABLE IF NOT EXISTS discharges_drains(
    dis_id BIGINT NOT NULL,
    drain_id BIGINT NOT NULL
);
CREATE TABLE IF NOT EXISTS drain_concentrations(
    d_id BIGINT NOT NULL,
    s_id BIGINT NOT NULL,
    date DATE NOT NULL,
    concentration INT NOT NULL
);
CREATE TABLE IF NOT EXISTS nonconservativity(
    d_id BIGINT NOT NULL,
    s_id BIGINT NOT NULL,
    date DATE NOT NULL,
    coefficient INT NOT NULL
);

insert into enterprises(name) values
('Enterprise1'),
('Enterprise2'),
('Enterprise3');
insert into enterprises_discharges(e_id, d_id) values
(1, 1),
(2, 2),
(3, 3);
insert into discharges(name) values
('Discharge1'),
('Discharge2'),
('Discharge3');
insert into discharges_substances(d_id, s_id) values
(1, 1),
(1, 3),
(2, 2),
(3, 1),
(3, 2),
(3, 3);
insert into substances(name) values
('H2O'),
('CO2'),
('H2CO3');
insert into background_concentrations(d_id, s_id, date, concentration) values
(1, 1, '2019-05-15', 23),
(1, 2, '2019-05-15', 1),
(1, 3, '2019-05-15', 6),
(2, 1, '2019-05-15', 4),
(2, 2, '2019-05-15', 24),
(2, 3, '2019-05-15', 17),
(3, 1, '2019-05-15', 55),
(3, 2, '2019-05-15', 5),
(3, 3, '2019-05-15', 25);
insert into concentration_limits(d_id, s_id, date, concentration) values
(1, 1, '2019-05-15', 13),
(1, 2, '2019-05-15', 0),
(1, 3, '2019-05-15', 5),
(2, 1, '2019-05-15', 7),
(2, 2, '2019-05-15', 84),
(2, 3, '2019-05-15', 4),
(3, 1, '2019-05-15', 35),
(3, 2, '2019-05-15', 3),
(3, 3, '2019-05-15', 2);
insert into discharges_drains(dis_id, drain_id) values
(1, 1),
(2, 1),
(3, 2);
insert into drain_concentrations(d_id, s_id, date, concentration) values
(1, 1, '2019-05-15', 13),
(1, 2, '2019-05-15', 3),
(1, 3, '2019-05-15', 7),
(2, 1, '2019-05-15', 14),
(2, 2, '2019-05-15', 6),
(2, 3, '2019-05-15', 27);
insert into nonconservativity(d_id, s_id, date, coefficient) values
(1, 1, '2019-05-15', 2),
(1, 2, '2019-05-15', 1),
(1, 3, '2019-05-15', 4),
(2, 1, '2019-05-15', 4),
(2, 2, '2019-05-15', 2),
(2, 3, '2019-05-15', 1),
(3, 1, '2019-05-15', 5),
(3, 2, '2019-05-15', 5),
(3, 3, '2019-05-15', 5);
