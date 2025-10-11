# V0 Prompt: Modern Header & Footer for Aliante Real Estate Site

Create modern, professional header (navigation) and footer components for "Aliante Homes For Sale" real estate website featuring Dr. Janet Duffy.

## BRAND IDENTITY
- Professional luxury real estate specialist
- Focus: Aliante, North Las Vegas (gated communities, Sun City 55+, new construction)
- Expert local guidance since 2018
- Phone: (702) 707-7273
- Email: DrDuffy@AlianteHomesForSale.com

## COLOR PALETTE
**Primary Colors:**
- Deep Navy: #1a365d
- Royal Blue: #2c5aa0
- Warm Orange (CTA): #ed8936
- Teal Accent: #16B286

**Gradients:**
- Hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- Sections: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)

## TECHNICAL REQUIREMENTS
- Tech: Next.js + React + Tailwind CSS 3
- Fully responsive (mobile-first)
- Accessibility compliant (WCAG 2.1 AA)
- Smooth transitions and hover effects
- Sticky header on scroll
- Mobile hamburger menu

---

## 1. HEADER/NAVIGATION DESIGN

### Desktop Header (>1024px)
**Layout:**
- Fixed/sticky header (white background with subtle shadow on scroll)
- Max width container (1280px)
- Height: 80px
- Padding: 1rem 2rem

**Left Section - Branding:**
```
Logo/Brand Area (clickable to /)
├── "Aliante Las Vegas" (24px, Deep Navy #1a365d, font-bold)
└── "Homes by Dr. Jan Duffy | Your Trusted Local Expert Since 2018"
    (12px, gray-600, font-medium)
```

**Center Section - Main Navigation:**
Horizontal nav links with hover effects:
- Homes for Sale
- New Construction (with dropdown mega-menu)
- Neighborhoods (with dropdown)
- Market Report
- About Us
- Contact

**Nav Link Styling:**
- Font: 16px, medium weight
- Color: Deep Navy #1a365d
- Hover: Royal Blue #2c5aa0 with bottom border (2px, transition 300ms)
- Active page: Royal Blue with bottom border

**Right Section - CTA:**
```
[ Search Properties ] [ (702) 707-7273 ]
     Orange Button        Phone Link
```
- Search button: Orange #ed8936, white text, px-6 py-2.5, rounded-lg
- Phone: Deep Navy, 18px, font-semibold, flex items-center with phone icon

### Dropdown Mega Menus

