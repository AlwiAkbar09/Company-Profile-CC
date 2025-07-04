

"use client";

import { Field, Formik, ErrorMessage, Form } from "formik";
import { loginValidationSchema } from "./schema/loginValidationSchemas";
import { IUsers } from '@/app/auth/register/type'
import axios from "axios";
import { toast } from "react-toastify";
import { authStore } from "@/store/auth.store";


export default function LoginPage() {
    const { setAuth } = authStore();

    const OnPostLogin = async ({
    email,
    password,
  }: Pick<IUsers, 'email' | 'password'>) =>  {
        try {
            const valuesToSend = { email: email.toLowerCase(), password };

            const response = await axios.post(
                "http://localhost:3000/api/users/login",
                valuesToSend
            );
            console.log(response?.data.user);
            toast.success(response?.data?.message, { position: "top-center" });
            setAuth({
                email: response?.data.user?.email,
                username: response?.data?.user?.username,
                role: response?.data?.user?.role,
                objectId: response?.data?.user?.objectId
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <section className="min-h-screen flex flex-col justify-center items-center gap-5">
                <h1>Welcome to Our Website</h1>
                <div>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                        }}
                        validationSchema={loginValidationSchema}
                        onSubmit={(values) => {
                            OnPostLogin({
                                email: values.email,
                                password: values.password,
                            });
                        }}
                    >
                        <Form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend">Login</legend>

                            <label className="label">Email</label>
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

                            <button
                                type="submit"
                                className="btn btn-neutral mt-4"
                            >
                                Login
                            </button>
                        </Form>
                    </Formik>
                </div>
                <div className="flex gap-3">
                    <p>New to our website?</p>
                    <a className="link link-primary" href="register/">
                        Register
                    </a>
                </div>
            </section>
        </>
    );
}
