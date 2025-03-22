import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import cls from "classnames";
import { S_WeatherForm } from "./WeatherFormStyles";
import { S_RoundBtn, S_InputGroup } from "../../styles/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeatherForm({ getData }) {
    function handleSubmit(values) {
        getData(values.name);
    }

    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required("Данная строка обязательна")
            .max(50, "Слишком большая длина города"),
    });

    return (
        <Formik
            initialValues={{
                name: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ values, touched, errors }) => (
                <S_WeatherForm>
                    <Form>
                        <S_InputGroup
                            className={cls("input-group", {
                                error: errors.name && touched.name,
                            })}
                        >
                            <Field
                                name="name"
                                value={values.name}
                                placeholder="Search.."
                                type="text"
                                className="input"
                            />
                            <S_RoundBtn>
                                <FontAwesomeIcon
                                    icon={["fas", "magnifying-glass"]}
                                    size="lg"
                                />
                            </S_RoundBtn>
                        </S_InputGroup>
                    </Form>
                </S_WeatherForm>
            )}
        </Formik>
    );
}
