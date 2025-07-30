
type ChildProps = {
  name: string;
  food: string;
  meat: string;
};

function Child(props: Readonly<ChildProps>) {
  return <p>{props.name} is eating {props.food} with {props.meat}</p>;
}

function Props() {
  return (
    <div>
      <Child name="Ada" food="Jollof" meat="turkey" />
    </div>
  );
}

export default Props;
