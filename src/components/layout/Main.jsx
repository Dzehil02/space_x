import earth from '../../assets/img/earth.png';
function Main() {
  return (
      <main className='main'>
        <section className='discover'>
          <div className='discover__container container'>
            <div className='discover__content'>
              <article className="discover__banner-text banner-text">
                <h1 className="banner-text__title banner-text__title--pink">Discover the vast expanses of <span>space</span></h1>
                <p className="banner-text__subtitle banner-text__subtitle--yellow">Where the possibilities are <span>endless!</span></p>
                <a href='/' className='banner-text__button button button--yellow'>Learn more</a>
              </article>
            </div>
            <div className="discover__image">
              <img src={earth} alt="Earth and rocket" />
            </div>
          </div>
        </section>
        <section className='offers'>
          <div className='offers__container container'>
            <h3 className='offers__title title-3'>Offers</h3>
            <div className='offers__content'>
              <article className="offers__block-text block-text block-text--big block-text--1">
                <h2 className="block-text__title block-text__title--big">Move the borders of reality!</h2>
                <p className="block-text__subtitle block-text__subtitle--big">Go on a space adventure <span> - it's possible with us!</span></p>
                <a href='/' className='block-text__button button button--outline'>Learn more</a>
              </article>
              <article className="offers__block-text block-text block-text--2">
                <h2 className="block-text__title block-text__title--space">Space is not just stars and planets</h2>
                <p className="block-text__subtitle"> <span className='block-text__subtitle--space'>Go on a space adventure</span><span className='block-text__subtitle--majestic'> it is a majestic journey to</span> </p>
                <a href='/' className='block-text__button button button--outline'>Learn more</a>
              </article>
              <article className="offers__block-text block-text block-text--3">
                <h2 className="block-text__title block-text__title--dream">For those who dream of stars </h2>
                <p className="block-text__subtitle">Our offer: make your dream come true</p>
                <a href='/' className='block-text__button button button--outline'>Learn more</a>
              </article>
              <article className="offers__block-text block-text block-text--big block-text--4">
                <h2 className="block-text__title block-text__title--big">Fulfill your fantastic dreams!</h2>
                <p className="block-text__subtitle block-text__subtitle--big">Space has never been so close!</p>
                <a href='/' className='block-text__button button button--outline'>Learn more</a>
              </article>
            </div>
          </div>
        </section>
        <section className='description-journey'>
          <div className='description-journey__container container'>
            <div className="description-journey__content">
              <h3 className="description-journey__title title-3">Embark on a space journey</h3>
              <p className="description-journey__text">Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
              <details class="description-journey__details">
                <summary className="description-journey__summary description-journey__button">Read more</summary>
                <p class="description-journey__text description-journey__text--more">
                Our space tours cater to all levels of adventure seekers, from short orbital flights to longer missions that delve deeper into the cosmos. You can experience the breathtaking view of Earth from space, float in zero gravity, and witness the stunning beauty of distant stars and galaxies. Each excursion is meticulously planned to ensure you make the most of your journey, with activities and sights that will leave you in awe. For those who want to immerse themselves further, we offer specialized programs where you can participate in scientific experiments, learning about the intricacies of space travel and the universe. Our state-of-the-art spacecraft are equipped with the latest technology to provide you with a safe, comfortable, and unforgettable experience.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
  );
}

export default Main;
