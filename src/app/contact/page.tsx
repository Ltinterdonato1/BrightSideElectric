"use client";

import { useState } from 'react';
import styles from './page.module.css';
import { Mail, Phone, MapPin, Send, CheckCircle2, X } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Residential', // Default value
    address: '',
    state: 'WA',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Starting submission...", formData);
      // 1. Save to archive collection
      await addDoc(collection(db, "contactSubmissions"), {
        ...formData,
        createdAt: serverTimestamp()
      });

      // 2. Save to 'mail' collection to trigger the Firebase Email Extension
      await addDoc(collection(db, "mail"), {
        to: "getbrightsideelectric@gmail.com",
        message: {
          subject: `New Lead: ${formData.name} (${formData.serviceType})`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b;">
              <h2 style="color: #fde047; background: #1e293b; padding: 10px 20px; display: inline-block;">New Bright Side Electric Lead</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Service Type:</strong> ${formData.serviceType}</p>
              <p><strong>Location:</strong> ${formData.address}, ${formData.state}</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${formData.message}</p>
            </div>
          `
        }
      });

      // Clear form and show modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: 'Residential', // Reset to default
        address: '',
        state: 'WA',
        message: ''
      });
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Error: " + (error instanceof Error ? error.message : "Unknown error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1>Get a Free Estimate</h1>
        <p>Whether it's a quick home repair or a massive commercial project, we're ready to light it up.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <Phone className={styles.icon} />
            <div>
              <h3>Call Us</h3>
              <p>(206) 666-8062</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <Mail className={styles.icon} />
            <div>
              <h3>Email Us</h3>
              <p>getbrightsideelectric@gmail.com</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <MapPin className={styles.icon} />
            <div>
              <h3>Location</h3>
              <p>Walla Walla, WA</p>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000" 
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="serviceType">Service Type</label>
              <select 
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Solar & EV">Solar & EV</option> {/* Updated to match */}
                <option value="Storefront">Storefront</option>
                <option value="Schools">Schools</option> {/* Corrected from School/Industrial */}
                <option value="Security">Security</option> {/* Added missing Security */}
              </select>
            </div>
          </div>
          <div className={styles.formGrid}>
            <div className={styles.formGroup} style={{flex: '2'}}>
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address" 
                required 
              />
            </div>
            <div className={styles.formGroup} style={{flex: '1'}}>
              <label htmlFor="state">State</label>
              <input 
                type="text" 
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="WA" 
                required 
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project..." 
              rows={6}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} style={{marginLeft: '8px'}} />
          </button>
        </form>
      </div>

      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            <div className={styles.modalContent}>
              <CheckCircle2 size={64} className={styles.successIcon} />
              <h2>Thank You!</h2>
              <p>We have received your message and we will reach out to you shortly.</p>
              <button className="btn-primary" onClick={() => setShowModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
