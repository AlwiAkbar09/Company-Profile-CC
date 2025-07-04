"use client";

import { FaUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Field, Formik, ErrorMessage, Form } from "formik";
import { registerValidationSchema } from "./schema/registerValidationSchema";
import { IUsers } from "./type";
import axios from "axios";
export default function Register() {
    const OnPostRegis = async ({
        username,
        email,
        password,
        role,
    }: IUsers) => {
        try {
            const valuesToSend = { username, email, password, role };

            const response = await axios.post(
                "http://localhost:3000/api/users/register",
                valuesToSend
            );
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className="min-h-screen flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col justify-center items-center gap-5 mt-30">
                    <h1>Create Your Account Here</h1>
                    <FaUser size={24} />
                    <Formik
                        initialValues={{
                            username: "",
                            email: "",
                            password: "",
                            role: "",
                        }}
                        validationSchema={registerValidationSchema}
                        onSubmit={(values) => {
                            OnPostRegis({
                                username: values.username,
                                email: values.email,
                                password: values.password,
                                role: values.role,
                            });
                        }}
                    >
                        <Form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">
                                Register
                            </legend>

                            <label className="label">Username</label>
                            <Field
                                type="text"
                                name="username"
                                className="input"
                                placeholder="Username"
                            />
                            <ErrorMessage
                                name="username"
                                className="text-red-500"
                                component={"div"}
                            />

                            <label className="label">
                                <HiOutlineMail />
                                Email
                            </label>
                            <Field
                                type="text"
                                name="email"
                                className="input"
                                placeholder="Email"
                            />
                            <ErrorMessage
                                name="email"
                                className="text-red-500"
                                component={"div"}
                            />

                            <label className="label">Password</label>
                            <Field
                                type="password"
                                name="password"
                                className="input"
                                placeholder="Password"
                            />
                            <ErrorMessage
                                name="password"
                                className="text-red-500"
                                component={"div"}
                            />

                            <label className="label">User Role</label>
                            <Field
                                as="select"
                                name="role"
                                className="select select-bordered rounded-md w-full text-gray-500/75"
                            >
                                <option value="" disabled>
                                    User Role
                                </option>
                                <option value="STAFF">Staff</option>
                                <option value="MANAGER">Manager</option>
                            </Field>
                            <ErrorMessage
                                name="role"
                                className="text-red-500"
                                component={"div"}
                            />
                            <button
                                type="submit"
                                className="btn btn-neutral mt-4"
                            >
                                Register
                            </button>
                        </Form>
                    </Formik>
                </div>
            </section>
        </>
    );
}
