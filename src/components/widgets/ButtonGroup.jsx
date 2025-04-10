import "./ButtonGroup.css";

export default function ButtonGroup(props) {
    return(
        <button onClick={ () => props.setSelectedTable(props.description) } className="button btn d-flex justify-content-center align-items-center m-1 py-2 px-3">
            <div>
                { props.imagePath && <img src={ props.imagePath } width="50px" /> }
            </div>
            <div>
                <h1>{ props.count }</h1>
                <h6>{ props.description }</h6>
            </div>
        </button>
    );
}