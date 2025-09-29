# Copilot Instructions for granatonatalia.github.io

## Project Context
This is a personal portfolio website for Natalia Granato, a Brazilian software developer. The site showcases her professional experience, skills, projects, and education in a clean, accessible, and modern design.

## Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Design**: Responsive design with CSS Grid and Flexbox
- **Features**: Dark/light mode toggle, accessibility controls, smooth animations
- **Hosting**: GitHub Pages
- **Language**: Portuguese content with English code comments

## Code Style and Conventions

### HTML
- Use semantic HTML5 elements (`<main>`, `<section>`, `<header>`, `<footer>`)
- Include proper accessibility attributes (`aria-label`, `role`, etc.)
- Maintain consistent indentation (4 spaces)
- Use descriptive class names in English
- Include meta tags for SEO and social media sharing

### CSS
- Use CSS custom properties (CSS variables) for theming
- Follow BEM-like naming convention for classes
- Organize styles in logical sections with comments
- Use modern CSS features (Grid, Flexbox, custom properties)
- Implement responsive design with mobile-first approach
- Support both light and dark themes via `[data-theme]` attribute
- Font size variations through body classes (`font-small`, `font-large`, `font-xl`)

### JavaScript
- Use modern ES6+ syntax
- Write vanilla JavaScript (no frameworks)
- Add event listeners within `DOMContentLoaded` callback
- Use descriptive function and variable names
- Implement accessibility features (font size controls, theme toggle)
- Store user preferences in localStorage
- Use intersection observers for scroll animations

## Design Patterns

### Theme System
- Themes controlled via `data-theme` attribute on `<html>`
- CSS variables defined in `:root` and `[data-theme="dark"]`
- Theme preference stored in localStorage
- Toggle button with appropriate icons (🌙/☀️)

### Font Size Controls
- Font sizes controlled via body classes
- Base font size defined with CSS custom property `--font-size-base`
- Controls allow small, normal, large, and extra-large sizes

### Animations
- Use CSS transitions for smooth interactions
- Implement intersection observer for scroll-triggered animations
- Elements fade in and slide up when entering viewport
- Hover effects on interactive elements

## Content Guidelines

### Language
- **Portuguese**: All user-facing content (headings, descriptions, labels)
- **English**: Code comments, class names, function names
- **Bilingual**: Consider both languages for SEO meta tags

### Content Sections
1. **Header**: Name, title, contact information, theme/font controls
2. **About**: Brief professional description
3. **Experience**: Work history with company, role, period, and achievements
4. **Skills**: Categorized technical skills (Frontend, Backend)
5. **Projects**: Portfolio projects with descriptions and tech stack
6. **Education**: Academic background
7. **Footer**: Copyright and additional links

## Accessibility Requirements
- Provide proper ARIA labels for all interactive elements
- Ensure sufficient color contrast in both themes
- Support keyboard navigation
- Include focus indicators
- Use semantic HTML structure
- Provide font size controls for better readability
- Test with screen readers

## Performance Considerations
- Optimize images and use appropriate formats
- Minimize CSS and JavaScript when needed
- Use efficient CSS selectors
- Implement smooth scrolling without performance issues
- Consider lazy loading for images if added

## Best Practices
- Keep the design minimal and professional
- Maintain consistent spacing and typography
- Ensure cross-browser compatibility
- Test responsive design on various devices
- Validate HTML and CSS
- Follow web standards and best practices
- Keep the site fast and lightweight

## Common Tasks
When adding new content or features:
1. Maintain the existing design language and spacing
2. Add appropriate animations and transitions
3. Ensure accessibility compliance
4. Test in both light and dark modes
5. Verify responsive behavior
6. Update Portuguese content appropriately
7. Keep JavaScript vanilla and lightweight

## File Structure
- `index.html` - Main HTML structure
- `styles.css` - All CSS styles with theme support
- `script.js` - Interactive functionality
- `favicon.svg` - Site icon
- `README.md` - Basic project description
- `CNAME` - Custom domain configuration

## Browser Support
Target modern browsers with ES6+ support, focusing on:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers

## Deployment
The site is deployed via GitHub Pages automatically from the main branch. Any changes pushed to main will be reflected on the live site.