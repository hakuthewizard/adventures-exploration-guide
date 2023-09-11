import React from 'react'
import { Formik } from 'formik';
import styles from '@/styles/login.module.css'
import Image from 'next/image';
import landingvis from '@/public/landingvis.jpg';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

const Login = () => {
  return (
    <div>
      <Head><title>Login</title></Head>
        <Navbar/>
    <div className={styles.loginPage}>
        
        <Image className={styles.mainimg} src={landingvis}/>
        <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <div className={styles.leftSide}>

            <h1>Welcome Back!</h1>
<p>Log in to your Adventure Account<br/>
and continue your epic journey.</p>



         <form className={styles.loginForm} onSubmit={handleSubmit}>
         <h2>Login</h2>
            <label>E-mail address</label>
           <input
             type="email"
             name="email"
             placeholder='your e-mail address'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <label>Password</label>
           <input
             type="password"
             name="Password"
             placeholder='*****'
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
        

           <button className={styles.formBtn} type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </form>
         </div>
       )}
     </Formik>
    </div>
    </div>
  )
}

export default Login;
