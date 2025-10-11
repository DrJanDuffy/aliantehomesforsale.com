import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';

export const metadata: Metadata = {
  title: 'Accessibility Statement - Aliante Homes For Sale',
  description: 'Accessibility commitment for AlianteHomesForSale.com. WCAG compliance and accessibility features.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/accessibility' },
};

export default function Accessibility() {
  return (
    <main>
      <AboutHero />
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl mx-auto prose prose-lg">
          <p>Accessibility statement content here...</p>
        </div>
      </section>
    </main>
  );
}
