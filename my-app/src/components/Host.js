import "../styles/components/Host.css";

const Host = (props) => {
  const host = props.host;

  if (!host.name && !host.picture) {
    return null;
  } else
    return (
      <div className="host_container">
        <h2 className="host_name">{host.name}</h2>
        <div className="host_picture">
          <img src={host.picture} />
        </div>
      </div>
    );
};

export default Host;
