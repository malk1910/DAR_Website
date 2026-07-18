import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>

    <section className="not-found">
      <div className="container">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
          <i className="fa-solid fa-arrow-right ms-2"></i>
        </Link>

      </div>
    </section>

    </>
  )
}
