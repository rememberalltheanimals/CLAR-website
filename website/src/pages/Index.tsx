import React from 'react'

function Index() {
  
  React.useEffect(() => {
    document.title = "Home | CLAR";  
  }, []);

  return (
    <main>Landing Page</main>
  )
}

export default Index