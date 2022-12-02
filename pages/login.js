import Head from 'next/head';
import Layout from '../layout/layout';
import Link from 'next/link';
import styles from '../styles/Form.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from 'react-icons/hi';
import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';

export default function Login() {
  const [show, setShow] = useState(false);

  //Google Handler
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  }

  //GitHub Handler
  async function handleGithubSignIn() {
    signIn('github', { callbackUrl: 'http://localhost:3000' });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className='w-3/4 mx-auto flex flex-col gap-10'>
        <div className='title'>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>
            Explore
          </h1>
          <p className='w-3/4 mx-auto text-gray-400'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Sunt repellendus magni, laborum earum architecto
            explicabo.
          </p>
        </div>
        <form className='flex flex-col gap-5'>
          <div className={styles.input_group}>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className={styles.input_text}
            />
            <span className='icon flex items-center px-4'>
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show ? 'text' : 'password'}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
            />
            <span
              className='icon flex items-center px-4'
              onClick={() => setShow(!show)}
            >
              <HiFingerPrint size={25} />
            </span>
          </div>
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
          <div className='input-button'>
            <button
              onClick={handleGithubSignIn}
              type='button'
              className={styles.button_custom}
            >
              Sign In with GitHub
              <Image
                src={'/assets/github.svg'}
                width='23'
                height='23'
                alt='github'
              />
            </button>
          </div>
          <div className='input-button'>
            <button
              type='button'
              onClick={handleGoogleSignIn}
              className={styles.button_custom}
            >
              Sign In With Google
              <Image
                src={'/assets/google.svg'}
                width='20'
                height='20'
                alt='google'
              />
            </button>
          </div>
        </form>

        <p className='text-center text-gray-400'>
          <Link className='text-blue-700' href={'/register'}>
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
}
