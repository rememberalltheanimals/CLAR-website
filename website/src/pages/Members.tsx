import React from "react"
import "../styles/Members.scss"

function members() {

  React.useEffect(() => {
    document.title = "Members | JunCode";  
  }, []);

  return (
   <section className="team">
    <div className="container">
      <h1>Junior Programmers, JunCode</h1>
      <div className="row">

        <div className="col-md-3 profile text-center">
          <div className="img-box">
            <img src="../assets/jacoby.jpeg" className="img-responsive"/>
            <ul>
              <a href="https://www.linkedin.com/in/jacoby-yliniemi/" target="_blank"><li><i className="fa-brands fa-linkedin"></i></li></a>
              <a href="https://github.com/Jacoby-Y" target="_blank"><li><i className="fa-brands fa-github"></i></li></a>
              <a href="mailto:cobyyliniemi@gmail.com"><li><i className="fa-regular fa-envelope"></i></li></a>
            </ul>
          </div>
          <h2>Jacoby Yliniemi</h2>
          <h3>Full stack developer</h3>
          <p>Node JS, Express, React, Mongo DB and more</p>
        </div>

        <div className="col-md-3 profile text-center">
          <div className="img-box">
            <img src="../assets/Morgan.jpg" className="img-responsive"/>
            <ul>
              <a href="https://www.linkedin.com/in/morgan-kruger/" target="_blank"><li><i className="fa-brands fa-linkedin"></i></li></a>
              <a href="https://github.com/MorganKruger" target="_blank"><li><i className="fa-brands fa-github"></i></li></a>
              <a href="mailto:nagromkruger@gmail.com"><li><i className="fa-regular fa-envelope"></i></li></a>
            </ul>
          </div>
          <h2>Morgan Kruger</h2>
          <h3>Full stack developer</h3>
          <p>Node JS, Express, React, Mongo DB and more</p>
        </div>

        <div className="col-md-3 profile text-center">
          <div className="img-box">
            <img src="../assets/Davis.jpg" className="img-responsive"/>
            <ul>
              <a href="https://linkedin.com/in/djklevgard" target="_blank"><li><i className="fa-brands fa-linkedin"></i></li></a>
              <a href="https://github.com/davisjklevgard"><li><i className="fa-brands fa-github"></i></li></a>
              <a href="mailto:davisjklevgard@gmail.com"><li><i className="fa-regular fa-envelope"></i></li></a>
            </ul>
          </div>
          <h2>Davis Klevgard</h2>
          <h3>Full stack developer</h3>
          <p>Node JS, Express, EJS, PostgreSQL and more</p>
        </div>


        <div className="col-md-3 profile text-center">
          <div className="img-box">
            <img src="../assets/eunhae.jpg" className="img-responsive"/>
            <ul>
              <a href="https://www.linkedin.com/in/eunhae-hwang-4a4282261/" target="_blank"><li><i className="fa-brands fa-linkedin"></i></li></a>
              <a href="https://github.com/rememberalltheanimals" target="_blank"><li><i className="fa-brands fa-github"></i></li></a>
              <a href="mailto:lavieeunhae@gmail.com"><li><i className="fa-regular fa-envelope"></i></li></a>
            </ul>
          </div>
          <h2>Eunhae Hwang</h2>
          <h3>Full stack developer</h3>
          <p>ASP.NET Web Forms, MVC, Java, MySQL, PHP and more</p>
        </div>

      </div>
    </div>
   </section>
  )
}

export default members