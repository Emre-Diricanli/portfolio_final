"use client";
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";

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
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
      <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md w-full relative mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-lg bg-black/30 backdrop-blur-sm border border-white/10 mb-28"
          id="contact"
      >
        {success && (
            <div className="absolute top-0 left-0 right-0 bg-green-500/90 text-white p-3 text-center font-medium rounded-t-2xl">
              Message sent successfully!
            </div>
        )}

        <h2 className="text-xl md:text-2xl font-bold text-center text-white mb-2">Let's work together!</h2>
        <p className="text-neutral-400 text-sm md:text-base text-center mb-6">
          I'm currently available for new opportunities
        </p>

        <form className="my-8" ref={formRef} onSubmit={handleSubmit}>
          <div className="flex flex-col relative z-0 space-y-4 mb-4">
            <LabelInputContainer>
              <Label htmlFor="name">Full Name</Label>
              <Input
                  placeholder="John Doe"
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  value={form.name}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="email">Email Address</Label>
              <Input
                  placeholder="johndoe@gmail.com"
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={form.email}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="message">Message</Label>
              <textarea
                  name="message"
                  placeholder="Your message"
                  required
                  onChange={handleChange}
                  value={form.message}
                  className="flex min-h-32 w-full rounded-md border border-neutral-800 bg-black/50 px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </LabelInputContainer>
          </div>

          {error && (
              <div className="text-red-500 text-sm mb-4">
                {error}
              </div>
          )}

          <button
              className="relative w-full bg-white/10 hover:bg-white/20 text-white rounded-md h-10 font-medium transition-colors border border-white/20"
              type="submit"
              disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="hidden lg:block w-full">
          <BorderBeam duration={15} size={400} />
        </div>
      </motion.section>
  );
};

export default Contact;

const LabelInputContainer = ({
                               children,
                               className
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
