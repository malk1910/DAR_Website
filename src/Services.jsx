import PageHero from "./PageHero";
import bg from "./assets/helmetConst.png";
import { projects, services } from "./data/projectsData";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Professional Engineering & Construction Solutions."
        bgImage={bg}
      />

      <section className="services-intro py-5">
        <div className="container text-center mb-4">

          <h2 className="section-title mx-auto">
            Building Excellence Across Every Sector
          </h2>

          <p>
            DAR delivers integrated construction solutions covering
            planning, engineering, execution and maintenance. Our team
            combines technical expertise with innovative thinking to
            deliver projects safely, efficiently and on schedule.
          </p>

        </div>
      </section>
{/* ///////////////////////////////////////// */}

      <section className="service-blocks">
  <div className="container">

    <div className="service-block">

      <div className="service-number">
        01
      </div>

      <div className="service-content">

        <h2>Consultancy</h2>

        <div className="border-line"></div>

        <ul>

          <li>Engineering Design</li>
          <li>Structural Analysis</li>
          <li>Shop Drawings</li>
          <li>Project Planning</li>
          <li>Quantity Surveying</li>

        </ul>

        {/* <Link
          to="/Projects?service=Consultancy"
          className="service-link"
        >
          View Related Projects
          <i className="fa-solid fa-arrow-right"></i>
        </Link> */}

      </div>

    </div>



    <div className="service-block">

      <div className="service-number">
        02
      </div>

      <div className="service-content">

        <h2>Supply</h2>

        <div className="border-line"></div>

        <ul>

          <li>Steel Structures</li>
          <li>Construction Materials</li>
          <li>MEP Equipment</li>
          <li>Electrical Panels</li>
          <li>Mechanical Equipment</li>

        </ul>

      </div>

    </div>



    <div className="service-block">

      <div className="service-number">
        03
      </div>

      <div className="service-content">

        <h2>Installation</h2>

        <div className="border-line"></div>

        <ul>

          <li>Steel Structures</li>
          <li>MEP Systems</li>
          <li>Infrastructure Networks</li>
          <li>Architectural Finishes</li>
          <li>Civil Works</li>

        </ul>

      </div>

    </div>



    <div className="service-block">

      <div className="service-number">
        04
      </div>

      <div className="service-content">

        <h2>Maintenance</h2>

        <div className="border-line"></div>

        <ul>

          <li>Building Maintenance</li>
          <li>MEP Maintenance</li>
          <li>Facility Upgrades</li>
          <li>Asset Rehabilitation</li>
          <li>Periodic Inspection</li>

        </ul>



      </div>

    </div>

  </div>
</section>
{/* ////////////////////////////////////////////// */}

      {/* <section className="services-grid">
        <div className="container">

          <div className="row g-4">

            {services.map((service, index) => (

              <div className="col-md-6 col-lg-4" key={index}>

                <div className="service-card">

                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>

                  <h4>{service.title}</h4>

                  <p>{service.description}</p>
                  <Link

to={`/Projects?service=${encodeURIComponent(service.title)}`}

className="service-btn "

>

View Related Projects

</Link>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section> */}

      <section className="why-dar">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h2 className="section-title">
                Why Choose DAR?
              </h2>

              <ul>

                <li>✔ Experienced Engineering Team</li>

                <li>✔ High Quality Standards</li>

                <li>✔ Safety First Approach</li>

                <li>✔ On-Time Project Delivery</li>

                <li>✔ Cost Effective Solutions</li>

                <li>✔ Sustainable Construction Practices</li>

              </ul>

            </div>

            <div className="col-lg-6">

              <div className="why-box">

                <div>
                  <h3>18+</h3>
                  <span>Major Projects</span>
                </div>

                <div>
                  <h3>6+</h3>
                  <span>Sectors Served</span>
                </div>

                <div>
                  <h3>100%</h3>
                  <span>Client Commitment</span>
                </div>

                <div>
                  <h3>24/7</h3>
                  <span>Technical Support</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}