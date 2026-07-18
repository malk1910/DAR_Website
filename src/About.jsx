import { Parallax } from "react-parallax";
import Header from "./Header";
import bg from "./assets/workers.png";

export default function About() {
    const clients = Array.from(
        { length: 24 },
        (_, i) => `/client/client${i + 1}.png`
      );
      const isMobile = window.innerWidth <= 768;
  return (
    <div>
    <Parallax
    bgImage={bg}
    strength={400}
    bgImageStyle={{
      width: "100%",
      height: "90%",
      objectFit: "cover",
      margin: "auto",
    }}
  >
 
      <section className="about-parallax">

        <div className="overlay"></div>

        <Header title="About Us" />

        {/* White Wave */}

        <div className="wave"></div>

        {/* Cards */}

        <div className="container cards-container">

          <div className="row g-4">

            <div className="col-lg-4">

              <div className="about-card">

                <div className="icon">
                  <i className="fa-solid fa-eye"></i>
                </div>

                <h3>Strategy</h3>

                <div className="blue-line"></div>

                <p>
                Our strategy is built on quality, innovation, sustainability, and professional execution. 
                By combining technical expertise with efficient project management, we deliver reliable solutions
                 that exceed client expectations and create long-term value.
                </p>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="about-card">

                <div className="icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>

                <h3>Mission</h3>

                <div className="blue-line"></div>

                <p>
                Our mission is to deliver sustainable and innovative construction
solutions with the highest professionalism, ensuring client
satisfaction through our commitment to quality, timelines, and
cost efficiency
                </p>

              </div>

            </div>

            <div className="col-lg-4">

              <div className="about-card">

                <div className="icon">
                  <i className="fa-solid fa-gem"></i>
                </div>

                <h3>Vision</h3>

                <div className="blue-line"></div>

                <p>
                We strive to be a leading construction company, delivering innovative 
                and sustainable solutions that build lasting value, strengthen communities, and shape the future.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="about-bottom">

          <h2>
            Building More Than Structures,
            <br />
            <span>We Build Trust.</span>
          </h2>

          <div className="blue-line"></div>

        </div>

      </section>
    </Parallax>

    <section className="clients">

<div className="container">

  <div className="text-center mb-5">
    <h2 className="section-title">Our Clients</h2>
  </div>

  <div className="row g-4">

    {clients.map((logo, index) => (
      <div
        className="col-6 col-sm-4 col-md-3 col-lg-2"
        key={index}
      >
        <div className="client-card">

          <img
            src={logo}
            alt={`Client ${index + 1}`}
            className="img-fluid"
          />

        </div>
      </div>
    ))}

  </div>

</div>

</section>

{/* <section className="served-section">
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="section-title">Industries We Serve</h2>
    </div>

    <div className="row g-4">

      <div className="col-md-6 col-lg-4">
        <div className="industry-card">
          <i className="fa-solid fa-industry"></i>
          <h4>Industrial</h4>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="industry-card">
          <i className="fa-solid fa-hospital"></i>
          <h4>Healthcare</h4>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="industry-card">
          <i className="fa-solid fa-school"></i>
          <h4>Education</h4>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="industry-card">
          <i className="fa-solid fa-road-bridge"></i>
          <h4>Infrastructure</h4>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="industry-card">
          <i className="fa-solid fa-shield-halved"></i>
          <h4>Military</h4>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="industry-card">
          <i className="fa-solid fa-futbol"></i>
          <h4>Sports Facilities</h4>
        </div>
      </div>

    </div>

  </div>
</section> */}
    </div>
  );
}