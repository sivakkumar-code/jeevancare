import "./index.css"

const Activities = ()=>{
    return(
        <section className="tab-section">
            <div className="activities-container">
                <div className="activities-container-section">
                    <h2 className="heading-activities">Walking</h2>
                    <ul className="details-list">
                        <li className="para-activities">Morning Walking --- 30:00 min</li>
                        <li className="para-activities">Evening Walking --- 30:00 min</li>
                    </ul>
                </div>
                <div className="activities-container-section">
                    <h2 className="heading-activities">Yoga</h2>
                    <div className="grid-container">
                        <div className="grid-item">
                            <h2 className="yoga-heading">Tadasana (Mountain Pose)</h2>
                            <iframe width="360" height="230"
                                src="https://www.youtube.com/embed/5NxDs-ovJU8" title="YouTube video
                                player" allow="accelerometer; autoplay;
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                                web-share" allowFullScreen></iframe>
                        </div>
                        <div className="grid-item">
                            <h2 className="yoga-heading">Vrikshasana (Tree Pose)</h2>
                            <iframe width="360" height="230"
                                src="https://www.youtube.com/embed/uELr6MPi7pI" title="YouTube video
                                player" allow="accelerometer; autoplay;
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                                web-share" allowFullScreen></iframe>
                        </div>
                        <div className="grid-item">
                            <h2 className="yoga-heading">Marjariasana-Bitilasana (Cat-Cow Pose)</h2>
                            <iframe width="360" height="230"
                                src="https://www.youtube.com/embed/Tvz9vv_7_-E" title="YouTube video
                                player" allow="accelerometer; autoplay;
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                                web-share" allowFullScreen></iframe>
                        </div>
                        <div className="grid-item">
                            <h2 className="yoga-heading">Setu Bandhasana (Bridge Pose)</h2>
                            <iframe width="360" height="230"
                                src="https://www.youtube.com/embed/Nm5qwS_Ps_Q" title="YouTube video
                                player" allow="accelerometer; autoplay;
                                clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                                web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities