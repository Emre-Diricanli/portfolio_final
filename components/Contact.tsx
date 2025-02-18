"use client";
import React, {useRef, useState} from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import {BorderBeam} from "@/components/ui/border-beam";



const Contact = () => {
    const formRef = useRef()
    const [form, setForm] = useState({name: '', email: '', message: ''})
    const [loading, setLoading] = useState(false)
    const handleChange = ({target:{name, value}})=>{
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true)
        try {
            emailjs.send(
                'service_lgxqwky',
                'template_6eaq8g5',
                {
                    from_name: form.name,
                    to_name: 'Emre',
                    from_email: form.email,
                    to_email: 'emrediricanliapplications@gmail.com',
                    message: form.message,
                },
                '4sbQ2mnJBSbzkhuXn'
            )
            setLoading(false)
            alert('Your message has been sent!')

            setForm({name: '', email: '', message: ''})
        }catch (error){
            setLoading(false)
            console.log(error)
            alert('Something went wrong!')
        }
    }

    return (
            <section
                className="max-w-md w-full relative mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mb-28"
                id='contact'>

                <p className="text-neutral-600 text-lg text-center font-bold max-w-sm mt-2 dark:text-neutral-300">
                    Let&#39;s work together!
                </p>

                <form className="my-8" ref={formRef} onSubmit={handleSubmit}>
                    <div className="flex flex-col relative z-0 md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">Full Name</Label>
                            <Input placeholder="John Doe" type="text" name='name' required={true} onChange={handleChange} value={form.name} />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input placeholder="johndoe@gmail.com" type="email" name='email' required={true} onChange={handleChange} value={form.email} />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-8">
                        <Label htmlFor="textarea">Message</Label>
                        <Input placeholder="Your message" type="textarea" name='message' required={true} onChange={handleChange} value={form.message} />

                    </LabelInputContainer>
                    <BottomGradient/>

                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                        <BottomGradient/>
                    </button>
                </form>
                <BorderBeam duration={15} size={400} />

            </section>

);
}
export default Contact;
const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
