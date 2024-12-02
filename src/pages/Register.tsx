import axios from "axios";
import { Form, Formik, FormikValues } from "formik";
import * as yup from "yup";
import FormikInput from "../components/FormikInput";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const registerSchema = yup.object().shape({
        email: yup.string().email("Please enter valid email").required("Please enter your email"),
        username: yup.string().min(6, "Please enter your valid username").required("Please enter your username"),
        password: yup.string().min(6, "Please enter your valid password").required("Please enter your password")
    });

    const initialValues = {
        email: '',
        username: '',
        password: ''
    }

    const handleRegister = async (value: FormikValues) => {
        try {
            const { data } = await axios.post('http://localhost:3000/users', value)
            console.log(data);
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="w-full h-full flex justify-center items-center">
        <div className="w-full max-w-md flex flex-col items-center justify-center p-6 gap-4 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <Formik
                validationSchema={registerSchema}
                initialValues={initialValues}
                onSubmit={(value) => {
                    handleRegister(value)
                }}
            >
                <Form className="w-full space-y-4">
                    <FormikInput 
                        name="email" 
                        label="Email" 
                        type="email"
                        className="w-full border border-gray-500 rounded-md p-2"
                    />
                    <FormikInput 
                        name="username" 
                        label="Username"
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
            <h1>Already have an account? <Link to="/login">Login here</Link></h1>
        </div>
    </div>
  )
}

export default Register