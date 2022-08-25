function Footer() {
    return <footer className="page-footer blue-grey lighten-1">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a 
        className="grey-text text-lighten-4 right" 
        href="https://yerszh.github.io/Fortnite-React-Shop/" 
        target="_blank" 
        rel="noreferrer"
      >Repo</a>
      </div>
    </div>
  </footer>
  }
  
  export {Footer}