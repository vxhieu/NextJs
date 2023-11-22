import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  name: string;
  // Other properties as needed
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req): Promise<User | null> {
        const { name, password } = credentials as { name: string; password: string };

        if (name !== 'john' || password !== '1234') {
          throw new Error("Invalid credentials");
        }

        return { id: 'user_id', name: 'john' }; 
      }
    })
  ],

  pages: {
    signIn: "/Login",
  },
});
