// That is the best

// import { useParams } from "react-router-dom";
// import { projects } from "./data/projectsData";
// import PageHero from "./PageHero";

// export default function ProjectDetails() {

//   const { id } = useParams();

//   const project = projects.find(
//     (p) => p.id === Number(id)
//   );

//   if (!project) {
//     return <h2>Project Not Found</h2>;
//   }

//   return (
//     <>
//       <PageHero
//         title={project.title}
//         subtitle={project.category}
//         bgImage={project.image}
//       />

//       <section className="project-details">

//         <div className="container">

//           <div className="row align-items-center g-5">

//             <div className="col-lg-6">

//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="main-project-image"
//               />

//             </div>

//             <div className="col-lg-6">

//               <span className="project-category">
//                 {project.category}
//               </span>

//               <h2>{project.title}</h2>

//               <div className="project-meta">

//                 <p>
//                   <strong>Client :</strong> {project.client}
//                 </p>

//                 <p>
//                   <strong>Services :</strong>
//                 </p>

//                 <div className="service-tags">

//                   {project.service.map((item, index) => (

//                     <span key={index}>
//                       {item}
//                     </span>

//                   ))}

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       <section className="project-scope">

//         <div className="container">

//           <h2 className="section-title">
//             Project Scope
//           </h2>

//           <div className="scope-box">

//             {project.scope.map((item, index) => (

//               <div className="scope-item" key={index}>

//                 <i className="fa-solid fa-check"></i>

//                 <span>{item}</span>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       <section className="project-gallery">

//         <div className="container">

//           <h2 className="section-title">
//             Project Gallery
//           </h2>

//           <div className="row g-4">

//             {project.gallery.map((img, index) => (

//               <div
//                 className="col-md-4"
//                 key={index}
//               >

//                 <img
//                   src={img}
//                   alt=""
//                   className="gallery-image"
//                 />

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//     </>
//   );
// }
///////////////////////////////////////////////////////////////////

// import { useParams } from "react-router-dom";
// import { projects } from "./data/projectsData";
// import PageHero from "./PageHero";

// export default function ProjectDetails() {

//   const { id } = useParams();

//   const project = projects.find(
//     p => p.id === Number(id)
//   );

//   if (!project) {
//     return <h2>Project Not Found</h2>;
//   }

//   return (
//     <>
//       <PageHero
//         title={project.title}
//         subtitle={project.category}
//         bgImage={project.image}
//       />

//       {/* Overview */}

//       <section className="project-overview">

//         <div className="container">

//           <div className="row align-items-center gy-5">

//             <div className="col-lg-7">

//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="project-main-image"
//               />

//             </div>

//             <div className="col-lg-5">

//               <span className="project-sector">
//                 {project.category}
//               </span>

//               <h2>{project.title}</h2>

//               <div className="project-client">

//                 <small>CLIENT</small>

//                 <h5>{project.client}</h5>

//               </div>

//               <div className="project-services">

//                 <small>SERVICES</small>

//                 <div className="service-list">

//                   {project.service.map((item,index)=>(
//                     <span key={index}>
//                       {item}
//                     </span>
//                   ))}

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* Scope */}

//       <section className="project-scope">

//         <div className="container">

//           <div className="section-header">

//             <small>OUR WORK</small>

//             <h2>Project Scope</h2>

//           </div>

//           <div className="scope-list">

//             {project.scope.map((item,index)=>(

//               <div
//                 className="scope-row"
//                 key={index}
//               >

//                 <span>
//                   {String(index+1).padStart(2,"0")}
//                 </span>

//                 <p>{item}</p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* Gallery */}

//       <section className="project-gallery">

//         <div className="container">

//           <div className="section-header">

//             <small>GALLERY</small>

//             <h2>Project Images</h2>

//           </div>

//           <div className="gallery-grid">

//             {project.gallery.map((img,index)=>(

//               <div key={index}>

//                 <img
//                   src={img}
//                   alt=""
//                 />

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//     </>
//   );

// }
////////////////////////////////////////////////////



import { useParams } from "react-router-dom";
import { projects } from "./data/projectsData";
import PageHero from "./PageHero";

export default function ProjectDetails() {

      const { id } = useParams();

  const project = projects.find(
    p => p.id === Number(id)
  );

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

    return(
        <>
<PageHero
  title={project.title}
//   subtitle={project.category}
  bgImage={project.image}
/>

<section className="project-overview">
  <div className="container">

    <div className="project-card">

      <img
        src={project.image}
        className="project-cover"
      />

      <div className="project-meta">

        <div className="meta-item">
          <span>CLIENT</span>
          <h4>{project.client}</h4>
        </div>

        <div className="meta-item">
          <span>CATEGORY</span>
          <h4>{project.category}</h4>
        </div>

        <div className="meta-item">
          <span>SERVICES</span>

          <div className="service-tags">

            {project.service.map((item,index)=>

              <span key={index}>
                {item}
              </span>

            )}

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

<section className="project-scope">

       <div className="container">
          <div className="section-header">
            {/* <small>OUR WORK</small> */}
            <h2 className="section-title">Project Scope</h2>
          </div>
          <div className="scope-list">
            {project.scope.map((item,index)=>(

              <div
                className="scope-row"
                key={index}
              >

                <span>
                  {String(index+1).padStart(2,"0")}
                </span>

                <p>{item}</p>

              </div>

            ))}

          </div>
                  </div>

      </section>

{/* <section className="scope-section">

<div className="container">

<h2>Scope Of Work</h2>

<div className="scope-grid">

{project.scope.map((item,index)=>(

<div
className="scope-card"
key={index}
>

<div className="scope-number">
0{index+1}
</div>

<p>{item}</p>

</div>

))}

</div>

</div>

</section> */}
<section className="gallery-section">

<div className="container">

<h2 className="section-title">Project Gallery</h2>

<div className="gallery-grid">

{project.gallery.map((img,index)=>(

<div className="gallery-item" key={index}>

<img src={img}/>

</div>

))}

</div>

</div>

</section>



    </>
  );

}