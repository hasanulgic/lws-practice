'use server'

import { signIn } from "@/auth"

export async function login(formData){
    try {
        const res = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })
        return res
    } catch (error) {
        throw new Error(error)
    }
}