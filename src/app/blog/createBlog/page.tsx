"use client";
import { Form, Formik, Field } from "formik";
import { IBlog } from "./type";
import axios from "axios";
import { createBlogValidationSchema } from "./schema/createBlogSchema";
import { useRouter } from "next/navigation";

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export default function CreateBlog() {
    const router = useRouter();

    const onPostBlog = async ({ title, content, author }: IBlog) => {
        try {
            const valuesToSend = { title, content, author };
            const response = await axios.post(
                `${API_BASE_URL}/api/users/blog`,
                valuesToSend
            );
            console.log("Blog created succesfully:", response?.data);
            router.push("/blog");
        } catch (error) {
            console.log(error);
            alert("Failed to create blog. Please try again.");
        }
    };
    return (
        <>
            <section className="flex flex-cols min-h-screen items-center justify-center">
                <Formik
                    initialValues={{
                        title: "",
                        content: "",
                        author: "",
                    }}
                    validationSchema={createBlogValidationSchema}
                    onSubmit={(values) => {
                        onPostBlog({
                            title: values.title,
                            content: values.content,
                            author: values.author,
                        });
                    }}
                >
                    <Form className="fieldset bg-base-200 border-base-300 rounded-box w-lg border p-4">
                        <legend className="fieldset-legend">
                            Create Your Blogs
                        </legend>

                        <label className="label">Blog Title</label>
                        <Field
                            type="text"
                            name="title"
                            className="input"
                            placeholder="Insert your blog's title"
                        />

                        <label className="label">Author</label>
                        <Field
                            type="text"
                            name="author"
                            className="input"
                            placeholder="Name"
                        />

                        <label className="label">Content</label>
                        <Field
                            as="textarea"
                            name="content"
                            className="textarea textarea-bordered h-24 w-full rounded-md"
                            placeholder="Start writing your detailed blog content here..."
                        />

                        <button type="submit" className="btn btn-neutral mt-4">
                            Create
                        </button>
                    </Form>
                </Formik>
            </section>
        </>
    );
}
