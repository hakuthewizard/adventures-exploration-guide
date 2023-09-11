import React from 'react';
import { Formik } from 'formik';
import styles from '@/styles/login.module.css';
import Image from 'next/image';
import landingvis from '@/public/landingvis.jpg';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import Head from 'next/head';
const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(!isSubmitted);

  }

  return (
    <div>
      <Head><title>Signup</title></Head>
      <Navbar />
      <div className={styles.loginPage}>
        <Image className={styles.mainimg} src={landingvis} />
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
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
          }) => (
            <div className={styles.leftSide}>
               
               <h1>Your Ultimate Adventure Guide</h1>
<p>Join today to unlock exclusive courses on<br/>
unforgettable outdoor experiences!</p>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
           

              <h2>Signup</h2>
              <label>E-mail address</label>
              <input
                type="email"
                name="email"
                placeholder="your e-mail address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <label>Create password</label>
              <input
                type="password"
                name="create password"
                placeholder="*****"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <label>Confirm password</label>
              <input
                type="password"
                name="confirm password"
                placeholder="*****"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button className={styles.formBtn} onClick={handleFormSubmit} type="submit" disabled={isSubmitting}>
                Submit
              </button>

             
            </form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
