export default function Card(props) {
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.desc}</p>
        {props.icon}
      </div>
    </div>
  );
}
