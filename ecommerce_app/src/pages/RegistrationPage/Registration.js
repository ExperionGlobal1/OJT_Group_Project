import { useFormik } from "formik";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import { message } from "./ErrorMessage";
import './Registration.css'

const Component2 = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            id: "",
            name: "",
            email: "",
            phoneNo: "",
            password: "",
            cpassword: "",
        },
        validationSchema: Yup.object({

            id: Yup.string()
                .min(2, "must be atleast 2 characters")
                .max(10, "must be less than 10 characters ")
                .required("Username cannot be null"),


            name: Yup.string()
                .min(3, "Must be at least 3 characters")
                .max(15, "Must be 15 characters or less")
                .required(message.required),


            password: Yup.string()
                .min(8, "Must be atleast 8 characters")
                .required("password is required"),


            email: Yup.string()
                .email(message.email)
                .required("Email is Required"),


            phoneNo: Yup.string()
                .matches(
                    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                    "Not a valid phone number"
                )
                .required("Phone No. is Required"),

            cpassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: (values) => {
            //   alert(JSON.stringify(values, null, 2));
            console.log(values)
            fetch("http://localhost:3000/customer", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(values)
            }).then((res) => {
                alert("Registered Successfully")
                navigate('/login');
            }).catch((err) => {
                alert("Registeration failed")
            });
        },
        validateOnMount: true,
        enableReinitialize: true,
    });

    return (
        <>
            <div className="background">
                <h2>User Registration</h2>
                <form onSubmit={formik.handleSubmit}>

                    <div className="form-group" >
                        <label htmlFor="name">User Name</label>
                        <input id="id" className="form-control" type="text" {...formik.getFieldProps("id")} placeholder='Enter User name' />
                        {/* {formik.touched.id && !formik.errors.id ? <>✅</> : <>❎</>} */}
                        {formik.touched.id && formik.errors.id && (
                            <span style={{ color: 'red' }} >{formik.errors.id}</span>)}
                    </div>
                    <br></br>
                    <div className="form-group" >
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text" className="form-control" {...formik.getFieldProps("email")} placeholder='Enter email' />
                        {/* {formik.touched.email && formik.errors.email ? <>✅</> : <>❎</>} */}
                        {formik.touched.email && formik.errors.email && (
                            <span style={{ color: 'red' }}>{formik.errors.email}</span>)}
                    </div>
                    <br></br>
                    <div className="form-group" >
                        <label htmlFor="name">Full Name</label>
                        <input id="name" className="form-control" type="text" {...formik.getFieldProps("name")} placeholder='Enter Full Name' />
                        {/* {formik.touched.name && !formik.errors.name ? <>✅</> : <>❎</>} */}
                        {formik.touched.name && formik.errors.name && (
                            <span style={{ color: 'red' }}>{formik.errors.name}</span>)}
                    </div>
                    <div className="form-group" >
                        <label htmlFor="phoneNo">Phone Number</label>
                        <input id="phoneNo" type="text" className="form-control" {...formik.getFieldProps("phoneNo")} placeholder='Enter Phone No' />
                        {/* {formik.touched.phoneNo && formik.errors.phoneNo ? <>✅</> : <>❎</>} */}
                        {formik.touched.phoneNo && formik.errors.phoneNo && (
                            <span style={{ color: 'red' }}>{formik.errors.phoneNo}</span>)}
                    </div>
                    <br></br>
                    <div className="form-group" >
                        <label htmlFor="phoneNo">Password</label>
                        <input id="password" type="password" className="form-control" {...formik.getFieldProps("password")} placeholder='Must be atleast 8 characters ' />
                        {/* {formik.touched.password && formik.errors.password ? <>✅</> : <>❎</>} */}
                        {formik.touched.password && formik.errors.password && (
                            <span style={{ color: 'red' }}>{formik.errors.password}</span>)}
                    </div>
                    <div className="form-group" >
                        <label htmlFor="phoneNo">Confirm Password</label>
                        <input id="cpassword" type="password" className="form-control" {...formik.getFieldProps("cpassword")} />
                        {/* {formik.touched.password && formik.errors.password ? <>✅</> : <>❎</>} */}
                        {/* {formik.touched.password && formik.errors.password && (
                                        <span style={{ color: 'red' }}>{formik.errors.password}</span>)} */}
                    </div>
                    <div className="card-footer crdfr">
                        <button type="submit" className="btn btn-primary btr">Submit</button>
                        <button className="btn btn-primary btr"><Link to={'/login'} >Close</Link></button>
                    </div>
                </form >
            </div >
        </>
    );
};

export default Component2;