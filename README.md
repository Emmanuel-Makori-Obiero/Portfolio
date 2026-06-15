# My Portfolio
Emmanuel Makori Obiero // Portfolio
What it is
A single-page, responsive portfolio website designed to showcase professional software engineering qualifications, technical skills, and career goals.

The Tech Stack
HTML5: Semantic layout structure.

Tailwind CSS: Utility-first framework used for layout and responsive styling via CDN.

JavaScript (Vanilla): Light script handling mobile navigation toggles.

Google Fonts: Inter typeface for clean interface typography.

The Hardest Part
While building the navigation, the mobile menu overlay was staying active when clicking anchor links. Users would click a link, the page would scroll in the background, but the menu stayed open, blocking the view. I fixed this by attaching inline JavaScript event listeners to each mobile link. Now, clicking any section link forces the mobile container to add the hidden class, closing the drawer instantly as the scroll transition starts.
