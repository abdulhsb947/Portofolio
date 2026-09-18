import { useState } from "react";
import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";

/* ===== KONTEN FORM (edit di sini) ===== */
const content = {
  id: {
    name: "Nama",
    namePlaceholder: "Nama lengkap Anda",
    email: "Email",
    emailPlaceholder: "nama@email.com",
    message: "Pesan",
    messagePlaceholder: "Tuliskan pesan Anda...",
    send: "Kirim Pesan",
    note: "Form ini belum terhubung ke layanan email. Silakan gunakan kontak di samping.",
    success: "Pesan siap dikirim. Hubungkan layanan email untuk pengiriman otomatis.",
    errors: {
      name: "Nama wajib diisi (maksimal 100 karakter).",
      email: "Masukkan alamat email yang valid.",
      message: "Pesan wajib diisi (maksimal 1000 karakter).",
    },
  },
  en: {
    name: "Name",
    namePlaceholder: "Your full name",
    email: "Email",
    emailPlaceholder: "name@email.com",
    message: "Message",
    messagePlaceholder: "Write your message...",
    send: "Send Message",
    note: "This form is not connected to an email service yet. Please use the contact details listed.",
    success: "Message ready to send. Connect an email service for automatic delivery.",
    errors: {
      name: "Name is required (max 100 characters).",
      email: "Please enter a valid email address.",
      message: "Message is required (max 1000 characters).",
    },
  },
} as const;

type Errors = { name?: string; email?: string; message?: string };

export function ContactForm() {
  const { lang } = useLang();
  const c = content[lang];
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (v: typeof values): Errors => {
    const e: Errors = {};
    if (!v.name.trim() || v.name.trim().length > 100) e.name = c.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = c.errors.email;
    if (!v.message.trim() || v.message.trim().length > 1000) e.message = c.errors.message;
    return e;
  };

  const inputClass = (invalid?: string) =>
    cn(
      "mt-1.5 w-full rounded-md border bg-card px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary",
      invalid ? "border-destructive" : "border-input",
    );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    setSent(Object.keys(next).length === 0);
  };

  const field = (key: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSent(false);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface p-6">
      <div>
        <label htmlFor="cf-name" className="text-sm font-medium text-foreground">
          {c.name}
        </label>
        <input
          id="cf-name"
          value={values.name}
          onChange={(e) => field("name", e.target.value)}
          placeholder={c.namePlaceholder}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          className={inputClass(errors.name)}
        />
        {errors.name ? (
          <p id="cf-name-error" className="mt-1.5 text-xs text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="cf-email" className="text-sm font-medium text-foreground">
          {c.email}
        </label>
        <input
          id="cf-email"
          type="email"
          value={values.email}
          onChange={(e) => field("email", e.target.value)}
          placeholder={c.emailPlaceholder}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
          className={inputClass(errors.email)}
        />
        {errors.email ? (
          <p id="cf-email-error" className="mt-1.5 text-xs text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className="text-sm font-medium text-foreground">
          {c.message}
        </label>
        <textarea
          id="cf-message"
          rows={5}
          value={values.message}
          onChange={(e) => field("message", e.target.value)}
          placeholder={c.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          className={cn(inputClass(errors.message), "resize-y")}
        />
        {errors.message ? (
          <p id="cf-message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
      >
        {c.send}
      </button>

      {sent ? (
        <p
          role="status"
          className="mt-4 rounded-md bg-accent px-3 py-2 text-sm text-accent-foreground"
        >
          {c.success}
        </p>
      ) : null}

      <p className="mt-4 text-xs text-muted-foreground">{c.note}</p>
    </form>
  );
}
