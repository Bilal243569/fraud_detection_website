# Giftnix AI Fraud Detection - Design Guidelines

## Design Approach
**System-Based Approach**: Using Material Design principles adapted for a professional financial/corporate application. This ensures consistency, accessibility, and trust - essential for a fraud detection platform.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Primary Blue: 210 85% 45% (corporate trust and security)
- Dark Blue: 210 90% 25% (navigation and headers)
- Light Blue: 210 60% 95% (subtle backgrounds)

**Supporting Colors:**
- White: 0 0% 100% (clean backgrounds)
- Dark Gray: 210 10% 20% (text and UI elements)
- Light Gray: 210 5% 95% (card backgrounds)

**Status Colors:**
- Fraud Alert Red: 0 75% 55%
- Safe Green: 120 50% 45%
- Warning Orange: 35 85% 55%

### B. Typography
**Primary Font**: Poppins (professional, modern)
- Headers: 600-700 weight
- Body text: 400 weight
- Buttons/CTAs: 500 weight
- Data/numbers: 500 weight (for emphasis)

**Hierarchy:**
- H1: 2.5rem (main page titles)
- H2: 2rem (section headers)
- H3: 1.5rem (card titles)
- Body: 1rem
- Small text: 0.875rem

### C. Layout System
**Spacing Units**: Tailwind units of 2, 4, 6, and 8
- Micro spacing: p-2, m-2 (buttons, form elements)
- Standard spacing: p-4, m-4 (cards, sections)
- Large spacing: p-6, m-6 (major sections)
- Extra large: p-8, m-8 (page margins, hero sections)

### D. Component Library

**Navigation:**
- Clean horizontal navbar with subtle shadow
- Logo on left, navigation items center, user profile/logout right
- Mobile: hamburger menu with slide-out drawer

**Cards:**
- White backgrounds with subtle border (1px solid light gray)
- Rounded corners (8px)
- Subtle shadow for depth
- 4-unit padding internally

**Forms:**
- Clean input fields with focused border highlighting
- Labels above inputs
- Validation messages below fields
- Primary blue submit buttons

**Data Displays:**
- Overview cards with large numbers and icons
- Clean tables with alternating row colors
- Charts with branded color scheme
- Progress indicators and status badges

**Alerts & Status:**
- Color-coded fraud detection results
- Toast notifications for actions
- Confidence scores with progress bars

### E. Page-Specific Elements

**Login Pages:**
- Split-screen layout (left: form, right: branding/illustration)
- Centered forms with ample whitespace
- Security disclaimers prominently displayed
- SMS verification modal overlay

**Dashboard:**
- Grid-based overview cards at top
- Charts section with responsive layout
- Fraud detection form as prominent feature
- Clean navigation between sections

**Gift Card Marketplace:**
- Category-based grid layout
- Brand cards with logos and descriptions
- Shopping cart functionality
- Purchase confirmation flow

## Images
**Hero Images**: No large hero images required - focus on clean, data-driven interface
**Brand Logos**: Gift card vendor logos (Netflix, Amazon, Spotify, etc.) within product cards
**Icons**: Material Design icons for features, security, and navigation
**Illustrations**: Simple security/AI-themed illustrations for login page backgrounds

## Responsive Behavior
- Desktop: Multi-column layouts, side navigation
- Tablet: Adapted grids, collapsible navigation
- Mobile: Single column, bottom navigation, touch-optimized forms

## Interactive Elements
- Subtle hover effects on cards and buttons
- Smooth transitions between states
- Loading states for fraud detection processing
- Real-time form validation feedback

This design system creates a trustworthy, professional appearance suitable for a financial fraud detection platform while maintaining modern usability standards.