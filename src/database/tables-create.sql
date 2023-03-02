CREATE TABLE public.parameters
(
    baldness boolean NOT NULL,
    freackless boolean NOT NULL,
    eye_color integer NOT NULL,
    skin_color integer NOT NULL,
    sex boolean NOT NULL,
    name character(200) NOT NULL,
    id smallserial NOT NULL,
    PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.parameters
    OWNER to postgres;

COMMENT ON TABLE public.parameters
    IS 'this table will contain the parameters for a punnett square prediction';

CREATE TABLE public.skin_colors
(
    id smallserial NOT NULL,
    skin_color character(200) NOT NULL,
    PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.skin_colors
    OWNER to postgres;

COMMENT ON TABLE public.skin_colors
    IS 'this table will contain the possible skin colors';


CREATE TABLE public.eye_colors
(
    id smallserial NOT NULL,
    eye_color character(50) NOT NULL,
    PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.eye_colors
    OWNER to postgres;

COMMENT ON TABLE public.eye_colors
    IS 'container for all different eye colors options ';

ALTER TABLE IF EXISTS public.parameters
    ADD CONSTRAINT "parameters_eye_colorsFK" FOREIGN KEY (eye_color)
    REFERENCES public.eye_colors (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.parameters
    ADD CONSTRAINT "parameters_skin_colorsFK" FOREIGN KEY (skin_color)
    REFERENCES public.skin_colors (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

CREATE TABLE public.punnet_square_results
(
    id smallserial NOT NULL,
    subject_one integer NOT NULL,
    subject_two integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT "parameters_result_subject_oneFK" FOREIGN KEY (subject_one)
        REFERENCES public.parameters (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "parameters_result_subject_twoFK" FOREIGN KEY (subject_two)
        REFERENCES public.parameters (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.punnet_square_results
    OWNER to postgres;

COMMENT ON TABLE public.punnet_square_results
    IS 'this table will contain the result for all punnett square cross tables';

CREATE TABLE public.punnett_square_results_detail
(
    id smallserial NOT NULL,
    result_id integer NOT NULL,
    parameter_value character(200) NOT NULL,
    chance_percentage integer NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT "punnet_square_results_detailFK" FOREIGN KEY (result_id)
        REFERENCES public.punnet_square_results (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.punnett_square_results_detail
    OWNER to postgres;
COMMENT ON TABLE public.punnett_square_results_detail
    IS 'this table contains the detail of the results and will be used to render the result';

