import type { Metadata } from 'next';
import AboutHero from '../components/AboutHero';

export const metadata: Metadata = {
  title: 'Fair Housing Statement - Aliante Homes For Sale',
  description: 'Fair housing commitment. Equal opportunity housing provider.',
  alternates: { canonical: 'https://www.aliantehomesforsale.com/fair-housing' },
};

export default function FairHousing() {
  return (
    <main>
      <AboutHero />
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-4xl mx-auto prose prose-lg">
          <p>Fair housing statement content here...</p>
        </div>
      </section>
    </main>
  );
}
