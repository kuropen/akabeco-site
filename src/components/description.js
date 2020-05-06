import React from "react";
import Products from "./products";
import TweetEmbed from "react-tweet-embed";

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lang: ''};
    }

    componentDidUpdate(prevProps) {
        if (this.props.language !== prevProps.language) {
            this.setState({lang: this.props.language});
        }
    }

    setLang(newLang) {
        this.setState({lang: newLang});
    }

    render() {
        const className = this.props.className;
        const lang = this.state.lang;
        return (
            <div className={className}>
                <section className="md:hidden">
                    Language Select: 
                    <button className="underline" onClick={() => {this.setLang('English')}}>English</button> / 
                    <button className="underline" onClick={() => {this.setLang('Japanese')}}>Japanese</button>
                </section>
                <section id="english" lang="en" className={lang === 'Japanese' ? 'hidden' : ''}>
                    <h2 className="text-xl font-bold">What is akabeko?</h2>
                    <p>Akabeko is a traditional toy of Aizu region, the western part of Fukushima prefecture, 
                        which resembles legendary red cow used to build Enzoji temple (Fukuman Kokuzo) in Yanaizu town.<br />
                        The toy is believed to ward off sickness such as smallpox, as children who had this toy did not catch the illness.<br />
                        Nowadays it is the situation of COVID-19 outbreak; the toy is widely noticed as a charm to ward off sickness.
                    </p>
                </section>
    
                <section id="japanese" lang="ja" className={lang === 'English' ? 'hidden' : ''}>
                    <h2 className="text-xl font-bold">赤べことは</h2>
                    <p>福島県西部・会津地方の伝統的な玩具（張り子人形）であり、
                        柳津町の圓藏寺（福満虚空蔵尊）の建立の際に材木を運搬したといわれる赤い牛を模しています。<br />
                        天然痘などが流行した時代、この人形を持っていた子供たちが病気にかからなかったことから、
                        疫病避けのお守りとしても知られています。
                    </p>
    
                    <h3 className="font-bold">あなたのそばにも赤べこを</h3>
                    <p><strong>※以下の記述はCC-BYライセンスによる利用はできません</strong></p>
                    <p>赤べこの護符: 土津神社（猪苗代町）がTwitterで公開中</p>
                    <div className="m-2">
                        <TweetEmbed id="1252100336728150016" />
                    </div>
    
                    <p>赤べこを買う<br className="md:hidden" />（※楽天市場のサイトに遷移します）</p>
                    <Products />
                </section>
            </div>
        );
    }
};