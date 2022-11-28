import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [session, setSession] = useState(false);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      {session ? User() : Guest()}
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
function User() {
  return (
    <main className='container mx-auto text-center py-20'>
      <h3 className='text-4xl font-bold'>User Homepage</h3>
      <div className='details'>
        <h5>Unknown</h5>
        <h5>Unknown</h5>
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
