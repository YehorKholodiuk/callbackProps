function Fish (props) {
    props.sayHello();
    return (
        <div>
            {props.name} Fish here
            <button onClick={props.sayHello}>say Hello</button>
        </div>
    );
}
export default Fish;
