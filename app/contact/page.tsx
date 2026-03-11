import type { Metadata } from 'next';
import StructuredData from '../components/StructuredData';
import ContactHero from '../components/ContactHero';
import ContactMethods from '../components/ContactMethods';
import EnhancedContactForm from '../components/EnhancedContactForm';
import ContactWhyChoose from '../components/ContactWhyChoose';
import OfficeLocation from '../components/OfficeLocation';

export const metadata: Metadata = {
  title: 'Contact Aliante Real Estate - Call (702) 707-7273',
  description:
    'Contact our local Aliante real estate experts. Office: 2590 Nature Park Drive, Suite 275. Open 7 days a week. Free buyer consultation.',
  alternates: {
    canonical: 'https://www.aliantehomesforsale.com/contact',
  },
};

export default function Contact() {
  return (
    <>
      <StructuredData type="RealEstateAgent" />

      <main className="contact-page">
        {/* Hero Section */}
        <ContactHero />

        {/* Contact Methods Grid */}
        <ContactMethods />

        {/* Contact Form Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container">
            <EnhancedContactForm />
          </div>
        </section>

        {/* Why Choose Us */}
        <ContactWhyChoose />

        {/* Office Location & Map */}
        <OfficeLocation />
      </main>
    </>
  );
}
