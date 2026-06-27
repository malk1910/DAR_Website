import React from "react";
// import { Link } from "react-router-dom";

// export default function Header({ title }) {
//   return (
//     <section className="header">
//       <div className="container">

//         <div className="breadcrumb">
//           <Link to="/">Home</Link>
//           <span> / </span>
//           <span>{title}</span>
//         </div> 

//         <h1>{title}</h1>

//         <p>Designing Ambitions, Realizing Visions</p>

//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <div className="about-header">

      <p>
        <Link to="/">Home</Link> / {title}
      </p>

      <h1>{title}</h1>

      <h5>
        Designing Ambitions, Realizing Visions
      </h5>

      <div className="blue-line"></div>

    </div>
  );
}