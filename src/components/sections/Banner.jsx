import earth from "../../assets/img/earth.png";

function Banner() {
    return (
        <section className='discover'>
        <div className='discover__container container'>
          <div className='discover__content'>
            <article className="discover__banner-text banner-text">
              <h1 className="banner-text__title banner-text__title--pink">Discover the vast expanses of <span>space</span></h1>
              <p className="banner-text__subtitle banner-text__subtitle--yellow">Where the possibilities are <span>endless!</span></p>
              <a href='./' className='banner-text__button button button--yellow'>Learn more</a>
            </article>
          </div>
          <div className="discover__image">
            <img src={earth} alt="Earth and rocket" />
          </div>
        </div>
      </section>
    );
}

export default Banner;
