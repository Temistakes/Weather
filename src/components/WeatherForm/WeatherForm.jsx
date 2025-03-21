import React from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import RoundBtn from "../general/RoundBtn/RoundBtn";
import cls from "classnames";

const FormStyled = styled.div`
    margin-bottom: 2.625rem;

    .input-group {
        display: flex;
        align-items: center;
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        background-blend-mode: multiply;
        border-radius: 3.44rem;
        padding-right: 1rem;
        border: 2px solid rgba(255, 255, 255, 0.1);
        transition: border-color 0.3s ease;

        .input {
            width: 100%;
            padding: 1.125rem 1rem 1.125rem 2.5rem;
            font-size: 1.88rem;

            &::placeholder {
                color: rgba(255, 255, 255, 0.3);
            }
        }

        &.error {
            border-color: tomato;
        }
    }
`;

export default function WeatherForm({ getData }) {
    function handleSubmit(values) {
        getData(values.name);
    }

    const validationSchema = yup.object().shape({
        name: yup.string().required("Данная строка обязательна"),
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
                <FormStyled>
                    <Form>
                        <div
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
                            <RoundBtn
                                style={{ color: "black" }}
                                className={"submit-btn"}
                                cls="fa-lg fa-solid fa-magnifying-glass"
                            ></RoundBtn>
                        </div>
                    </Form>
                </FormStyled>
            )}
        </Formik>
    );
}
