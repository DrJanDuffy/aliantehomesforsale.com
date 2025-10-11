import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';

export const metadata: Metadata = {
  title: 'Terms of Service - Aliante Homes For Sale',
  description: 'Terms of service for AlianteHomesForSale.com.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/terms-of-service' },
};

export default function TermsOfService() {
  return (
    <main>
      <AboutHero />
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl mx-auto prose prose-lg">
          <p>Terms of service content here...</p>
        </div>
      </section>
    </main>
  );
}
