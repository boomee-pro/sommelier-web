import Head from "next/head";
import Image from 'next/image';
import {useRouter} from "next/router";
import { useState } from "react";

import styles from 'styles/auth.module.scss';
import classNames from "classnames";
import Wine from 'public/wine2.png';

import {useAuth} from 'contexts/AuthContext';
import withoutAuth from "utils/withoutAuth";

// ICONS
import { BiEnvelope, BiLockAlt } from "react-icons/bi";


const SignIn = () => {

  const {login} = useAuth();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({}); 
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await sleep(500);
    login(data).then((err) => setErrors({...err}) )
    setLoading(false);
  }

  const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Connexion</title>
        <meta name="description" content="Page de connexion" />
      </Head>

      <div className={styles.auth__container}>

        <div className={styles.auth__banner}>
          <Image src={Wine} alt="" layout="fill"/>
        </div>
        
        <div className={styles.form__container}>

          <div className={styles.form}>
            <h2>Connexion</h2>

            <form noValidate onSubmit={handleSubmit}>

              <div className={styles.form__input}>
                <BiEnvelope size={24} />
                <input type="text" name="email" className={classNames(errors.email && styles.error)} onChange={handleChange} placeholder='Adresse e-mail'/>
                <small>{errors.email}</small>
              </div>

              <div className={styles.form__input}>
                <BiLockAlt size={24} />
                <input type="password" name="password" className={classNames(errors.password && styles.error)} onChange={handleChange} placeholder='Mot de passe' />
                <small>{errors.password}</small>
              </div>

              <a className={styles.form__forgotten} href="forgot-password">Mot de passe oublié ?</a>

              <button type="submit" disabled={loading}>{loading ? "Chargement..." : "Se connecter"}</button>
              
              <p>Vous n&apos;avez pas encore de compte ? <a href="sign-up">S&apos;inscrire</a></p>

            </form>
          </div>


        </div>

      </div>

    </>
  )
}

export default withoutAuth(SignIn);