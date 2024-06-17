
function Cards() {
    return (
        <section className='offers'>
        <div className='offers__container container'>
          <h3 className='offers__title title-3'>Offers</h3>
          <div className='offers__content'>
            <article className="offers__block-text block-text block-text--big block-text--1">
              <h2 className="block-text__title block-text__title--big">Move the borders of reality!</h2>
              <p className="block-text__subtitle block-text__subtitle--big">Go on a space adventure <span> - it's possible with us!</span></p>
              <a href='./' className='block-text__button button button--outline'>Learn more</a>
            </article>
            <article className="offers__block-text block-text block-text--2">
              <h2 className="block-text__title block-text__title--space">Space is not just stars and planets</h2>
              <p className="block-text__subtitle"> <span className='block-text__subtitle--space'>Go on a space adventure</span><span className='block-text__subtitle--majestic'> it is a majestic journey to</span> </p>
              <a href='./' className='block-text__button button button--outline'>Learn more</a>
            </article>
            <article className="offers__block-text block-text block-text--3">
              <h2 className="block-text__title block-text__title--dream">For those who dream of stars </h2>
              <p className="block-text__subtitle">Our offer: make your dream come true</p>
              <a href='./' className='block-text__button button button--outline'>Learn more</a>
            </article>
            <article className="offers__block-text block-text block-text--big block-text--4">
              <h2 className="block-text__title block-text__title--big">Fulfill your fantastic dreams!</h2>
              <p className="block-text__subtitle block-text__subtitle--big">Space has never been so close!</p>
              <a href='./' className='block-text__button button button--outline'>Learn more</a>
            </article>
          </div>
        </div>
      </section>
    );
}

export default Cards;
