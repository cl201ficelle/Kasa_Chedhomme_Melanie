import "../styles/components/Location.css"

const LocationLogement = (props) => {
  const location = props.location
  if (!location) {
    return null
  } else
  return (
    <div className="titles">
                          <h3 className="location">{props.location}</h3>
                        </div>
    )}
 

export default LocationLogement;
