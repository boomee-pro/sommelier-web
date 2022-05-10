import { useState } from "react";
import Head from "next/head";
import Image from 'next/image';

import styles from 'styles/auth.module.scss';
import Wine from 'public/wine2.png';

import withoutAuth from "utils/withoutAuth";
import { useAuth } from "contexts/AuthContext";

// ICONS
import { BiEnvelope, BiLockAlt, BiUser } from "react-icons/bi";

const SignUp = () => {

  const { authAction } = useAuth();

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    await sleep(500);
    authAction("sign-up", data).then((err) => setErrors({...err}))
    setLoading(false);
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    
    <section>
      <Head>
        <title>Inscription</title>
        <meta name="description" content="Page de d'inscription" />
      </Head>
      <div className={styles.auth__container}>

        <div className={styles.auth__banner}>
          <Image src={Wine} alt="" layout="fill"/>
        </div>
        
        <div className={styles.form__container}>

          <div className={styles.form}>
            <h2>Inscription</h2>

            <div>
              <div className={styles.split__container}>
                <div className={styles.form__input}>
                  <BiUser size={24} />
                  <input type="text" name="firstName" placeholder='Prénom*'/>
                </div>

                <div className={styles.form__input}>
                  <BiUser size={24} />
                  <input type="text" name="lastName" placeholder='Nom*'/>
                </div>
              </div>



              <div className={styles.form__input}>
                <BiEnvelope size={24}/>
                <input type="text" name="email" placeholder='Adresse e-mail*'/>
              </div>


              <div className={styles.form__input}>
                <BiLockAlt size={24} />
                <input type="password" name="password" placeholder='Mot de passe*' />
              </div>

              <div className={styles.form__input}>
                <BiLockAlt size={24} />
                <input type="password" name="confirmPassword" placeholder='Confirmation mot de passe*' />
              </div>

              <button type="submit">S&apos;inscrire</button>
              
              <p>Vous avez déjà un compte ? <a href="sign-in">Se connecter</a></p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default withoutAuth(SignUp);