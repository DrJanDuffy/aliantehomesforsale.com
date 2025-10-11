import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';

export const metadata: Metadata = {
  title: 'Privacy Policy - Aliante Homes For Sale',
  description: 'Privacy policy for AlianteHomesForSale.com. How we collect, use, and protect your information.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/privacy-policy' },
};

export default function PrivacyPolicy() {
  return (
    <main>
      <AboutHero />
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl mx-auto prose prose-lg">
          <p>Privacy policy content here...</p>
        </div>
      </section>
    </main>
  );
}
