import React from "react";

export default function About() {
  let aboutStyles = {
    minHeight: "90vh",
    textAlign: "justify"
  };
  return (
    
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <main role="main" className="inner cover">
          <h1 className="cover-heading py-3">About</h1>
          <div style={aboutStyles}>
          <p className="lead">This is a simple todo list without a database which still persists the data that you
            enter in it with the localStorage functionality and will help you boost productivity if you use it like me.</p>
          <p className="lead">It is just a little project to test my React skills. I have used components, React routing,
            Props, Hooks functionality of React and built this by combining all of these concepts.</p>
          </div>
        </main>
      </div>
   
  )
}
