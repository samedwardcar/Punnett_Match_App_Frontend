CREATE TABLE public.variables
(
    user_id serial NOT NULL,
    f_freackless boolean NOT NULL,
    m_freackless boolean NOT NULL,
    f_bald boolean NOT NULL,
    m_bald boolean NOT NULL,
    f_dimples boolean NOT NULL,
    m_dimples boolean NOT NULL,
    PRIMARY KEY (user_id)
);

ALTER TABLE IF EXISTS public.variables
    OWNER to postgres;