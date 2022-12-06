import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { compare } from 'bcryptjs';

export default NextAuth({
  providers: [
    //Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        connectMongo().catch((error) => {
          error: 'Connection Failed';
        });
        //Check for existing email
        const result = await Users.findOne({
          email: credentials.email,
        });
        if (!result) {
          throw new Error('No User Found with that Email');
        }
        //Compare passwords
        const checkPassword = await compare(
          credentials.password,
          result.password
        );
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error('Username or Password Are Incorrect');
        }
        return result;
      },
    }),
  ],
  secret: '4buL0seZgFdDhkyJa0/SGjy621VXy30tOXTMMdq99Cc=',
});
