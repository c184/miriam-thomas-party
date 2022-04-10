import { Item, Image } from 'semantic-ui-react';
import greenWaveTop from '../images/top_wave.png';
import greenWaveBottom from '../images/bottom_wave.png';
import church from '../images/church.png';
import cupcakes from '../images/cupcakes.png';

function Luoghi() {
    return(
      <div className='paddingOnTop' style={{width: '100%'}}>
        <Image src={greenWaveTop} fluid></Image>
        <div className='div-ondulato' style={{backgroundColor: "#B0D5C0"}}>
        <div className='paddingLati'>
          <div className='titolo-sezione-white'>
            Saremo felici di celebrare assieme a voi il nostro matrimonio
          </div>
        </div>

        <Item.Group divided>
            <Item style={{ textAlign: 'center' }} className='paddingLati paddingOnTop'>
                <Image circular style={{height: '80px', backgroundColor: 'white'}} src={church} />

                <Item.Content>
                <div className='titolo-testo-white'>Cerimonia | 10:30</div>
                <div className='descrizione-white'>
                  Chiesa del Sacro Cuore di Gesù <br />
                </div>
                <div className='link-posizione'>
                  <a target='_blank' href='https://goo.gl/maps/i1pFz2wHoCCbAAsR7'>Via G. Da Cavino, 23, 35010 Cavino PD</a>
                </div>
                </Item.Content>
            </Item>

            <Item style={{ textAlign: 'center' }} className='paddingLati paddingOnTop'>
                <Image circular style={{height: '80px', backgroundColor: 'white'}} src={cupcakes} />

                <Item.Content>
                <div className='titolo-testo-white'>Taglio della torta | 19:00</div>
                <div className='descrizione-white'>
                  Ristorante "Le Macine" <br />
                </div>
                <div className='link-posizione'>
                  <a target='_blank' href='https://goo.gl/maps/saMxSSN3sP43NHBS8'>Via Abaco, 22, 35010 Gazzo PD</a>
                </div>
                </Item.Content>
            </Item>
        </Item.Group>
        </div>
        <Image src={greenWaveBottom} style={{backgroundColor: "#B0D5C0"}} fluid></Image>
      </div>
    )
}

export default Luoghi;