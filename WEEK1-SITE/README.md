# Week 1 Single-Page Site
UPDATED - Fixes and Added Code from Feedback (Rest will Be added later)

## 1) Task + Intended Audience
This project is a single-page website built for a Week 1 assignment to practice basic client-side web development using HTML, CSS, and JavaScript. The intended audience is general users who want to view simple content and sign up with their email (Note: not a real sign up).

## 2) Semantic Structure Used
The page uses semantic HTML elements to clearly structure the content, including:
- `header`
- `nav`
- `main`
- `section`
- `footer`

These elements improve readability, organization, and accessibility.

## 3) Accessibility Choice
I used proper `<label>` elements for the form input and ensured visible keyboard focus using the `:focus-visible` CSS rule.
Added: `skip-link`

## 4) Layout / Responsive Choice
To keep the page readable on different screen sizes, I constrained the main content using a `max-width` and added consistent padding. This prevents overly long line lengths on large screens while still working well on smaller devices.

## 5) JavaScript Interaction
The site includes two JavaScript interactions:
- A form submission handler that validates the email input and displays a confirmation or error message.
- A theme toggle button that switches between light and dark mode.

The theme state is managed by toggling a `dark` class on the `<body>` element.