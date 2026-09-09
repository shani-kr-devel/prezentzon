/* =========================
PROJECT SCREENS
========================= */

const screens = [
{
number: "01",
title: "Home & Product Catalog",
description:
"A clean storefront where customers can discover products, explore categories and start shopping.",
image: "home.jpeg",
},
{
number: "02",
title: "Product Details",
description:
"Detailed product pages give customers the information they need before adding an item to their cart.",
image: "product_info.png",
},
{
number: "03",
title: "User Authentication",
description:
"Customers can create an account and sign in to access their personalized shopping experience.",
image: "login.png",
},
{
number: "04",
title: "Shopping Cart",
description:
"Customers can review their products, update quantities, remove items and check their total.",
image: "cart.png",
},
{
number: "05",
title: "Checkout Process",
description:
"A streamlined checkout experience that guides customers through payment and order address information.",
image: "checkoutpage.png",
},
];

/* =========================
FEATURES
========================= */

const features = [
{
title: "Product Catalog",
description:
"Customers can browse products and explore different items available in the store.",
},
{
title: "Product Details",
description:
"Detailed product pages provide useful information before making a purchase.",
},
{
title: "Authentication",
description:
"Customers can create accounts and securely sign in to their account.",
},
{
title: "Shopping Cart",
description:
"Products can be added, removed and updated directly from the shopping cart.",
},
{
title: "Responsive Design",
description:
"The interface adapts to desktop, tablet and mobile screen sizes.",
},
{
title: "REST API",
description:
"Frontend functionality communicates with the backend through structured API endpoints.",
},
];

/* =========================
ARCHITECTURE
========================= */

const architecture = [
{
title: "Frontend",
description:
"React components create the interface, navigation and interactive shopping experience.",
},
{
title: "Backend",
description:
"Django and REST APIs handle users, products, carts and application logic.",
},
{
title: "Database",
description:
"Structured database models store products, users, carts and order information.",
},
];

/* =========================
RENDER SCREENS
========================= */

const screensContainer =
document.getElementById("screens-container");

screens.forEach((screen) => {
const screenElement = document.createElement("div");

screenElement.className = "screen";

screenElement.innerHTML = `
<div class="screen-info">

  <div class="screen-number">
    ${screen.number}
  </div>

  <div>
    <h3>${screen.title}</h3>

    <p>
      ${screen.description}
    </p>
  </div>

</div>

<div class="screen-image">
  <img
    src="${screen.image}"
    alt="${screen.title}"
    loading="lazy"
  />
</div>


`;

screensContainer.appendChild(screenElement);
});

/* =========================
RENDER FEATURES
========================= */

const featuresContainer =
document.getElementById("features-container");

features.forEach((feature, index) => {
const featureElement = document.createElement("div");

featureElement.className = "feature";

featureElement.innerHTML = `
<div class="feature-num">
${String(index + 1).padStart(2, "0")}
</div>

<h3>
  ${feature.title}
</h3>

<p>
  ${feature.description}
</p>


`;

featuresContainer.appendChild(featureElement);
});

/* =========================
RENDER ARCHITECTURE
========================= */

const architectureContainer =
document.getElementById("architecture-container");

architecture.forEach((item, index) => {
const architectureElement =
document.createElement("div");

architectureElement.className =
"architecture-card";

architectureElement.innerHTML = `
<div class="num">
${String(index + 1).padStart(2, "0")}
</div>

<h3>
  ${item.title}
</h3>

<p>
  ${item.description}
</p>


`;

architectureContainer.appendChild(
architectureElement
);
});