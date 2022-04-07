import Head from "next/head";
import styles from "styles/auth.module.scss";
import Image from "next/image";
import Wine from "public/wine2.png";

export default function SignUp() {
  return (
    <section>
      <Head>
        <title>Inscription</title>
        <meta name="description" content="Page de d'inscription" />
      </Head>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src={Wine} alt="" layout="fill" />
        </div>

        <div className={styles.dataContainer}>
          <div className={styles.data}>
            <h2>Inscription</h2>

            <div>
              <div className={styles.splitGroup}>
                <div className={styles.inputGroup}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#797979"
                  >
                    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
                  </svg>
                  <input type="text" placeholder="Prénom*" />
                </div>

                <div className={styles.inputGroup}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#797979"
                  >
                    <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
                  </svg>
                  <input type="text" placeholder="Nom*" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#797979"
                  width="24"
                  height="24"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
                </svg>
                <input type="text" placeholder="Adresse e-mail*" />
              </div>

              <div className={styles.inputGroup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#797979"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
                </svg>
                <input type="password" placeholder="Mot de passe*" />
              </div>

              <div className={styles.inputGroup}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#797979"
                  width="24"
                  height="24"
                >
                  <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10 .002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z"></path>
                </svg>
                <input
                  type="password"
                  placeholder="Confirmation mot de passe*"
                />
              </div>

              <button type="submit">S&apos;inscrire</button>

              <p>
                Vous avez déjà un compte ? <a href="sign-in">Se connecter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
