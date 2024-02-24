import Title from "./Title"
import { service } from "../data.js"

function Services() {
    return (
        <>
            <section className="section services" id="services">
                {/* <div className="section-title">
                    <h2>our <span>services</span></h2>
                </div> */}
                <Title title="our" subTitle="services" />
                <div className="section-center services-center">
                    {
                        service.map((serve) => {
                            const {icon, title, text} = serve;
                            return (
                                <article className="service">
                                    <span className="service-icon"><i className={icon}></i></span>
                                    <div className="service-info">
                                        <h4 className="service-title">{title}</h4>
                                        <p className="service-text">
                                            {text}
                                        </p>
                                    </div>
                                </article>
                            )
                        })
                    }
                    {/* <article className="service">
                        <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
                        <div className="service-info">
                            <h4 className="service-title">saving money</h4>
                            <p className="service-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores, officia.
                            </p>
                        </div>
                    </article>

                    <article className="service">
                        <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
                        <div className="service-info">
                            <h4 className="service-title">endless hiking</h4>
                            <p className="service-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores, officia.
                            </p>
                        </div>
                    </article>

                    <article className="service">
                        <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
                        <div className="service-info">
                            <h4 className="service-title">amazing comfort</h4>
                            <p className="service-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores, officia.
                            </p>
                        </div>
                    </article> */}
                </div>
            </section>
        </>
    )
}

export default Services