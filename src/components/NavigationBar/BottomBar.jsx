import "./BottomBar.css";
import { Link } from 'react-router-dom';

export default function BottomBar(props) {

    return(
        <div className="navbar_bottom d-none justify-content-evenly position-fixed bottom-0 w-100 py-3">
            {
                props.routes.map((item, index) => {
                    const path = Object.keys(item)[0];
                    const nav = item[path];
                    return ( <Link href="#" key={ index } to={ path }><img src={ nav[0] } width="25px" /></Link> );
                })
            }
        </div>
    );

}