**New Construction Dropdown:**
Appears on hover over "New Construction"
- 3-column layout
- Column 1: "Top Builders"
  - Lennar (#1 Volume Builder)
  - D.R. Horton (Tule Springs)
  - Tri Pointe (Luxury)
  - Del Webb (Active Adult 55+)
  - Toll Brothers (Ultra-Luxury)
- Column 2: "Resources"
  - All Builders Comparison
  - Builder Incentives Tracker
  - Quick Move-In Homes
- Column 3: Featured image/CTA
  - "Up to $25K in Incentives"
  - Orange CTA button

**Neighborhoods Dropdown:**
Appears on hover over "Neighborhoods"
- 2-column layout
- Column 1: "Communities"
  - The Prominence (Luxury)
  - Desert Willows (Family)
  - Club Aliante (Golf)
  - The Paseos (Gated)
  - Sun City Aliante (55+)
  - Tule Springs (New)
- Column 2: "Tools"
  - Neighborhood Comparison
  - School District Info
  - Golf Course Homes
  - Gated Communities

### Mobile Header (<1024px)
**Layout:**
- Height: 70px
- White background
- Flex: space-between

**Left:** Logo (stacked, smaller text)
**Right:** 
- Phone icon (tappable, calls directly)
- Hamburger menu icon (3 lines)

**Mobile Menu (Full-Screen Overlay):**
- Slides in from right
- Dark overlay background (rgba(0,0,0,0.5))
- White panel (320px width)
- Close X button (top-right)
- Navigation links (stacked, 48px min-height for tap targets)
- Collapsible sections for New Construction & Neighborhoods
- Orange "Search Properties" button at top
- Phone/Email at bottom

### Scroll Behavior:
- Initial: Larger header (80px)
- On scroll down (>50px): 
  - Shrink to 60px
  - Add shadow
  - Smooth transition (300ms)

---

## 2. FOOTER DESIGN

### Footer Structure

**Top Section - Info Grid**
Dark navy background (#1a365d), white text
Padding: 4rem 2rem

**4-Column Layout (Desktop) / Stack on Mobile:**

**Column 1: Contact Information**
```
Contact Dr. Jan Duffy
Your trusted partner for Aliante homes since 2018

📞 Phone: (702) 707-7273
✉️ Email: DrDuffy@AlianteHomesForSale.com
📍 Office: 2590 Nature Park Drive, Suite 275
          North Las Vegas, NV 89084
🕒 Hours: Mon-Fri 8AM-7PM, Sat-Sun 9AM-6PM

[ Schedule Consultation ]  (Orange button)

Nevada Real Estate License #B.0123456.LLC
Equal Housing Opportunity
```

**Column 2: New Construction Builders**
```
New Construction Builders

• All Builders Comparison Guide
• Lennar (#1 Volume Builder)
• D.R. Horton (Tule Springs)
• Tri Pointe (Luxury Homes)
• Del Webb (Active Adult 55+)
• Toll Brothers (Ultra-Luxury)
• Richmond American Homes
• Builder Incentives Tracker
```

**Column 3: Aliante Neighborhoods**
```
Aliante Neighborhoods

• The Prominence (Luxury)
• Desert Willows (Family)
• Club Aliante (Golf Course)
• The Paseos (Gated)
• Villages at Tule Springs
• Sun City Aliante (55+)
• Neighborhood Comparison Tool
```

**Column 4: Buyer & Seller Resources**
```
Buyer & Seller Resources

• Live Market Report & Statistics
• Mortgage Calculator & Rates
• Free Home Valuation (CMA)
• First-Time Buyer Guide
• Selling Your Home Checklist
• Investment Property Analysis
• School District Information
```

**Styling for Footer Links:**
- Color: white with 80% opacity
- Hover: Teal accent #16B286, 100% opacity
- Transition: 200ms
- Small bullet (•) before each link

### Middle Section - Newsletter/Social (Optional)
Light section above bottom bar
- Newsletter signup form
- Social media icons (Facebook, Instagram, LinkedIn, YouTube)

### Bottom Bar
Darker navy background (#0d1b2a)
Padding: 2rem
Text: gray-400, 14px

**Left Side:**
```
© 2025 Aliante Las Vegas | Homes by Dr. Jan Duffy
Licensed Real Estate Brokerage in Nevada

All information deemed reliable but not guaranteed.
All properties subject to prior sale, change, or withdrawal.
```

**Right Side:**
Legal links (horizontal, separated by |)
- Privacy Policy
- Terms of Service
- Accessibility Statement
- Fair Housing

### Mobile Footer:
- Stack all columns vertically
- Each section collapsible (accordion style)
- Contact section always expanded
- Larger tap targets (min 48px)

---

## DESIGN STYLE GUIDELINES

### Typography
- Headlines: font-bold, tracking-tight
- Body: font-medium, leading-relaxed
- Links: font-medium
- Footer text: 14px body, 16px headings

### Spacing
- Generous padding/margins
- Consistent 1rem, 1.5rem, 2rem increments
- Section padding: 4rem vertical

### Interactive Elements
- All buttons: 
  - Rounded corners (8px)
  - Padding: py-3 px-6
  - Shadow on hover
  - Transform scale(1.05) on hover
  - Transition: 300ms ease
  
- Links:
  - Smooth color transitions
  - Underline on hover (for body links)
  - No underline in nav (use bottom border)

### Accessibility
- All interactive elements: min 44px tap target (mobile)
- Focus states: visible outline (ring-2 ring-blue-500)
- Aria labels on all icon buttons
- Semantic HTML (nav, footer, button vs a)
- Skip to content link
- Color contrast: WCAG AA minimum

### Animations
- Fade in on page load
- Smooth transitions on hover
- Dropdown menus: slide down (200ms ease-out)
- Mobile menu: slide in from right (300ms ease-in-out)
- No animations that cause motion sickness

---

## RESPONSIVE BREAKPOINTS

- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md/lg)
- Desktop: > 1024px (xl)

### Key Responsive Changes:
- **Header:** Hamburger menu below 1024px
- **Footer:** 4-col → 2-col @ 768px → 1-col @ 640px
- **Dropdowns:** Full-width overlays on mobile
- **Contact buttons:** Full-width on mobile

---

## EXPORT REQUIREMENTS

Provide complete React component code for:
1. `Navigation.tsx` - Full header with dropdowns and mobile menu
2. `Footer.tsx` - Complete footer with all sections

**Format:**
- TypeScript + React
- Tailwind CSS classes inline
- 'use client' directive
- Proper semantic HTML
- All accessibility attributes
- Hover states defined
- Mobile responsive utilities
- Comments for key sections

**Include:**
- State management for mobile menu
- Scroll behavior for sticky header
- Dropdown hover/click handlers
- Smooth transitions
- Focus management for accessibility

---

## EXAMPLE OUTPUT STRUCTURE

```typescript
'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={/* ... */}>
      {/* Desktop Navigation */}
      {/* Mobile Menu */}
      {/* Dropdowns */}
    </nav>
  );
}
```

Generate modern, professional components that match the brand identity and provide excellent UX!

