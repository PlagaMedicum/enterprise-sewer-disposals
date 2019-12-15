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
