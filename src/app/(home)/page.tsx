'use client';
import { api } from '@/utils/api';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const hello = api.example.hello.useQuery({ text: 'from tRPC' });

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="home_page">
      <h1 className="">H1 Heading</h1>
      <h2>H2 Heading</h2>
      <h3>H3 Heading</h3>
      <h4>H4 Heading</h4>
      <h5>H5 Heading</h5>
      <h6>H6 Heading</h6>
      <p>p Heading</p>
      <p className="small">p Heading</p>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl ">
          {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
          {secretMessage && <span> - {secretMessage}</span>}
        </p>
        <button
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? 'Sign out' : 'Sign in'}
        </button>
      </div>
    </div>
  );
};

export default Home;
