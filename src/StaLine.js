export default function Statistics(props) {
  return (
    <li key={props.text}>{props.text + ": " + props.value}</li>
  );
}