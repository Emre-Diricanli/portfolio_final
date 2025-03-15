"use client";
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Linkedin, Github, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState<FormData>({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [formState, setFormState] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                "service_lgxqwky",
                "template_6eaq8g5",
                {
                    from_name: form.name,
                    to_name: "Emre",
                    from_email: form.email,
                    to_email: "emrediricanliapplications@gmail.com",
                    message: form.message
                },
                "4sbQ2mnJBSbzkhuXn"
            );

            setFormState("success");
            setForm({ name: "", email: "", message: "" });

            // Reset form state after 5 seconds
            setTimeout(() => {
                setFormState("idle");
            }, 5000);
        } catch (error) {
            console.error(error);
            setFormState("error");

            // Reset error state after 5 seconds
            setTimeout(() => {
                setFormState("idle");
            }, 5000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="pb-32 bg-black relative" id="contact">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl -top-20 -right-20"></div>
                <div className="absolute h-96 w-96 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl -bottom-20 -left-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-white/70 max-w-xl mx-auto">
                        I'm currently available for freelance work and employment opportunities.
                        Feel free to reach out if you have a project in mind or just want to connect!
                    </p>
                </motion.div>

                {/* This grid container needs a specific min-height for cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col h-full"
                    >
                        {/* Make this card take up the majority of space */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex-grow mb-4">
                            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

                            <div className="space-y-4">
                                <a
                                    href="mailto:emrediricanliapplications@gmail.com"
                                    className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span>emrediricanliapplications@gmail.com</span>
                                </a>

                                <a
                                    href="https://linkedin.com/in/emre-diricanli"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <span>linkedin.com/in/emre-diricanli</span>
                                </a>

                                <a
                                    href="https://github.com/Emre-Diricanli"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-white/80 hover:text-white transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <Github className="w-5 h-5" />
                                    </div>
                                    <span>github.com/Emre-Diricanli</span>
                                </a>

                                <div className="flex items-center gap-4 text-white/80">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span>Atlanta, GA, USA</span>
                                </div>
                            </div>

                            {/* Adding availability section within the same card */}
                            <div className="mt-10 pt-6 border-t border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">Currently Available For</h3>
                                <ul className="space-y-2 text-white/80">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        <span>Full-time Positions</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        <span>Freelance Projects</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        <span>Remote Work</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        <span>Collaboration Opportunities</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full"
                    >
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 relative h-full flex flex-col">
                            {/* Form success/error messages */}
                            <AnimatePresence>
                                {formState === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute inset-x-0 top-0 bg-green-500/90 text-white py-3 px-6 flex items-center gap-2 rounded-t-xl"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Message sent successfully!</span>
                                    </motion.div>
                                )}

                                {formState === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute inset-x-0 top-0 bg-red-500/90 text-white py-3 px-6 flex items-center gap-2 rounded-t-xl"
                                    >
                                        <AlertCircle className="w-5 h-5" />
                                        <span>Failed to send message. Please try again.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>

                            <form className="space-y-6 flex-grow flex flex-col" ref={formRef} onSubmit={handleSubmit}>
                                <LabelInputContainer>
                                    <Label htmlFor="name" className="text-white">Full Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        type="text"
                                        required
                                        onChange={handleChange}
                                        value={form.name}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer>
                                    <Label htmlFor="email" className="text-white">Email Address</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        type="email"
                                        required
                                        onChange={handleChange}
                                        value={form.email}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer className="flex-grow flex flex-col">
                                    <Label htmlFor="message" className="text-white">Message</Label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message..."
                                        required
                                        onChange={handleChange}
                                        value={form.message}
                                        className="w-full flex-grow rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/20 min-h-[150px]"
                                    />
                                </LabelInputContainer>

                                {/* Auto margin top pushes the button to the bottom */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full mt-auto py-3 rounded-md flex items-center justify-center gap-2 font-medium transition-colors ${
                                        loading
                                            ? "bg-white/20 text-white/70 cursor-not-allowed"
                                            : "bg-white text-black hover:bg-white/90"
                                    }`}
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
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

export default Contact;