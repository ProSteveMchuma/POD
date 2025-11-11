# POD Kenya - Print on Demand Website

A professional, responsive website for print-on-demand services in Kenya. This website showcases custom branded printing services including apparel, promotional items, marketing materials, and more.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Sticky navigation with smooth scrolling
- **Contact Form**: Functional contact form for customer inquiries
- **Product Showcase**: Display of various print-on-demand products and services
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Animated Elements**: Smooth scroll animations and interactive components

## Website Sections

1. **Navigation Bar**: Sticky header with links to all sections
2. **Hero Section**: Eye-catching banner with call-to-action buttons
3. **Features Section**: Highlights of key benefits (no minimum orders, fast turnaround, etc.)
4. **Products Section**: Showcase of available products (apparel, promotional items, etc.)
5. **Services Section**: Detailed list of printing services offered
6. **About Section**: Company information with statistics
7. **Use Cases Section**: Target audience and use case examples
8. **Contact Section**: Contact information and inquiry form
9. **Footer**: Quick links, product categories, and contact details

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox and grid layouts
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icon library for visual elements

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/ProSteveMchuma/POD.git
cd POD
```

2. Open `index.html` in your browser or start a local server:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;  /* Main blue color */
    --secondary-color: #f59e0b; /* Accent orange color */
    --dark-color: #1f2937;      /* Dark text color */
    --light-color: #f3f4f6;     /* Light background color */
}
```

### Updating Content

- **Company Name**: Edit the logo text in `index.html` (search for "POD Kenya")
- **Contact Information**: Update phone numbers and email in the contact section
- **Products/Services**: Modify the product and service cards in the respective sections
- **About Section**: Edit the company description and statistics

### Adding Images

Replace the placeholder icon in the About section with your own images:

```html
<div class="about-image">
    <img src="your-image.jpg" alt="Your Image">
</div>
```

## File Structure

```
POD/
├── index.html      # Main HTML file
├── styles.css      # CSS stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Add image gallery for product examples
- Integrate with backend for form submissions
- Add product ordering system
- Implement user authentication
- Add payment gateway integration
- Create admin dashboard for order management

## License

This project is available for use and modification.

## Contact

For questions or support, please contact:
- Email: info@podkenya.com
- Phone: +254 700 000 000

---

Built with ❤️ for Print on Demand Kenya
