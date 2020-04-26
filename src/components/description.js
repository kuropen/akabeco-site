import React from "react"

export default ({className}) => {
    return (
        <div className={className}>
            <h2 className="text-xl font-bold">What is akabeko?</h2>
            <p>Akabeko is a traditional toy of Aizu region, the western part of Fukushima prefecture, 
                which resembles legendary red cow used to build Enzoji temple (Fukuman Kokuzo) in Yanaizu town.<br />
                The toy is believed to ward off sickness such as smallpox, as children who have this toy did not catch the illness.<br />
                Nowadays it is the situation of COVID-19 outbreak; the toy is widely noticed as a charm to ward off sickness.
            </p>

            <h2 className="text-xl font-bold">赤べことは</h2>
            <p>福島県西部・会津地方の伝統的な玩具（張り子人形）であり、
                柳津町の圓藏寺（福満虚空蔵尊）の建立の際に材木を運搬したといわれる赤い牛を模しています。<br />
                天然痘などが流行した時代、この人形を持っていた子供たちが病気にかからなかったことから、
                疫病避けのお守りとしても知られています。
            </p>
        </div>
    );
};