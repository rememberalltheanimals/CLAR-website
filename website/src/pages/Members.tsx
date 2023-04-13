import React from 'react'

function members() {

  React.useEffect(() => {
    document.title = "Members | CLAR";  
  }, []);

  return (
    <main>
      <h2>CLAR: Members</h2>
      <p>Here is a quick list of the current CLAR members and their contact info.</p>
      <ul>
        <dl>
          <dt>Eunhae Hwang</dt>
          <dd>Email: <a href="mailto:lavieeunhae@gmail.com">lavieeunhae@gmail.com</a></dd>
          <dd>LinkedIn: <a href="http://www.linkedin.com/in/eunhae-hwang-4a4282261/">www.linkedin.com/in/eunhae-hwang-4a4282261/</a></dd>
          <dd>GitHub: <a href="http://github.com/rememberalltheanimals">github.com/rememberalltheanimals</a></dd>
        </dl>
        <dl>
          <dt>Morgan Kruger</dt>
          <dd>Email: <a href="mailto:nagromkruger@gmail.com">nagromkruger@gmail.com</a></dd>
          <dd>LinkedIn: <a href="http://www.linkedin.com/in/morgan-kruger/">www.linkedin.com/in/morgan-kruger/</a></dd>
          <dd>GitHub: <a href="http://github.com/MorganKruger">github.com/MorganKruger</a></dd>
        </dl>
        <dl>
          <dt>Jacoby Yliniemi</dt>
          <dd>Email: <a href="mailto:cobyyliniemi@gmail.com">cobyyliniemi@gmail.com</a></dd>
          <dd>LinkedIn: <a href="http://www.linkedin.com/in/jacoby-yliniemi/">www.linkedin.com/in/jacoby-yliniemi/</a></dd>
          <dd>GitHub: <a href="http://github.com/Jacoby-Y">github.com/Jacoby-Y</a></dd>
        </dl>
      </ul>
    </main>
  )
}

export default members