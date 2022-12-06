import User from "../../../models/User";
import clientPromise from '../../../lib/mongodb'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
const argon2 = require('argon2');
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    session: {
        // Choose how you want to save the user session.
        // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
        // If you use an `adapter` however, we default it to `"database"` instead.
        // You can still force a JWT session by explicitly defining `"jwt"`.
        // When using `"database"`, the session cookie will only contain a `sessionToken` value,
        // which is used to look up the session in the database.
        strategy: "jwt",

        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge:  5 * 60 * 1000, // 30 days

        // Seconds - Throttle how frequently to write to database to extend a session.
        // Use it to limit write operations. Set to 0 to always update the database.
        // Note: This option is ignored if using JSON Web Tokens
        updateAge: 24 * 60 * 60, // 24 hours
    },

    providers: [

        CredentialsProvider({

            async authorize(credentials,req, res ){


                const user = await User.findOne({'email': credentials.email})


                if(!user){
                    throw new Error('Incorrect Username and/or Password. Please try again.');
                    return Error

                }
                const confirmPassword = await argon2.verify(user.password, credentials.password)
                if(confirmPassword){

                    const {password, ...others} = user._doc
                    return {...others}
                }
                if(!confirmPassword){
                    throw new Error('Incorrect Username and/or Password.  Please try again.');
                    return Error
                }
            }

        })
    ],
    callbacks: {

        async jwt({token, user, profile}){
            console.log(token)

            if (user) {
                token.user = user
            }
            return token
        },
        async session({user,session, credentials, token,carts}) {

            session.user = token.user

            return session
        },

    },

    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
        encryption: true,
        //maxAge: 5 * 60 * 1000,
    },
    pages: {
        signIn: '/',
        signOut: '/',
        error: '/'
    }

})
