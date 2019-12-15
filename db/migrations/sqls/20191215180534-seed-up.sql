CREATE TABLE IF NOT EXISTS enterprises(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);
DROP TABLE IF EXISTS enterprises_discharges;
DROP TABLE IF EXISTS discharges;
DROP TABLE IF EXISTS background_concentrations;
DROP TABLE IF EXISTS concentration_limits;
DROP TABLE IF EXISTS discharges_drains;
DROP TABLE IF EXISTS drain_concentrations;
