import React from 'react';
import { Formik, Form, FormikValues } from "formik";
import FormikInput from "../components/FormikInput";
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const loginSchema = yup.object().shape({
        email: yup.string().email("Please enter valid email").required("Please enter your email"),
        password: yup.string().min(6, "Please enter your valid password").required("Please enter your password")
    });

    const initialValues = {
        email: '',
        password: ''
    };

    const handleLogin = async (values: FormikValues) => {
        try {
            await login(values.email, values.password);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-full max-w-md flex flex-col items-center justify-center p-6 gap-4 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <Formik
                    validationSchema={loginSchema}
                    initialValues={initialValues}
                    onSubmit={handleLogin}
                >
                    <Form className="w-full space-y-4">
                        <FormikInput 
                            name="email" 
                            label="Email" 
                            type="email"
                            className="w-full border border-gray-500 rounded-md p-2"
                        />
                        <FormikInput 
                            name="password" 
                            label="Password" 
                            type="password"
                            className="w-full border border-gray-500 rounded-md p-2"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Login
                        </button>
                    </Form>
                </Formik>
                <h1>Don&apos;t have an account? <Link to="/register">Register here</Link></h1>
            </div>
        </div>
    )
}

export default Login;