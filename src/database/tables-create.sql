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
CREATE TABLE public."Users"
(
    user_info serial NOT NULL,
    email character varying(30) NOT NULL,
    password character varying(30) NOT NULL,
    first_name character(30) NOT NULL,
    last_name character(30) NOT NULL,
    PRIMARY KEY (user_info),
    CONSTRAINT id_fk FOREIGN KEY (user_info)
        REFERENCES public.variables (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."Users"
    OWNER to postgres;
    
ALTER TABLE IF EXISTS public.variables
    OWNER to postgres;