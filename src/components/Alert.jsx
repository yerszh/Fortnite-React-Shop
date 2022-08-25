import {useEffect} from 'react'

function Alert(props) {
    const {name = '', closeAlert = Function.prototype} = props;

    useEffect(() => {
        const timerId =setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        }
    }, [name]);

    return <div id="toast-container">
        <div className="toast" style={{backgroundColor:'#78909c'}}>{name} added to basket</div>
    </div>
}

export {Alert}