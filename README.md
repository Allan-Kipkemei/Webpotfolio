# Alvin Chang's Portfolio

This is a personal portfolio website for Alvin Chang, showcasing projects, blogs, and experiences as a full-stack developer. The site is built using Next.js, Tailwind CSS, and other modern web technologies.

🔗 [Live Demo](https://alvinchang.dev)

## Important Notice

While this project's code is open source, please note the following:

- **Attribution Required**: If you use this template for commercial purposes, attribution to Alvin Chang (https://alvinchang.dev) is required.
- **Copyright Notice**: The following elements are copyrighted and NOT available for reuse:
  - All logos and branding elements
  - Blog content and articles
  - Personal information and copy text
  - Project descriptions and images
- **Template Usage**: Only the code structure and implementation are available for use under the license terms.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Optimized for various screen sizes.
- **Dynamic Content**: Fetches and displays blog posts from WordPress.
- **SEO Optimized**: Metadata and Open Graph tags for better search engine visibility.
- **Contact Form**: Allows visitors to send messages directly using Nodemailer and Zoho Mail.
- **Project Showcase**: Highlights various development projects.
- **RSS Feed**: Provides an RSS feed for blog posts.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Typed superset of JavaScript for better code quality.
- **Shiki**: Syntax highlighter for code blocks.
- **Nodemailer**: For sending emails from the contact form.
- **Zoho Mail**: SMTP server for email handling.
- **WordPress**: Headless CMS for blog content management.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- A WordPress site set up for blog content (headless CMS).
- Zoho Mail account for email functionality.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/auroradream04/aurora-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd aurora-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory based on the `.env.example` file and add your environment variables.

## Configuration

1. Update the `siteConfig` object in `src/app/config.tsx` with your personal information, projects, and experiences.
2. Set up a WordPress site to host your blog content and update the `WORDPRESS_API_URL` in your `.env.local` file.
3. Configure Zoho Mail credentials in your `.env.local` file for the contact form functionality.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.

## Deployment

This project can be deployed on platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

## Usage and Attribution

### Permitted Uses
- Use as a template for your personal portfolio
- Study and modify the code structure
- Implement similar features in your own projects

### Requirements
- Attribution must be provided when used commercially
- Remove all personal branding, content, and imagery before use
- Replace all content in `siteConfig` with your own information

### Attribution Format
When using this template commercially, please include the following attribution in your footer or credits page:

```
Template designed by Alvin Chang (https://alvinchang.dev)
```

## License

This project's code structure is available under a modified MIT License with additional requirements for commercial use. See [LICENSE](LICENSE) for details.

**Note**: All personal content, including but not limited to logos, blog content, and personal information, is copyrighted and not available for reuse.

## Contact

For any inquiries, please contact Alvin Chang at alvin@studioaurora.io.

---

If you like this project, please consider giving it a star on GitHub! ⭐