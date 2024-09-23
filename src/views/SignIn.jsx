import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Logo from "./Logo";
import { Login } from "../API/endpoint/signIn";
import { getProfile } from "../API/endpoint/profile";
import toast, { Toaster } from 'react-hot-toast';
import { setCredintial } from "../helpers";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required")
  });

  const handleSubmit = async (values) => {
    try {
      const response = await Login(values);
      if (response.status !== 200) {
        toast.error('Login Failed');
      } else {
        toast.success('Login success')
        setCredintial(response)
        setTimeout(()=>{
          navigate('/');
        },1000)
        getUser()

      }
    } catch (error) {
      toast.error('Login Failed');
    }
  };
  const getUser = async () => {
    try {
      const response = await getProfile(); 
      const data = response.data.data;
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="w-11/12 h-[68px] py-[20px] px-[3px]">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="max-w-md w-full mx-auto p-5 text-center font-sans">
          <h2 className="mb-5 text-2xl">Sign in</h2>
          <Formik
            initialValues={{ email: "", password: "", keepSignedIn: false }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col space-y-4">
                <div className="text-left">
                  <label htmlFor="email" className="block mb-1 text-sm">
                    Email address
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 mb-1 bg-gray-200 rounded border-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="password" className="block mb-1 text-sm">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="w-full p-2 mb-1 bg-gray-200 rounded border-none pr-10"
                    />
                    <i
                      className={`fa-regular ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      } absolute right-4 text-gray-600 cursor-pointer`}
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        top: "40%",
                        transform: "translateY(-50%)"
                      }}
                    ></i>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      id="keepSignedIn"
                      name="keepSignedIn"
                      className="mr-2"
                    />
                    <label
                      htmlFor="keepSignedIn"
                      className="text-sm text-gray-700"
                    >
                      Keep me signed in
                    </label>
                  </div>
                  <Link
                    to="#"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 rounded font-medium mb-3 hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Login"}
                </button>

                <div className="flex items-center my-5">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-2 text-sm text-gray-600">
                    or use one of these options
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
              </Form>
            )}
          </Formik>
          <p className="mt-5 text-sm text-gray-700">
            Don’t have an account?{" "}
            <Link to="/Register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
