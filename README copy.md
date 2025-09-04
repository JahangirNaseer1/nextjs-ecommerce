# Next.js Frontend Boilerplate

This is a design-ready Next.js boilerplate with TypeScript, SCSS, and Bootstrap, including:

- Bootstrap 5 for rapid UI development (imported globally)
- SCSS setup with variables, mixins, media queries, and Google Fonts (Roboto, Open Sans)
- Responsive layout with defined breakpoints
- Global font and color variables
- Reusable Header and Footer components
- Container structure for pages
- Ready-to-use folder structure: `pages/`, `components/`, `styles/`, `public/`, `hooks/`, `utils/`

## Bootstrap Usage

Bootstrap CSS is imported globally. You can use any Bootstrap classes in your components:

```jsx
<button className="btn btn-primary">Bootstrap Button</button>
```

You can also combine Bootstrap with your custom SCSS styles.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Start building your frontend!**

## Folder Structure

- `components/` – Reusable UI components (Header, Footer)
- `styles/` – SCSS partials and global styles
- `hooks/` – Custom React hooks
- `utils/` – Utility functions
- `public/` – Static assets

## SCSS

- Edit variables in `styles/_variables.scss`
- Add mixins in `styles/_mixins.scss`
- Adjust breakpoints in `styles/_mediaqueries.scss`
- Import new fonts in `styles/_fonts.scss`

---

Replace the logo and navigation as needed for your project.
