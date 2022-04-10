import { Image } from 'semantic-ui-react';
import fotoFinale from '../images/fotoFinale.png'

function Ringraziamenti() {
    return(
        <div className='paddingOnTop' style={{ paddingBottom: '20px' }}>
            <div className='titolo-sezione' style={{ marginBottom: '20px' }}>Grazie</div>
            <Image size='medium' circular centered src={fotoFinale}></Image>
        </div>
    )
}

export default Ringraziamenti;