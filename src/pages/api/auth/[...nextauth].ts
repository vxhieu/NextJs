import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
          const { name, password } = credentials as { name: string, password: string };

          if (name !== 'john' || password !== '1234') {
              throw new Error("error");
          }
          return { name: 'john' };
      }
  })
  ],

  pages: {
    signIn: "/Login",
  },
});
