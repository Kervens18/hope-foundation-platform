# FIRST AID INTERNATIONAL, INC. - Donation Platform

A modern, responsive donation platform for FIRST AID INTERNATIONAL, INC. Built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
hope-foundation-platform/
├── index.html                 # Main HTML entry point
├── styles/
│   └── main.css              # All CSS styles and animations
├── js/
│   ├── config.js             # Configuration & data
│   ├── utils.js              # Utility functions
│   ├── components.js         # Reusable component rendering
│   ├── modals.js             # Modal & drawer components
│   └── app.js                # Main app initialization
└── README.md                 # This file
```

## File Descriptions

### `index.html`
- Main entry point
- Minimal HTML structure
- Loads all CSS and JavaScript files
- Contains only container elements for dynamic content

### `styles/main.css`
- All styling for the platform
- CSS custom variables for theming (colors, fonts)
- Animation definitions (fade-in, scale, etc.)
- Component styles (buttons, cards, forms)
- Responsive design with mobile breakpoints

### JavaScript Modules

#### `js/config.js`
- Application state management
- Project data definitions
- Recent donations data
- Blog posts data
- Budget breakdown
- Impact statistics
- Trust badges information

#### `js/utils.js`
- Toast notifications
- Scroll-to-section functionality
- Price formatting
- Countdown timer utilities
- Impact text generation

#### `js/components.js`
- Reusable rendering functions for major sections:
  - Header & navigation
  - Hero section
  - Impact counters
  - Project cards & grid
  - Recent donations
  - Blog section
  - Newsletter signup
  - Footer

#### `js/modals.js`
- Quick donate drawer
- Project modal with tabs
- Promo popup
- Volunteer signup form
- Modal interaction handlers

#### `js/app.js`
- Main application initialization
- DOM rendering orchestration
- Event listener setup
- Countdown timer initialization

## Features

### Core Functionality
- **Dynamic Content Rendering**: All content is generated dynamically via JavaScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS utility classes
- **Donation System**: Multi-currency, recurring donation options
- **Project Management**: Browse, filter, and support projects
- **Impact Tracking**: Real-time donation impacts
- **Before/After Slider**: Interactive image comparison
- **Countdown Timers**: Campaign urgency and promotions

### Interactive Components
- Quick donate drawer with custom amount selection
- Project detail modals with multiple tabs
- Volunteer signup form
- Promotional popups with countdown
- Newsletter subscription
- Social sharing functionality

### Animations
- Fade-in animations on scroll
- Slide-in drawer
- Scale transitions on hover
- Pulsing animation on call-to-action buttons
- Smooth countdown animations

## Styling System

### Color Variables
```css
--color-primary: #0C4A6E      /* Navy blue */
--color-secondary: #0EA5E9    /* Sky blue */
--color-accent: #F59E0B       /* Amber */
--color-success: #10B981      /* Green */
--color-text: #0F172A         /* Very dark */
--color-text-light: #64748B   /* Slate */
--color-border: #E2E8F0       /* Light gray */
```

### Font Variables
```css
--font-primary: 'Inter'        /* Body text */
--font-display: 'Crimson Text' /* Headings */
```

## Development Guide

### Adding a New Section
1. Create a render function in `js/components.js`
2. Add any required data to `js/config.js`
3. Import the function in `js/app.js`
4. Call it in the `renderApp()` function

### Adding a New Modal
1. Create a render function in `js/modals.js`
2. Create open/close functions
3. Add event listeners as needed
4. Link from other components

### Styling New Components
1. Add styles to `js/main.css`
2. Use CSS variables for colors
3. Follow naming conventions (`.component-name`)
4. Add animations if applicable

### State Management
- Use the global `state` object in `js/config.js`
- Update state when user interactions occur
- Re-render components that depend on state

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires CSS Grid and CSS Variables support

## Dependencies

- **Tailwind CSS**: Via CDN (for utility classes)
- **Google Fonts**: Inter & Crimson Text via CDN
- **No external JavaScript frameworks**: Pure vanilla JavaScript

## Customization

### Change Brand Colors
Update the CSS variables in `styles/main.css`:
```css
:root {
  --color-primary: #YOUR_COLOR;
  /* ... */
}
```

### Update Projects Data
Edit the `projects` array in `js/config.js`

### Modify Content
Update component rendering functions in `js/components.js`

## Performance Considerations

- All content is dynamically generated (faster initial load)
- CSS animations use `transform` and `opacity` for smooth 60fps
- Images use CSS gradients instead of actual image files
- Lazy loading ready (can be added for optimization)

## Future Enhancements

- [ ] Backend integration for real donations
- [ ] Database for project management
- [ ] User accounts and donation history
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] PWA support
- [ ] Multi-language support

## License

© 2025 FIRST AID INTERNATIONAL, INC. All rights reserved.
