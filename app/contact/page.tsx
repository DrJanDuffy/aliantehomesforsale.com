import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Contact Aliante Real Estate | Expert Local Guidance Since 2018',
  description: 'Contact Aliante Real Estate for expert guidance on homes in Aliante, North Las Vegas. Call (702) 555-0123 or fill out our contact form.',
  keywords: 'contact Aliante real estate, Aliante realtor, North Las Vegas real estate agent',
  openGraph: {
    title: 'Contact Aliante Real Estate',
    description: 'Get expert guidance on Aliante homes',
    type: 'website',
    url: 'https://aliantehomesforsale.com/contact',
  },
};

export default function Contact() {
  return (
    <>
      <StructuredData type="RealEstateAgent" />
      
      <main className="contact-page">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="hero-content">
            <h1>Contact Aliante Real Estate</h1>
            <p className="hero-subtitle">
              Expert local guidance since 2018 | 500+ successful transactions | Your trusted Aliante partner
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="contact-info-section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-card primary">
                <h3>📞 Call Us Today</h3>
                <p className="phone-number">(702) 555-0123</p>
                <p>Available 7 days a week</p>
                <p>9:00 AM - 8:00 PM PST</p>
              </div>
              
              <div className="contact-card">
                <h3>✉️ Email Us</h3>
                <p className="email">info@aliantehomesforsale.com</p>
                <p>Response within 2 hours</p>
              </div>
              
              <div className="contact-card">
                <h3>📍 Visit Our Office</h3>
                <p>2590 Nature Park Drive</p>
                <p>Suite 275</p>
                <p>North Las Vegas, NV 89084</p>
              </div>
              
              <div className="contact-card">
                <h3>⏰ Office Hours</h3>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> By appointment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form-section">
          <div className="container">
            <div className="form-container">
              <h2>Get Expert Guidance</h2>
              <p>Fill out the form below and we'll get back to you within 2 hours</p>
              
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us">
          <div className="container">
            <h2>Why Choose Aliante Real Estate?</h2>
            <div className="reasons-grid">
              <div className="reason-card">
                <h3>🏠 Local Expertise</h3>
                <p>6+ years specializing exclusively in Aliante and North Las Vegas properties</p>
              </div>
              
              <div className="reason-card">
                <h3>🤝 Builder Relationships</h3>
                <p>Direct relationships with all major builders for better deals and incentives</p>
              </div>
              
              <div className="reason-card">
                <h3>📊 Market Intelligence</h3>
                <p>Real-time market data and insights to help you make informed decisions</p>
              </div>
              
              <div className="reason-card">
                <h3>⭐ Proven Track Record</h3>
                <p>500+ successful transactions with verified client testimonials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Office Map */}
        <section className="office-map-section">
          <div className="container">
            <h2>Visit Our Office</h2>
            <div className="map-container">
              <div className="map-placeholder">
                <p>Interactive map will be displayed here</p>
                <p>Configure Google Maps integration</p>
                <div className="map-info">
                  <h4>Office Location:</h4>
                  <p>2590 Nature Park Drive, Suite 275</p>
                  <p>North Las Vegas, NV 89084</p>
                  <p><strong>Directions:</strong> Located in the Aliante Business Park, just off the 215 freeway</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
