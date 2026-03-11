# V0 Prompt: Aliante Real Estate Photo Gallery Component

## Context
Real estate website for Aliante North Las Vegas showcasing luxury homes, gated communities, and new construction.

## Component Request
Create a modern, responsive photo gallery component for property listings with the following features:

### Design Requirements
- **Framework:** Next.js 15 + React 19 + Tailwind CSS 3
- **Layout:** Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- **Images:** High-quality real estate photos from Unsplash
- **Hover Effects:** Smooth zoom and overlay with property details
- **Modal/Lightbox:** Click to expand image in full-screen view with navigation
- **Responsive:** Mobile-first, touch-friendly

### Features
1. **Image Grid:**
   - Masonry or uniform grid layout
   - Lazy loading for performance
   - Smooth transitions on hover
   - Property info overlay (price, beds, baths, sqft)

2. **Lightbox Modal:**
   - Full-screen image viewer
   - Left/right navigation arrows
   - Close button (X)
   - Keyboard navigation (arrow keys, ESC)
   - Touch gestures for mobile

3. **Filter Tabs (Optional):**
   - All Properties
   - Luxury Homes ($600K+)
   - Gated Communities
   - New Construction
   - Sun City 55+

### Brand Colors
- Deep Navy: #1a365d
- Royal Blue: #2c5aa0
- Warm Orange: #ed8936 (CTAs)
- Teal Accent: #16B286

### Sample Property Data
```typescript
const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
    price: '$595,000',
    address: '123 Desert Vista Dr',
    city: 'Aliante, NV 89084',
    beds: 4,
    baths: 3,
    sqft: 2450,
    category: 'luxury'
  },
  // ... more properties
];
```

### Accessibility
- ARIA labels
- Keyboard navigation
- Alt text for all images
- Focus states

### Call-to-Action
- "View Full Details" button on hover
- "Schedule Showing" button in modal
- Links to /contact page

## Copy to v0.dev
Paste this prompt into v0.dev to generate the photo gallery component, then share the link for refinements.

