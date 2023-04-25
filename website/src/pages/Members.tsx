import React from "react"
import "../styles/Members.scss"

function members() {

  React.useEffect(() => {
    document.title = "Members | JunCode";  
  }, []);

  return (
    <main id="Members">
      <section>
    <div className="row">
      <h1>Our Team</h1>
    </div>
    <div className="row">
      {/* Column 1 */}
      <div className="column">
        <div className="card">
          <div className="img_container">
            <img src="#" />
          </div>
          <h3>Morgan Kruger</h3>
          <p>Full stack developer</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/morgan-kruger/" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/MorganKruger" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:nagromkruger@gmail.com">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Column 2 */}
      <div className="column">
        <div className="card">
          <div className="img_container">
            <img src="#" />
          </div>
          <h3>Jacoby Yliniemi</h3>
          <p>Full stack developer</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/jacoby-yliniemi/" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Jacoby-Y" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:cobyyliniemi@gmail.com">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Column 3 */}
      <div className="column">
        <div className="card">
          <div className="img_container">
            <img src="#" />
          </div>
          <h3>Davis Klevgard</h3>
          <p>Full stack developer</p>
          <div className="icons">
            <a href="https://linkedin.com/in/djklevgard" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/davisjklevgard">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:davisjklevgard@gmail.com">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Column 4 */}
      <div className="column">
        <div className="card">
          <div className="img_container">
            <img src="../assets/eunhae.png" />
          </div>
          <h3>Eunhae Hwang</h3>
          <p>Full stack developer</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/eunhae-hwang-4a4282261/" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/rememberalltheanimals" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:lavieeunhae@gmail.com">
              <i className="fab fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
    </main>
  )
}

export default members