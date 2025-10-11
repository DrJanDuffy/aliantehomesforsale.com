# V0 Prompt: Advanced Property Search Widget for Aliante Real Estate

Create a modern, high-converting property search widget/interface for "Aliante Homes For Sale" real estate website. This should work as both a prominent homepage hero search widget AND a full advanced search page.

## BRAND IDENTITY
- Professional luxury real estate specialist  
- Focus: Aliante, North Las Vegas (gated communities, Sun City 55+, new construction)
- Phone: (702) 707-7273
- 286+ active MLS listings updated every 15 minutes

## COLOR PALETTE
**Primary Colors:**
- Deep Navy: #1a365d
- Royal Blue: #2c5aa0  
- Warm Orange (CTA): #ed8936
- Teal Accent: #16B286

**Gradients:**
- Search widget background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
- Section backgrounds: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%)

## TECHNICAL REQUIREMENTS
- Tech: Next.js + React + Tailwind CSS 3
- TypeScript with proper types
- Fully responsive (mobile-first)
- Accessibility compliant (WCAG 2.1 AA)
- Form validation
- Modern select dropdowns (not native)
- Smooth animations

---

## COMPONENT 1: HERO SEARCH WIDGET

### Purpose
Prominent search widget for homepage hero section - the primary entry point for property searches.

### Layout - Desktop (>768px)

**Container:**
- White card with shadow-xl
- Rounded-xl (12px border-radius)
- Padding: 2rem
- Max-width: 900px
- Backdrop blur effect (backdrop-filter: blur(10px))
- Background: white with 95% opacity

