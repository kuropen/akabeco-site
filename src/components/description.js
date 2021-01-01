import React from "react";
import Products from "./products";
import TweetEmbed from "react-tweet-embed";
import getBrowserLanguage from "../utilities/getBrowserLanguage";
import GitHubButton from "react-github-btn";

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lang: getBrowserLanguage()};
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
                <section id="english" lang="en" className={lang === 'English' ? '' : 'hidden'}>
                    <h2 className="text-xl font-bold">What is akabeko?</h2>
                    <p>Akabeko is a traditional toy of Aizu region, the western part of Fukushima prefecture, 
                        which resembles legendary red cow used to build Enzoji temple (Fukuman Kokuzo) in Yanaizu town.<br />
                        The toy is believed to ward off sickness such as smallpox, as children who had this toy did not catch the illness.<br />
                        Nowadays it is the situation of COVID-19 outbreak; the toy is widely noticed as a charm to ward off sickness.
                    </p>

                    <h2 className="text-xl font-bold">About this website</h2>
                    <p>
                        This site is to pray to bring the COVID-19 pandemic to an end earlier, with a power of Akabeko as a charm.<br />
                        The images of Akabeko used in this site (excluding quoted ones) are licensed under <a rel="license noopener noreferrer" target="_blank" href="http://creativecommons.org/licenses/by/4.0/" className="underline">CC-BY 4.0 License</a>.
                    </p>
                    <p>
                        The source code of this website is available on GitHub.<br/>
                        Please feel free to make a Pull Request such as addition of Akabeko images.<br/>
                        <GitHubButton href="https://github.com/kuropen/akabeco-site/fork" data-size="large" aria-label="Fork kuropen/akabeco-site on GitHub">Fork</GitHubButton>
                    </p>
                </section>
    
                <section id="japanese" lang="ja" className={lang === 'Japanese' ? '' : 'hidden'}>
                    <h2 className="text-xl font-bold">赤べことは</h2>
                    <p>福島県西部・会津地方の伝統的な玩具（張り子人形）であり、
                        柳津町の圓藏寺（福満虚空蔵尊）の建立の際に材木を運搬したといわれる赤い牛を模しています。<br />
                        天然痘などが流行した時代、この人形を持っていた子供たちが病気にかからなかったことから、
                        疫病避けのお守りとしても知られています。
                    </p>
    
                    <h2 className="text-xl font-bold">このサイトについて</h2>
                    <p>
                        このサイトは、赤べこに刻まれたこのような歴史に着目し、新型コロナウイルス（COVID-19）の感染拡大の早期終息を願い制作されました。<br />
                        このサイト上の赤べこの画像（引用されたツイートや販売商品の画像を除きます）は、
                        <a rel="license noopener noreferrer" target="_blank" href="http://creativecommons.org/licenses/by/4.0/" className="underline">クリエイティブ・コモンズ 表示 4.0 国際 ライセンス</a>の下に提供されています。
                    </p>
                    <p>
                        このサイトのソースコードはGitHubで公開されています。<br/>
                        赤べこの画像追加などのPull Requestは歓迎します。<br/>
                        <GitHubButton href="https://github.com/kuropen/akabeco-site/fork" data-size="large" aria-label="Fork kuropen/akabeco-site on GitHub">Fork</GitHubButton>
                    </p>

                    <h2 className="font-bold">あなたのそばにも赤べこを</h2>
                    <p>赤べこの護符: 土津神社（猪苗代町）がTwitterで公開中</p>
                    <div className="m-2">
                        <TweetEmbed id="1344792963226865664" />
                    </div>
    
                    <p>赤べこを買う<br className="md:hidden" />（※楽天市場のサイトに遷移します）</p>
                    <Products />
                </section>
            </div>
        );
    }
};
