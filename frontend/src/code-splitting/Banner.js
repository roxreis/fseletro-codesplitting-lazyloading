import '../css/style.css';
import BannerImg from '../img/banner.jpg';



export default function Banner() {
    return (
        <>
            <img src={BannerImg} alt="banner"  />
            <div>
                <h1>BEM VINDOS A NOSSA LOJA!</h1>
                <p>Aqui é barato mesmo!</p>
            </div>
        </>
    );
}