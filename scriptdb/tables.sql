--Database name: schedule


-- Table: public.persona

-- DROP TABLE public.persona;

CREATE TABLE public.persona
(
    persona_id integer NOT NULL DEFAULT nextval('persona_persona_id_seq'::regclass),
    nombre character varying(50) COLLATE pg_catalog."default",
    apellidos character varying(50) COLLATE pg_catalog."default",
    created_date date DEFAULT NOW(),
    CONSTRAINT persona_pkey PRIMARY KEY (persona_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.persona
    OWNER to postgres;