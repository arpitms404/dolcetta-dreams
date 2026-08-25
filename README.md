# Dolcetta Dreams

Design with same font style same animation same effect and go throw video 
Build a complete, cute pastel cakes & bakery website called Dolcetta – Sweet Bakery using React, Tailwind and Framer Motion for animations, with React Router. It is a static front-end only (no backend, no real payments or login). Build EVERY page listed below and do not skip any. Use placeholder Lorem text and free pastel bakery photos from Unsplash. Make it fully responsive.

Overall look

Soft, sweet, feminine boutique-bakery style. Lots of whitespace, rounded cards, soft shadows.

Fonts (from Google Fonts — do NOT use a plain sans-serif for headings):

Use the cursive script font "Grand Hotel" (fallback "Pacifico") for the logo, the hero title, and every section heading and page-banner title. Colour them dark brown (#4A3F3F).

Use the bold serif font "Playfair Display" for the top navigation links, breadcrumbs, and button text (button text in italic).

Use "Nunito" for all body text, cards, prices and meta.

Colours: mint/teal #79D0C8 (primary), rose pink #EE6E9F (accent), white and #F7F7F7 backgrounds, warm dark brown #453A3A (footer + dark sections), muted grey #5F5757 for body text.

Signature decorative elements (reuse these everywhere)

Scalloped “icing” edges: a smooth wavy/semicircle-bump border about 50px tall, coloured to match the section, placed at the TOP and BOTTOM of every coloured band and every page banner. The white header also has a scalloped edge hanging down over the hero. These must be curvy frosting-like edges, never a straight line.

Drip / melting edge: the bottom of the mint-green “Magic Processing” section melts downward in irregular rounded icing drips.

Cloud/stamp buttons: ALL buttons are a white blob shape — a rounded pill with a small semicircle bump in the centre of its top edge and another on its bottom edge (like a little cloud or puffy stamp). Button text is italic serif in teal. On hover the blob fills with teal (fills with pink on pink sections) and the text turns white, with a slight scale-up.

Badge logo: a circular stamp/rosette with a dashed scalloped ring, the script name inside, and a small pink ribbon reading “SWEET BAKERY”. Small in the header, large in the footer.

Cupcake-swirl ornament: a tiny “swirl – cupcake – swirl” decoration placed just above every section heading.

Preloader: on first load show a centred loader of three overlapping rotating gears (pink, blue, yellow) with a white circle; keep them spinning, then fade the loader out once the page is ready.

Header (sticky, on every page)

Centered badge logo. Navigation split around it — left of logo: Home, Pages, Portfolio; right of logo: Blog, Shop, Contacts; far right: a cart icon and a search icon (search opens an overlay box). A white scalloped edge hangs below the header over the hero. Dropdown menus: Pages (About Us, Our Staff, Pricing Tables, Content Elements, Recipes Grid), Portfolio, Blog, Shop (Shop, Cart, Contact). The active link is pink with a small dot. On scroll the header shrinks slightly and gains a soft shadow. On mobile it becomes a hamburger menu with collapsible dropdowns.

Footer (on every page)

A full-width band with a full-bleed dark photo background of melted chocolate in a bowl (search Unsplash “melted chocolate bowl”) tinted dark brown, with scalloped edges on both the top and bottom, and white text. Three columns: “Follow Us” (round social icon buttons for Facebook, Instagram, Twitter, Pinterest, YouTube), a large centre badge logo, and “Get Our Sweet News” (email input + subscribe button). A bottom bar reads: “Dolcetta – A Delicious Cakes and Bakery Website”. Also add a round pink “back to top” button in the bottom-right that fades in on scroll and smooth-scrolls to the top.

Inner-page banner pattern (used at the top of every page except Home)

A full-width banner with a full-bleed photo of pink-glazed cookies on a mint-green surface (search Unsplash “pink glazed cookies”), scalloped edges on top and bottom, the page title centred in the script font, and a breadcrumb below it (for example “Home / About Us”).

IMPORTANT about backgrounds

Each coloured band and banner MUST use the specific full-bleed background photo described for it, with the overlay described. Do NOT replace these photo backgrounds with plain solid colours or random unrelated images. The exact background for each section is written below.

PAGE 1 — HOME (sections in this order)

Hero slider — background: full-bleed rotating photos of pastel cupcakes and macarons (Unsplash “pastel cupcakes”, “colorful macarons”). Auto-crossfade every 5 seconds, with left/right arrows and clickable dots, plus a slow zoom (Ken-Burns) on the image. In the centre, a white cloud-shaped panel holds the ornament, the script title “Welcome to Dolcetta”, and the subtext “We offer a great range of different flavoured bite-size pastries and cakes”.

Our Specialties — background: a light photo of baking flour, a sieve and measuring cups on white wood (Unsplash “baking flour ingredients”) under a strong semi-transparent white overlay so it looks very pale. Scalloped edges top and bottom. Ornament + heading, then a 4-item carousel of round scalloped badges: Occasion Cakes, Cupcakes, Macarons, Small Cakes (each with an icon, name and short text), with dots below.

Magic Processing — background: a photo of green macarons / matcha baking (Unsplash “green macarons”) under a mint-green colour overlay so everything is tinted teal. A white scalloped edge on top and a melting drip edge on the bottom. In the centre: a heart icon, the script title “Magic Processing”, a paragraph, and a white cloud button “Discover More”.

Our Creations — plain white background. A 4×2 photo gallery; on hover each image dims under a dark overlay and shows a zoom icon and caption; clicking opens a lightbox.

Values band — background: a dark, warm photo of muffins baking in an oven (Unsplash “muffins baking oven”), sepia/dark. A white scalloped edge on top and a chocolate-brown drip edge on the bottom. Four columns in white text: Tradition, Quality, Creativity, Passion (each a circular outline icon + title + short text), plus a white cloud button “Know Us Better”.

Featured Recipe — background: a light photo of baking ingredients on white wood (Unsplash “baking ingredients eggs”). A recipe card styled like a spiral notepad on a wooden board with a cake photo beside it: title “Chocolate Cake”, 5 gold stars, an ingredient checklist (10 Ounces blackberries, 2 Eggs, ½ Cup sugar, 1 Teaspoon cold water, ½ Tablespoon lemon juice, 1 Salt spoon salt), and a cloud button “See Directions”. Carousel dots.

Clients Say — background: solid pink (#EE6E9F), with scalloped edges top and bottom. A testimonial carousel: round avatar, quote, name (e.g. Maria Doe), dots.

Our Prices — plain white background. Four pricing cards, each topped with a donut photo and a coloured header (mint, mint, pink with a “Best” ribbon, mint): Occasion Cakes $15 (For 1 Cake), Cupcakes $35 (For 2 Cakes), Macarons $55 (For 5 Cakes, Best), Small Cakes $95 (For 10 Cakes); each lists 1/2/5/10 × Sweet Aniseed, Soft Fruits, Assorted, Flavour Mix, and a cloud button “Order Now”.

PAGE 2 — ABOUT US (/about-us)

Banner “About Us”. An “Our Story” section: ornament + heading, a photo on the left (baking ingredients), the story paragraph in the centre, a photo on the right (cake slice); below it a list of highlight points with little pink-heart bullets. Then reuse the pink “Clients Say” testimonial band.

PAGE 3 — OUR STAFF (/our-staff)

Banner “Our Staff”. A grid of team member cards: rounded photo, name, role (Head Baker, Pastry Chef, Cake Designer), a short bio, and social icons on hover, with a hover-lift effect.

PAGE 4 — PRICING TABLES (/pricing-tables)

Banner “Pricing Tables”. A “Flexible Prices” section (ornament + heading + intro paragraph) followed by the same four donut-topped pricing cards from the Home page (including the pink “Best” card).

PAGE 5 — CONTENT ELEMENTS (/content-elements)

Banner “Content Elements”. Show: (a) four message boxes — Information (blue), Confirmation (green), Warning (yellow), Error (red) — each a rounded pill outline with an icon, title, text and a close ×; (b) four circular pie/percentage charts that animate from 0 to their value and count the number up when scrolled into view: 35% Occasion Cakes, 38% Cupcakes, 36% Macarons, 35% Small Cakes; (c) a few promo banner tiles like “Sweet”, “Any Design”, “-50%”.

PAGE 6 — RECIPES GRID (/recipes-grid)

Banner “Recipes Grid”. A filter bar with a “Browse” category dropdown, a “Find a recipe…” search box, a “Newest first” sort dropdown, and a pink search button. Below, a 3-column grid of recipe cards (photo with the recipe name overlaid, a small divider, and “By admin”): Red Velvet Cake, Avocado Ice Cream, Vanilla Ice Cream, Chocolate Macarons, Homemade Ice Cream, Endless Flavor Cupcakes. Hover-zoom on the cards.

PAGE 7 — PORTFOLIO (/portfolio)

Banner “Portfolio Masonry”. A masonry image grid (mixed heights) of bakery photos; on hover a soft dark overlay shows the project title and a zoom icon; clicking opens a lightbox.

PAGE 8 — BLOG (/blog)

Banner “Blog Standard”. A blog post list with a sidebar. Each post card has a featured image with a circular “04 Dec” date badge in the corner, a script title (e.g. “Consequat vel donec”), a meta row (by admin, likes count, categories), an excerpt, and a “[…]” read-more link, with a swirl divider between posts. The sidebar has a search box, a “Gallery” thumbnail-grid widget, categories, and recent posts.

PAGE 9 — SHOP (/shop) and CART (/cart)

Shop: banner “Shop” (breadcrumb Home / Products). A toolbar with “Showing all 12 results”, a “Default sorting” dropdown, and a “Search products…” box. A 3-column product grid: product photo (some with a pink “Sale!” badge), name, price, star rating, and an “Add to cart” cloud button that appears on hover. A sidebar with a Cart widget (“No products in the cart.”), a Price Filter slider, and categories. (UI only, no real checkout.) Cart: banner “Cart”; a blue info box “Your cart is currently empty.” with a cloud button “Return to shop”.

PAGE 10 — CONTACTS (/contacts)

Banner “Contacts”. An “Our Contacts” section: ornament + heading + intro, then three columns — Opening Hours (Monday–Friday, Saturday, Sunday), a Send Message form (Name, Email, Subject, Message + a cloud button “Send”), and address/phone/email. Below, an embedded Google Map.

Animations (add all of these)

The gear preloader that fades out; a sticky header that shrinks and adds a shadow on scroll; the hero crossfade slider with a slow Ken-Burns zoom; every section’s content fades up (fade in while sliding up a little) as it scrolls into view, with row items staggered; cards lift on hover; gallery and portfolio images zoom under a dark overlay and open a lightbox; cloud buttons fill and scale on hover; the pie charts count up on scroll; the Specialties, Clients Say and recipe sections are auto-rotating carousels with dots; smooth scrolling site-wide; and the pink back-to-top button.

Build the theme, all shared elements (header, footer, banners, buttons, scalloped/drip edges, preloader, ornament) and all 10 pages completely, fully responsive (navigation collapses to a hamburger, multi-column grids stack to one column on mobile).

PROMPT END 👆

🔁 Agar Lovable ek shot me kuch pages chhod de (STAGED — 4 messages)

“Design system + fonts + colours + all the decorative elements + header + footer + preloader + routes for all pages + build the COMPLETE Home page” (upar wale details ke saath).

“Using the same theme and shared elements, fully build: About Us, Our Staff, Pricing Tables.”

“Using the same theme and shared elements, fully build: Content Elements, Recipes Grid, Portfolio.”

“Using the same theme and shared elements, fully build: Blog, Shop, Cart, Contacts.”

⚡ for background

“Each coloured band and page banner must use its specified full-bleed background PHOTO with the overlay I described — do not replace backgrounds with solid colours: Hero = cupcakes/macarons; Specialties = pale flour photo; Magic Processing = green-tinted baking photo with a drip bottom; Values = dark oven-muffins photo; Clients Say = solid pink; page banners = pink-cookies-on-mint photo; footer = dark melted-chocolate photo.”

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8369f68f-2927-4e78-8f1e-cf1f6aef95d3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
