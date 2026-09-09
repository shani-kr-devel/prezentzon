import React from "react";

export default function Ecommerce() {
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #f6f1ea;
          color: #241b15;
          font-family: "Inter", sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        section {
          padding: 110px 8vw;
          border-top: 1px solid #d8cdc2;
        }

        .work-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
          margin-bottom: 65px;
        }

        .project-title {
          font-size: clamp(48px, 6vw, 85px);
          line-height: 0.92;
          letter-spacing: -5px;
          font-weight: 600;
        }

        .project-type {
          font-family: "DM Mono", monospace;
          font-size: 11px;
          color: #817368;
          white-space: nowrap;
        }

        .project-intro {
          padding-bottom: 65px;
          margin-bottom: 90px;
          border-bottom: 1px solid #cfc2b6;
        }

        .project-intro p {
          max-width: 570px;
          color: #71655c;
          line-height: 1.8;
          font-size: 16px;
        }

        .screen {
          margin-bottom: 140px;
        }

        .screen-info {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .screen-number,
        .feature-num,
        .architecture-card .num {
          font-family: "DM Mono", monospace;
          color: #965d39;
          font-size: 12px;
        }

        .screen-info h3 {
          font-size: 27px;
          letter-spacing: -1px;
          margin-bottom: 12px;
        }

        .screen-info p {
          max-width: 610px;
          color: #74685e;
          font-size: 15px;
          line-height: 1.75;
        }

        .screen-image {
          width: 100%;
          background: #e7dfd6;
          border: 1px solid #d0c3b7;
          padding: 12px;
          overflow: hidden;
        }

        .screen-image img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          transition: transform 0.5s ease;
        }

        .screen-image:hover img {
          transform: scale(1.012);
        }

        .technology {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          padding-top: 30px;
        }

        .technology h3 {
          font-size: 28px;
          margin-bottom: 18px;
          letter-spacing: -1px;
        }

        .technology p {
          max-width: 600px;
          color: #71655c;
          line-height: 1.8;
        }

        .section-title {
          font-size: clamp(42px, 5vw, 70px);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 600;
          max-width: 850px;
        }

        .feature-list {
          margin-top: 70px;
          border-top: 1px solid #cfc2b6;
        }

        .feature {
          display: grid;
          grid-template-columns: 80px 280px 1fr;
          gap: 30px;
          padding: 30px 0;
          border-bottom: 1px solid #cfc2b6;
        }

        .feature h3 {
          font-size: 19px;
        }

        .feature p {
          color: #74685e;
          line-height: 1.7;
          max-width: 600px;
          font-size: 14px;
        }

        .dark {
          background: #2d2119;
          color: #f5eee7;
          border-top: none;
        }

        .architecture {
          margin-top: 70px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #604a3a;
          border: 1px solid #604a3a;
        }

        .architecture-card {
          min-height: 240px;
          padding: 35px;
          background: #2d2119;
        }

        .architecture-card .num {
          color: #ce9973;
        }

        .architecture-card h3 {
          margin: 38px 0 14px;
          font-size: 20px;
        }

        .architecture-card p {
          color: #c0b0a4;
          font-size: 14px;
          line-height: 1.7;
        }

        .cta {
          min-height: 550px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cta h2 {
          font-size: clamp(55px, 8vw, 110px);
          line-height: 0.88;
          letter-spacing: -6px;
          font-weight: 600;
        }

        .cta h2 span {
          color: #965d39;
        }

        .cta-link {
          margin-top: 45px;
          font-family: "DM Mono", monospace;
          font-size: 13px;
          color: #965d39;
        }

        footer {
          padding: 30px 8vw;
          border-top: 1px solid #d8cdc2;
          color: #796d63;
          font-family: "DM Mono", monospace;
          font-size: 11px;
        }

        @media (max-width: 800px) {
          section {
            padding: 75px 25px;
          }

          .work-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .project-type {
            white-space: normal;
          }

          .project-intro,
          .technology {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .screen {
            margin-bottom: 90px;
          }

          .screen-info {
            grid-template-columns: 45px 1fr;
            gap: 15px;
          }

          .screen-info h3 {
            font-size: 22px;
          }

          .screen-image {
            padding: 6px;
          }

          .feature {
            grid-template-columns: 45px 1fr;
            gap: 15px;
          }

          .feature p {
            grid-column: 2;
          }

          .architecture {
            grid-template-columns: 1fr;
          }

          footer {
            padding: 25px;
          }
        }
      `}</style>

      <div>
        <section id="work">
          <div className="work-header">
            <h2 className="project-title">Space</h2>

            <div className="project-type">
              FULL STACK APPLICATION
            </div>
          </div>

          <div className="project-intro">
            <p>
              A complete e-commerce platform with product browsing,
              authentication, product details, shopping cart and checkout
              functionality.
            </p>
          </div>

          {screens.map((screen) => (
            <div className="screen">
              <div className="screen-info">
                <div className="screen-number"></div>

                <div>
                  <h3>{screen.title}</h3>
                  <p>{screen.description}</p>
                </div>
              </div>

              <div className="screen-image">
                <img src={screen.image} alt={screen.title} />
              </div>
            </div>
          ))}

          <div className="technology">
            <div>
              <h3>Technology</h3>

              <p>
                The application combines a modern React frontend with a
                backend API and database architecture to create a complete
                shopping experience.
              </p>
            </div>
          </div>
        </section>

        <section id="features">
          <h2 className="section-title">
            Everything needed
            <br />
            for online shopping.
          </h2>

          <div className="feature-list">
            {features.map((feature, index) => (
              <div className="feature" key={feature.title}>
                <div className="feature-num">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="dark">
          <h2 className="section-title">
            More than just
            <br />
            a pretty interface.
          </h2>

          <div className="architecture">
            {architecture.map((item, index) => (
              <div className="architecture-card" key={item.title}>
                <div className="num">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta" id="contact">
          <h2>
            Have an idea?
            <br />
            Make it <span>real.</span>
          </h2>

          <a
            href="mailto:shanikumar.presentzon@email.com"
            className="cta-link"
          >
            Start a conversation →
          </a>
        </section>

        <footer>
          <span>shani</span>
        </footer>
      </div>
    </>
  );
}
