import './Contador.css';

export default function Contador({contadorClicks}) {

    return (
        <div className="contador">
            {contadorClicks}
        </div>
    )
}