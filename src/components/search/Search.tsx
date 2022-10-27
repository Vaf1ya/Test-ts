
import 'react-dadata/dist/react-dadata.css';
import './search.css';
import SearchIcon from '../../assets/search-button-icon.svg';

const Search = () => {
    return (
        <section className="section">
            <div className="section__container">
                <h1 className="section__title">Поиск адресов</h1>
                <span className="section__sub-title">Введите интересующий вас адрес</span>
                <div className="container__content">
                    <div className="content__search flex">

                        <input type="text" className="search__input" placeholder="Введите интересующий вас адрес" />
                        <a href="#adsfsdf" className="button">
                            <img src={SearchIcon} alt="" className="search__icon" />
                            Поиск
                        </a>
                    </div>
                    <div className="content__address">
                        <h1 className="address_title">Адреса</h1>
                        <div className="address__text">
                            <a href="#dfsfs">город Москва, улица Ленина 13, дом 32</a>
                        </div>
                        <div className="address__text">
                            <a href="#dfsfs">город Москва, улица Ленина 13, дом 32</a>
                        </div>
                        <div className="address__text">
                            <a href="#dfsfs">город Москва, улица Ленина 13, дом 32</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Search;
