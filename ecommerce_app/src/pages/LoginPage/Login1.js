import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';


function Login() {
    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    const [username, usernamepost] = useState("");
    const [password, passwordpost] = useState("");
    const navgate = useNavigate();

    const loginuser = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/customer/" + username).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp)
            if (Object.keys(resp).length === 0) {
                alert("enter valid username")
            } else {
                if (resp.password === password) {
                    alert('sucessfully login');
                    sessionStorage.setItem('username', username);
                    navgate('/')
                }
                else {
                    alert("enter valid password")
                }
            }
        }).catch((err) => {
            alert.err("Login fail" + err)
        });
    }
    return (
        <>
        
            <div className="container" id='top' style={{margin:"0px",padding:"0px",backgroundColor:"white", height:"400px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <form onSubmit={loginuser} className="container" style={{marginLeft:"200px", width:"600px",display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                    <div className="card shadow-lg  crd" >
                        <div className="card-header crdh">
                            {/* <div>
                                <h2><span style={{ fontSize: '25px', color: 'rgb(252, 252, 29)' }}>Mini Cart<br /></span>User Login</h2>
                            </div> */}
                        </div>
                        <div className="card-body crdb" >
                            <div className="form-group cb">
                                <label htmlFor="" style={{margin:"0px"}}><strong>User Name</strong></label>
                                <input value={username} onChange={e => usernamepost(e.target.value)} type="text" className="form-control" placeholder='Please enter user name'required />
                            </div>
                            <br></br>
                            <div className="form-group mt-2 cb">
                                <label htmlFor="" style={{margin:"0px"}}><strong>Password</strong></label>
                                <input value={password} onChange={e => passwordpost(e.target.value)} type="password" className="form-control"  placeholder='Please enter password' required/> 
                            </div>
                            <br></br>
                            <div><Link to={'/forgot'} ><strong>Forgot Password?</strong></Link></div>
                        </div>
                        <div className="card-footer crdf" style={{marginTop:"20px"}}>
                            <button type="submit" className="btn btn-primary  bt" style={{marginLeft:"130px",backgroundColor:"green",borderRadius:"10px",width:'70px',height:'40px'}}>Login</button> <br /><br/>
                            <Link style={{border:"curved",marginLeft:"80px"}} className="btn btn-success ms-2  bt" to={'/registration'}><strong>New User?Register here</strong></Link>
                        </div>
                    </div>
                </form>
            </div>

        </>

    )
}
export default Login;