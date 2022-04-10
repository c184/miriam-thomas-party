import {Container} from 'semantic-ui-react';

function Banner() {
    return(
        <div className="hero-image">
            <Container className="hero-text">
                <div className='banner-corsivo' style={{ paddingBottom: '15px' }}>Miriam</div>
                <div className='banner-corsivo'>&amp; Thomas</div>
            </Container>
        </div>
    )

}

export default Banner;