import Head from 'next/head';
import Layout from '../layout/layout';
import Link from 'next/link';

const login = () => {
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
          <div className='input-groups'>
            <input type='email' name='email' placeholder='Email' />
          </div>
          <div className='input-groups'>
            <input
              type='password'
              name='password'
              placeholder='Password'
            />
          </div>
          <div className='input-button'>
            <button type='submit'>Login</button>
          </div>
          <div className='input-button'>
            <button type='submit'>Sign In with GitHub</button>
          </div>
          <div className='input-button'>
            <button type='submit'>Sign In With Google</button>
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
};

export default login;
