import React from "react"

function Index() {
  
  React.useEffect(() => {
    document.title = "Home | JunCode";  
  }, []);

  return (
    <main>Landing Page</main>
  )
}

export default Index