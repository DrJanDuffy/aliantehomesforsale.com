'use client';

import Link from 'next/link';

export default function SchoolsContent() {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1a365d' }}>
            Aliante Schools: A Commitment to Educational Excellence
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              School quality ranks among the top priorities for families considering a move to
              Aliante, and with good reason – the area is served by some of North Las Vegas's
              highest-rated schools. The master-planned nature of Aliante included careful
              consideration of educational facilities from the community's inception, resulting in
              modern school buildings, well-maintained campuses, and strong parental involvement
              that contribute to exceptional learning environments. Schools within Aliante
              boundaries consistently score above district and state averages on standardized
              testing and offer robust programs in academics, arts, athletics, and technology. View{' '}
              <Link
                href="/neighborhoods"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Aliante neighborhoods
              </Link>{' '}
              to see school ratings for each area, or browse{' '}
              <Link
                href="/homes-for-sale"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                homes for sale
              </Link>{' '}
              in top school districts.
            </p>

            <p className="leading-relaxed">
              As a local real estate specialist who has helped dozens of families navigate school
              boundary decisions, I maintain current information on school ratings, program
              offerings, principal leadership, and parent satisfaction for all schools serving
              Aliante neighborhoods. Understanding school options is crucial for family buyers, as
              attendance boundaries can shift with new school openings and district redistricting.
              I'll provide detailed school information for any property you're considering and help
              you identify homes within boundaries for your preferred schools.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Elementary Schools Serving Aliante
            </h3>

            <p className="leading-relaxed">
              Aliante is primarily served by several highly-rated elementary schools including
              Leavitt Elementary, Kit Carson Elementary, and Homer Elementary. Leavitt Elementary,
              the newest of these facilities, features state-of-the-art technology integration, a
              robust STEM program, and consistently ranks among the top elementary schools in the
              Clark County School District. The school's modern facilities include science labs,
              computer learning centers, and a well-equipped library that supports student learning
              at all levels. Parent-teacher organization involvement is exceptionally strong,
              funding field trips, classroom supplies, and enrichment programs that enhance the
              educational experience.
            </p>

            <p className="leading-relaxed">
              Kit Carson Elementary has earned recognition for its commitment to literacy and
              reading achievement, with programs designed to ensure every student reads at or above
              grade level by third grade – a critical milestone that research shows predicts
              long-term academic success. The school offers both gifted and talented programs for
              advanced learners and intervention programs for students needing additional support,
              ensuring every child receives instruction matched to their ability level. Before and
              after school care programs provide working parents with convenient childcare options
              while offering homework help and enrichment activities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            Middle and High School Options
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              Aliante students typically attend Brinley Middle School, which has earned strong
              ratings for its college preparatory curriculum and comprehensive extracurricular
              offerings. The school provides honors courses in core subjects, allowing
              high-achieving students to access accelerated curriculum that prepares them for
              Advanced Placement courses in high school. Athletics programs include football,
              basketball, volleyball, track and field, and soccer, while fine arts offerings
              encompass band, orchestra, choir, drama, and visual arts. The school's focus on
              character education and anti-bullying initiatives creates a positive school culture
              that parents consistently praise.
            </p>

            <p className="leading-relaxed">
              For high school, most Aliante students attend Centennial High School or Legacy High
              School, both of which offer comprehensive college preparatory programs with numerous
              Advanced Placement courses, strong athletics programs, and extensive extracurricular
              opportunities. Centennial High School, in particular, has earned national recognition
              for its academic programs and consistently sends graduates to top universities
              throughout the country. The school offers over 20 AP courses, career and technical
              education programs in fields like engineering and healthcare, and partnerships with
              local colleges allowing students to earn college credits while still in high school.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#2c5aa0' }}>
              Private and Charter School Options
            </h3>

            <p className="leading-relaxed">
              Beyond traditional public schools, Aliante families have access to several excellent
              private and charter school options. Faith-based schools including Catholic, Christian,
              and non-denominational options provide smaller class sizes and values-based education
              for families seeking religious integration with academics. Several high-performing
              charter schools operate in the area, offering alternative educational approaches like
              Montessori, STEM-focused curriculum, or classical education models that appeal to
              families seeking different pedagogical approaches than traditional public schools
              provide.
            </p>

            <p className="leading-relaxed">
              The Nevada Learning Academy and other online public charter schools offer full-time
              virtual education options for families who prefer home-based learning with certified
              teacher support. These programs became increasingly popular during the pandemic and
              continue to serve families seeking flexibility in their children's education. Whatever
              your educational priorities and philosophy, Aliante's location provides access to
              virtually every type of schooling option available in the Las Vegas valley, ensuring
              you can find the perfect fit for your children's learning needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ color: '#1a365d' }}>
            The School-Home Value Connection
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="leading-relaxed">
              School quality directly impacts property values, with homes in highly-rated school
              attendance zones commanding 5-15% premiums over similar properties in lower-rated
              zones. When reviewing homes in Aliante, understanding exact school boundaries and how
              they might change over time is essential for protecting your investment. New schools
              opening in the area sometimes trigger boundary changes that can affect which schools
              your children attend, making it important to verify current boundaries with the school
              district rather than relying solely on real estate listing information.
            </p>

            <p className="leading-relaxed">
              As your buyer's agent, I'll research exact school boundaries for any property you're
              considering and can connect you with school administrators for tours and questions
              about programs and culture. Many of my clients make school quality their top priority,
              and I'm experienced at identifying homes within desired school zones that meet your
              other criteria for location, size, and budget. The combination of quality schools,
              safe neighborhoods, and strong community amenities makes Aliante one of the most
              family-friendly areas in the entire Las Vegas valley.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
