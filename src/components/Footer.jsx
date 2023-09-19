import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-light py-3 w-100 mt-4">
        Todo List by Anshul | copyright &copy; {new Date().getFullYear()}
    </footer>
  )
}

export default Footer;