'use server'

import { signIn } from "@/auth"

export async function login(formData){
    try {
        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })
        console.log(res)
        return res
    } catch (error) {
        console.log(error.message)
        throw new Error(error)
    }
}