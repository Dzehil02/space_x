export default function Description({mainText, secondText}) {
    return (
        <section className="description-journey">
            <div className="description-journey__container container">
                <div className="description-journey__content">
                    <h3 className="description-journey__title">Embark on a space journey</h3>
                    <p className="description-journey__text">{mainText}</p>
                    <details class="description-journey__details">
                        <summary
                            className="description-journey__summary description-journey__button"
                            data-text="Less"
                        ></summary>
                        <p class="description-journey__text description-journey__text--more">{secondText}</p>
                    </details>
                </div>
            </div>
        </section>
    );
}
