import earth from '../../assets/img/earth.png';
function Main() {
  return (
      <main className='main'>
        <section className='discover'>
          <div className='discover__container container'>
            <div className='discover__content'>
              <article className="discover__block-text block-text">
                <h1 className="block-text__title block-text__title--pink">Discover the vast expanses of <span>space</span></h1>
                <p className="block-text__subtitle block-text__subtitle--yellow">Where the possibilities are <span>endless!</span></p>
                <a href='/' className='block-text__button button button--yellow'>Learn more</a>
              </article>
            </div>
            <div className="discover__image">
              <img src={earth} alt="Earth and rocket" />
            </div>
          </div>
        </section>
      </main>

  );
}

export default Main;
