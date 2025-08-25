'use client';

import { useId, useState } from 'react';

export default function ContactForm() {
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const inquiryTypeId = useId();
  const timelineId = useId();
  const budgetId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    timeline: '',
    budget: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Analytics tracking for Core Web Vitals
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        form_name: 'contact_form',
        event_category: 'contact'
      });
    }
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={firstNameId}>First Name *</label>
          <input
            type="text"
            id={firstNameId}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Your first name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor={lastNameId}>Last Name *</label>
          <input
            type="text"
            id={lastNameId}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Your last name"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor={emailId}>Email *</label>
          <input
            type="email"
            id={emailId}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor={phoneId}>Phone *</label>
          <input
            type="tel"
            id={phoneId}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="(702) 555-0123"
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor={inquiryTypeId}>What can we help you with? *</label>
        <select 
          id={inquiryTypeId} 
          name="inquiryType" 
          value={formData.inquiryType}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="buy">Buy a home in Aliante</option>
          <option value="sell">Sell my Aliante home</option>
          <option value="new-construction">New construction guidance</option>
          <option value="market-report">Get market report</option>
          <option value="valuation">Home valuation</option>
          <option value="investment">Investment properties</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor={timelineId}>When are you looking to move? *</label>
        <select 
          id={timelineId} 
          name="timeline" 
          value={formData.timeline}
          onChange={handleChange}
          required
        >
          <option value="">Select timeline</option>
          <option value="immediately">Immediately</option>
          <option value="1-3-months">1-3 months</option>
          <option value="3-6-months">3-6 months</option>
          <option value="6-12-months">6-12 months</option>
          <option value="just-looking">Just looking</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor={budgetId}>What's your budget range?</label>
        <select 
          id={budgetId} 
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Select budget</option>
          <option value="250k-350k">$250K - $350K</option>
          <option value="350k-450k">$350K - $450K</option>
          <option value="450k-550k">$450K - $550K</option>
          <option value="550k-650k">$550K - $650K</option>
          <option value="650k-plus">$650K+</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor={messageId}>Additional Details</label>
        <textarea
          id={messageId}
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us more about what you're looking for, any specific neighborhoods, or questions you have..."
        ></textarea>
      </div>
      
      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
          />
          <span>Subscribe to our newsletter for market updates and new listings</span>
        </label>
      </div>
      
      <button type="submit" className="submit-button">
        Send Message
      </button>
    </form>
  );
}
