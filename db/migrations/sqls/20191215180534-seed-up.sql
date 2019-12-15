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
CREATE TABLE IF NOT EXISTS background_concentrations(
    id BIGINT NOT NULL,
    date DATE NOT NULL,
    concentration INT NOT NULL
);
CREATE TABLE IF NOT EXISTS concentration_limits(
    id BIGINT NOT NULL,
    date DATE NOT NULL,
    concentration INT NOT NULL
);
CREATE TABLE IF NOT EXISTS discharges_drains(
    dis_id BIGINT NOT NULL,
    drain_id BIGINT NOT NULL
);
CREATE TABLE IF NOT EXISTS drain_concentrations(
    id BIGINT NOT NULL,
    date DATE NOT NULL,
    concentration INT NOT NULL
);
