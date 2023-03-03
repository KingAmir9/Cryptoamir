import React , {useEffect, useState} from 'react';
import { validate } from './validate';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';
const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "", 
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data,"Login"))
        // console.log(errors)
    },[data], touched)


    const changeHandeler  = event => {
            setData({...data, [event.target.name]:event.target.value})
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true })
    }

    const submitHandeler = (event) => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            console.log(data)

        } else{
            setTouched({
                email:true,
                password:true,
            })
        }

    }

    return (
        <div className={styles.container}>   
           <form onSubmit={submitHandeler} className={styles.formcontainer}>
            <h2 className={styles.header}> ورود به حساب کاربری </h2>
                <div className={styles.formField}>
                    <label>ایمیل</label>
                    <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput } 
                    type="text" name="email" value={data.email} onChange={changeHandeler} onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}

                </div>  
                <div className={styles.formField}>
                    <label>رمزعبور</label>
                    <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput } 
                    type="password" name="password" value={data.password} onChange={changeHandeler} onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}

                </div>    
             
                <div className={styles.formButtens}>
                    <Link to='/signup'> ثبت نام </Link>
                    <button type='submit'> ورود </button>
                </div>
           </form>
        </div>
    );
};

export default Login;