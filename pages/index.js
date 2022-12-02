import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { getSession, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      {session ? User({ session }) : Guest()}
    </div>
  );
}

//Guests
function Guest() {
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'>Guest Homepage</h3>
      <div className='flex justify-center'>
        <p className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>
          <Link href={'/login'}>Sign In</Link>
        </p>
      </div>
    </main>
  );
}

//Authorized Users
function User({ session }) {
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'>User Homepage</h3>
      <div className='details'>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>
      <div className='flex justify-center'>
        <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>
          Sign Out
        </button>
      </div>
      <div className='flex justify-center'>
        <p className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'>
          <Link href={'/profile'}>Profile</Link>
        </p>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
