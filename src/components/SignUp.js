import React , {useEffect, useState} from 'react';
import { validate } from './validate';
import styles from './SignUp.module.css';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "", 
        confirmPassword: "",
        isAccepted: false
    })

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setErrors(validate(data, "signup"))
        // console.log(errors)
    },[data], touched)


    const changeHandeler  = event => {
     if (event.target.name === 'isAccepted') {
        setData({...data, [event.target.name]: event.target.checked})
        } else {
            setData({...data, [event.target.name]:event.target.value})
        }
         console.log(data)
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
                name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true
            })
        }

    }

    return (
        <div className={styles.container}>   
           <form onSubmit={submitHandeler} className={styles.formcontainer}>
            <h2  className={styles.header} > ثبت نام در رمزکده </h2>
                <div className={styles.formField}>
                    <label> نام کاربری </label>
                    <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput }
                     type="text" name="name" value={data.name} onChange={changeHandeler} onFocus={focusHandler} /> 
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>  
                <div className={styles.formField}>
                    <label> ایمیل </label>
                    <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput } 
                    type="text" name="email" value={data.email} onChange={changeHandeler} onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}

                </div>  
                <div className={styles.formField}>
                    <label> رمز عبور </label>
                    <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput } 
                    type="password" name="password" value={data.password} onChange={changeHandeler} onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}

                </div>    
                <div className={styles.formField}>
                    <label> تکرار رمز عبور </label>
                    <input className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput } 
                     type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandeler} onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}

                </div> 
                <div className={styles.formField}>
                   <div className={styles.chekBoxContainer}>
                   <label>قوانین و مقررات را قبول دارم.</label>
                    <input
                     type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandeler} onFocus={focusHandler} />
                   </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}

                </div> 

                <div className={styles.formButtens}>
                    <Link to='/login'> ورود </Link>
                    <button type='submit'> ثبت نام </button>
                </div>
           </form>
        </div>
    );
};

export default SignUp;