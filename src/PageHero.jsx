import { Link } from "react-router-dom";

export default function PageHero({
  title,
  subtitle,
  bgImage,
  children,
}) {
  return (
    <>
      <section
        className="page-hero"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="page-overlay"></div>

        <div className="container page-content">

          <p className="breadcrumb">
            <Link to="/">Home</Link> / {title}
          </p>

          <h1>{title}</h1>

          <p>{subtitle}</p>

          <div className="blue-line"></div>

        </div>
      </section>

      {children}
    </>
  );
}