**Search Form - Horizontal Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  Search Aliante Homes                                        │
│  ──────────────────────────────────────────────────────────  │
│                                                               │
│  [Neighborhood ▾]  [Price Range ▾]  [Beds ▾]  [Baths ▾]     │
│                                                               │
│           [ 🔍 Search 286+ Homes ]                           │
│                  (Orange Button)                              │
└─────────────────────────────────────────────────────────────┘
```

**Search Fields:**

**1. Neighborhood Dropdown**
- Label: "Neighborhood" (above field)
- Placeholder: "All Neighborhoods"
- Icon: 📍 or location pin
- Options:
  - All Neighborhoods (default)
  - The Prominence (Luxury Gated)
  - Desert Willows (Family)
  - Club Aliante (Golf Course)
  - The Paseos (Affordable)
  - Sun City Aliante (55+ Active Adult)
  - Villages at Tule Springs (New Construction)
  - Gated Communities
  - Golf Course Homes

**2. Price Range Dropdown**
- Label: "Price Range"
- Placeholder: "Any Price"
- Icon: 💰 or dollar sign
- Options:
  - Any Price (default)
  - Under $300K
  - $300K - $400K
  - $400K - $500K
  - $500K - $600K
  - $600K - $700K
  - $700K - $800K
  - $800K - $1M
  - $1M - $1.5M
  - Over $1.5M
  - Custom Range (opens min/max inputs)

**3. Bedrooms Dropdown**
- Label: "Bedrooms"
- Placeholder: "Any"
- Icon: 🛏️ or bed icon
- Options:
  - Any (default)
  - 1+
  - 2+
  - 3+
  - 4+
  - 5+

**4. Bathrooms Dropdown**
- Label: "Bathrooms"  
- Placeholder: "Any"
- Icon: 🚿 or bath icon
- Options:
  - Any (default)
  - 1+
  - 1.5+
  - 2+
  - 2.5+
  - 3+
  - 3.5+
  - 4+

**Search Button:**
- Full-width below fields (or wide centered button)
- Background: #ed8936 (Warm Orange)
- Text: "Search 286+ Homes" with magnifying glass icon
- Height: 56px
- Font: bold, 18px
- Hover: darker orange (#dd6b20), lift effect (translateY(-2px))
- Transition: 300ms ease

**Advanced Options Link:**
Below search button:
- "Advanced Search Options +" (Royal Blue #2c5aa0)
- Toggles expanded form (see below)

### Mobile Layout (<768px)

**Stacked Layout:**
```
┌─────────────────────┐
│ Quick Search        │
│                     │
│ [Neighborhood ▾]    │
│                     │
│ [Price Range ▾]     │
│                     │
│ [Beds ▾] [Baths ▾]  │
│                     │
│ [ 🔍 Search ]       │
└─────────────────────┘
```

- Each dropdown: full width
- Beds/Baths: side-by-side (50% each with gap)
- Button: full width
- Padding: 1.5rem
- Font sizes: slightly smaller

---

## COMPONENT 2: ADVANCED SEARCH FORM

### Purpose
Expanded search form with all available filters - appears when clicking "Advanced Options" or on dedicated /search page.

### Layout

**Container:**
- White background with shadow
- Padding: 3rem
- Max-width: 1200px
- Rounded corners

**Form Sections (Grid Layout):**

### Section 1: Location & Price
**Grid: 3 columns (2 on tablet, 1 on mobile)**

1. **Neighborhood Multi-Select**
   - Checkboxes for multiple selections
   - All neighborhoods listed
   - "Select All" / "Clear All" options

2. **Price Range**
   - Min Price input (number with $ prefix)
   - Max Price input (number with $ prefix)
   - Or quick buttons: $300K, $400K, $500K, etc.

3. **Property Type**
   - Checkboxes:
     - Single Family Home
     - Townhouse/Condo
     - New Construction
     - Active Adult 55+
     - Golf Course Property
     - Gated Community

### Section 2: Property Details
**Grid: 4 columns**

1. **Bedrooms**
   - Dropdown: Any, 1+, 2+, 3+, 4+, 5+

2. **Bathrooms**
   - Dropdown: Any, 1+, 1.5+, 2+, 2.5+, 3+, 3.5+, 4+

3. **Square Feet**
   - Min sqft input
   - Max sqft input

4. **Lot Size**
   - Dropdown: Any, Small (<5000), Medium (5000-8000), Large (8000-10000), Extra Large (10000+)

### Section 3: Amenities & Features
**Grid: 3 columns (checkboxes)**

**Column 1: Interior**
- [ ] Pool
- [ ] Spa/Hot Tub
- [ ] Fireplace
- [ ] Upgraded Kitchen
- [ ] Walk-in Closets
- [ ] Home Office

**Column 2: Exterior**
- [ ] Covered Patio
- [ ] Outdoor Kitchen
- [ ] Mountain View
- [ ] Golf Course View
- [ ] RV Parking
- [ ] 3-Car Garage

**Column 3: Community**
- [ ] Gated Community
- [ ] HOA
- [ ] Club Amenities
- [ ] Tennis/Pickleball
- [ ] Fitness Center
- [ ] Guard Gated

### Section 4: Additional Filters

1. **Year Built**
   - Range slider: 1990 - 2025

2. **HOA Fees**
   - Dropdown: Any, Under $100, $100-$200, $200-$300, Over $300, No HOA

3. **Days on Market**
   - Dropdown: Any, 1 day, 3 days, 1 week, 2 weeks, 1 month

4. **Status**
   - Checkboxes:
     - [ ] Active
     - [ ] Pending
     - [ ] Under Contract
     - [ ] Coming Soon

### Action Buttons
**Bottom of form:**
```
[ Clear All Filters ]    [ Save Search ]    [ 🔍 Search Properties ]
   (Ghost button)        (Blue outline)         (Orange solid)
```

---

## COMPONENT 3: SEARCH RESULTS PREVIEW

### Quick Stats Bar
Above results:
```
┌──────────────────────────────────────────────────────┐
│ Showing 42 properties | Sort by: [Newest ▾]          │
│                                        [Map View] [List View] │
└──────────────────────────────────────────────────────┘
```

### Active Filters Display
Below stats bar:
```
Applied Filters: [The Prominence ✕] [$400K-$600K ✕] [3+ Beds ✕] [Pool ✕]
                 Clear All
