import "../styles/page/Error.css"

function Error() {
    return (
      <div className="error">
        <div className="number">
            404
        </div>
        <div className="error_text">
            Oups! La page que vous demandez n'existe pas
        </div>
      </div>
    )
  }
  
  export default Error