import React from "react"
import "../styles/Index.scss";

function Index() {
  
  React.useEffect(() => {
    document.title = "Home | JunCode";  
  }, []);

  return (
    <main>

      <section id="group-info">
        <div className="info-card text-center">
          <h2>What Is This?</h2>
          <hr />
          <p>
            <b>JunCode</b>(Junior + Coders) is a group of <b>entry-level</b> software developers who organize to complete freelance projects for <b>job experience</b>.
          </p>
        </div>
        <div className="info-card text-center">
          <h2>Our Vision</h2>
          <hr />
          <p>
            We want to become a go-to for junior developers who struggle to gain industry experience.  
          </p>
        </div>
        <div className="info-card text-center">
          <h2>Our Mission</h2>
          <hr />
          <p>
            We intend to help junior developers to land a job and start their career. 
            Every member should gain the work-experience needed to feel confident in their career path.
          </p>
        </div>
        <div className="info-card text-center">
          <h2>Our Story</h2>
          <hr />
          <p>
            From a small meeting between two individuals, an issue was realized: tech employers want experienced people. 
            Quickly, the idea to build industry experience as a group of junior developrs became a reality. 
          </p>
        </div>
      </section>

    </main>
  )
}

export default Index