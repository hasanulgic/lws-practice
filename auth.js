import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClientPromise from "./database/mongoClientPromise";
import CredentialsProvider from "next-auth/providers/credentials";
import { userModel } from "./models/user-model";

const authOptions = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: "lws-practice",
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null;

        try {
          const user = await userModel.findOne({ email: credentials.email });

          if (user) {
            const isMatch =
              user?.email === credentials?.email &&
              user?.password === credentials?.password;
            if (isMatch) {
              // console.log(user)
              return user;
            } else {
              throw new Error("Email or Password Mismatch");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
});

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = authOptions;
