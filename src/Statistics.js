import StaLine from "./StaLine";

export default function Statistics(props) {
  if (props.info.good === 0 && props.info.neutral === 0 && props.info.bad === 0){
    return <h2>No feedback!</h2>
  }
  return (
    <ul>
      <StaLine text="good" value={props.info.good}/>
      <StaLine text="neutral" value={props.info.neutral}/>
      <StaLine text="bad" value={props.info.bad}/>
    </ul>
  );
}