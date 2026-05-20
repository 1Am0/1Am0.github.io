import { useState, type FormEvent } from 'react';
import { send } from '@emailjs/browser';
import styles from './Contact.module.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ ok: false, msg: 'Please fill in all fields.' });
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ ok: false, msg: 'Email service not configured. See README.' });
      return;
    }

    setSending(true);
    try {
      const templateParams = {
        // Keep both naming styles so different EmailJS templates work.
        from_name: formData.name,
        from_email: formData.email,
        name: formData.name,
        email: formData.email,
        title: 'Portfolio Contact Message',
        time: new Date().toLocaleString(),
        message: formData.message,
      };

      await send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus({ ok: true, msg: `Thanks, ${formData.name}! Your message was sent.` });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ ok: false, msg: 'Sorry — something went wrong. Try again later.' });
      // eslint-disable-next-line no-console
      console.error('Email send error', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subtitle}>Have a question or want to say hi? Send a short message below.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="name"
              type="text"
              className={styles.input}
              placeholder="Your name"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              type="email"
              className={styles.input}
              placeholder="you@example.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              className={styles.textarea}
              placeholder="Write a quick message..."
              rows={5}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button type="submit" className={styles.submit} disabled={sending}>
            {sending ? 'Sending…' : 'Send Message'}
          </button>

          {status && (
            <p className={status.ok ? styles.success : styles.error} role="status">
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
