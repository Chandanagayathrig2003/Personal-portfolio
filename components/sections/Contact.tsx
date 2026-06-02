"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, MapPin, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import { personalInfo } from "@/lib/data";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub", href: personalInfo.github, color: "#e5e7eb" },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, color: "#0ea5e9" },
  { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}`, color: "#00d4ff" },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  const validate = (): boolean => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length < 20) errs.message = "Message too short (min 20 chars)";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey);
        toast.success("Message sent! I'll reply within 24 hours 🚀");
      } else {
        // Fallback: open email client
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Hi Chandhana,\n\n${form.message}\n\n— ${form.name} (${form.email})`)}`;
        toast.success("Opening your email client...");
      }
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 transition-all duration-200 outline-none focus:bg-white/8 focus:border-neon-blue/50 focus:shadow-[0_0_0_3px_rgba(0,212,255,0.12)] ${
      errors[field] ? "border-red-500/60" : "border-white/10"
    }`;

  return (
    <section id="contact" className="relative py-24 px-4">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="Contact"
          title="Let's Build Something"
          highlight="Together"
          subtitle="Open to full-time roles, internships, and exciting collaborations. Let's talk!"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sidebar info */}
          <div className="lg:col-span-2 space-y-5">
            <GlassCard hover={false} className="p-6">
              <h3 className="text-white font-bold mb-4">Get In Touch</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 text-white/55 text-sm">
                  <MapPin size={16} className="text-neon-blue mt-0.5 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-start gap-3 text-white/55 text-sm">
                  <Clock size={16} className="text-neon-blue mt-0.5 shrink-0" />
                  <span>IST (UTC+5:30) — Available Mon–Sat</span>
                </div>
                <div className="flex items-start gap-3 text-white/55 text-sm">
                  <Mail size={16} className="text-neon-blue mt-0.5 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-neon-blue transition-colors break-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    title={label}
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:scale-110 hover:border-white/30 transition-all duration-200"
                    style={{ color }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </GlassCard>

            {/* Status card */}
            <GlassCard hover={false} className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-60" />
                </div>
                <span className="text-emerald-400 font-semibold text-sm">Open to Opportunities</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed">
                Actively seeking full-time Software Engineer / QA / AI roles. Response time: within 24 hours.
              </p>
            </GlassCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <GlassCard hover={false} className="p-8">
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job Opportunity / Collaboration / Feedback"
                    className={inputClass("subject")}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-white/60 text-xs mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me about the opportunity, project, or just say hello!"
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                <NeonButton variant="primary" size="lg" type="submit" className="w-full" disabled={sending}>
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </NeonButton>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
