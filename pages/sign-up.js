import Head from "next/head";
import Image from 'next/image';

import styles from 'styles/auth.module.scss';
import Wine from 'public/wine2.png';

import withoutAuth from "utils/withoutAuth";

// ICONS
import { BiEnvelope, BiLockAlt, BiUser } from "react-icons/bi";

const SignUp = () => {

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

          <div className={styles.form__container}>
            <h2>Inscription</h2>

            <div>
              <div className={styles.split__container}>
                <div className={styles.form__input}>
                  <BiUser size={24} />
                  <input type="text" placeholder='Prénom*'/>
                </div>

                <div className={styles.form__input}>
                  <BiUser size={24} />
                  <input type="text" placeholder='Nom*'/>
                </div>
              </div>



              <div className={styles.form__input}>
                <BiEnvelope size={24}/>
                <input type="text" placeholder='Adresse e-mail*'/>
              </div>


              <div className={styles.form__input}>
                <BiLockAlt size={24} />
                <input type="password" placeholder='Mot de passe*' />
              </div>

              <div className={styles.form__input}>
                <BiLockAlt size={24} />
                <input type="password" placeholder='Confirmation mot de passe*' />
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