```

Each filter as removable chip:
- Light blue background
- X button to remove
- Rounded pill shape

---

## DESIGN SPECIFICATIONS

### Dropdown/Select Styling
**Custom Dropdowns (not native select):**
- Border: 2px solid #e5e7eb (gray-200)
- Focus: border-color: #2c5aa0 (Royal Blue), ring effect
- Height: 48px minimum (for accessibility)
- Padding: 12px 16px
- Font: 16px
- Icon on right: chevron-down
- Dropdown menu:
  - Shadow-lg
  - Rounded-lg
  - Max-height: 300px with scroll
  - Hover: light blue background
  - Selected: Royal Blue background with white text

### Input Fields
- Same styling as dropdowns
- Number inputs: right-aligned for prices
- Currency formatting: automatic $ prefix
- Thousand separators: commas

### Checkboxes
- Size: 20px × 20px
- Border: 2px solid gray-300
- Checked: Royal Blue background with white checkmark
- Label: 16px, clickable
- Spacing: 12px between items

### Range Sliders
- Track: gray-300 background
- Filled track: Royal Blue
- Thumb: white with Royal Blue border, shadow
- Labels: min/max values displayed

### Buttons

**Primary (Search):**
- Background: #ed8936
- Hover: #dd6b20
- Text: white, bold, 16px
- Padding: 14px 32px
- Rounded: 8px
- Shadow on hover
- Transform: scale(1.02)

**Secondary (Save Search):**
- Background: transparent
- Border: 2px solid #2c5aa0
- Color: #2c5aa0
- Hover: solid #2c5aa0 background, white text

**Ghost (Clear Filters):**
- Background: transparent
- Color: gray-600
- Hover: gray-100 background

### Loading States
- Skeleton screens for results
- Spinner on search button
- Disabled state while searching

### Empty States
```
┌────────────────────────────┐
│         🏠                  │
│                             │
│   No properties found       │
│                             │
│   Try adjusting your        │
│   search filters            │
│                             │
│   [ Clear All Filters ]     │
└────────────────────────────┘
```

---

## ACCESSIBILITY REQUIREMENTS

✅ All form fields have visible labels
✅ Placeholder text doesn't replace labels
✅ Focus states clearly visible (ring-2 ring-blue-500)
✅ Keyboard navigation works for all dropdowns
✅ Aria-labels on icon-only buttons
✅ Error messages clearly associated with fields
✅ Color contrast meets WCAG AA
✅ Touch targets minimum 44×44px on mobile
✅ Form can be submitted with Enter key
✅ Screen reader announcements for dynamic content

---

## RESPONSIVE BREAKPOINTS

- **Mobile:** < 640px
  - Stack all fields vertically
  - Full-width inputs
  - Larger touch targets (56px)
  - Hide advanced options by default

- **Tablet:** 640px - 1024px
  - 2-column grid for most sections
  - Slightly larger text

- **Desktop:** > 1024px
  - Multi-column layouts
  - Horizontal forms where appropriate
  - Hover effects enabled

---

## STATE MANAGEMENT

```typescript
interface SearchFilters {
  neighborhoods: string[];
  priceMin: number | null;
  priceMax: number | null;
  bedrooms: number | null;
  bathrooms: number | null;
  propertyTypes: string[];
  sqftMin: number | null;
  sqftMax: number | null;
  lotSize: string | null;
  amenities: string[];
  yearBuilt: [number, number];
  hoaFees: string | null;
  daysOnMarket: string | null;
  status: string[];
}
```

---

## INTEGRATION NOTES

**Form Submission:**
```typescript
const handleSearch = (filters: SearchFilters) => {
  // Build query params
  const params = new URLSearchParams();
  
  // Add filters to params
  if (filters.neighborhoods.length) {
    params.append('neighborhoods', filters.neighborhoods.join(','));
  }
  
  // Navigate to results
  router.push(`/search-results?${params.toString()}`);
  
  // OR: Open RealScout widget with filters
  // window.open(realscoutUrl + params, '_blank');
};
```

**Saved Searches:**
- Save to localStorage or database
- "Save This Search" button
- Email alerts for new matching properties

---

## EXAMPLE USAGE

### Homepage Hero:
```tsx
<section className="hero-section relative">
  <div className="hero-background gradient-purple">
    <div className="container">
      <h1>Find Your Dream Home in Aliante</h1>
      <p>286+ MLS listings updated every 15 minutes</p>
      
      <PropertySearchWidget variant="hero" />
    </div>
  </div>
</section>
```

### Search Page:
```tsx
<main>
  <AdvancedSearchForm />
  <SearchResults />
</main>
```

---

## EXPORT REQUIREMENTS

Provide complete React components:

1. **PropertySearchWidget.tsx** - Hero/compact search
2. **AdvancedSearchForm.tsx** - Full search with all filters
3. **SearchFilterChips.tsx** - Active filters display
4. **CustomDropdown.tsx** - Reusable select component
5. **RangeSlider.tsx** - Year built slider
6. **SearchResults.tsx** - Results display (bonus)

**Format:**
- TypeScript with proper interfaces
- Tailwind CSS classes
- 'use client' directive
- State management with useState
- Form validation
- Comments for key sections
- Responsive utilities
- Accessibility attributes

Generate modern, conversion-optimized search components!

