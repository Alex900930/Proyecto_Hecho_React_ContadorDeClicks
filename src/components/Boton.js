import './Boton.css';
export default function Boton({ texto, manejadorClick, esClick }) {

    return (
        <button
                onClick={manejadorClick}
                className={ esClick ? 'click-normal' : 'click-reset'}>
              {texto}     
        </button>
    )
}