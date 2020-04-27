import React from "react"

const classNames = require('classnames');

export default ({className, style}) => {
    const setClass = classNames(
        'md:flex',
        'md:flex-row',
        className
    );
    return (
      <div className={setClass} style={style}>
        <div className="md:flex-grow"><a href="https://kuropen.org/" target="_blank" rel="noopener noreferrer">Copyright (C) Kuropen</a>.</div>
        <div className="md:text-right md:justify-end">
          <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a>
          <div className="sr-only">
          この 作品 は <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">クリエイティブ・コモンズ 表示 - 非営利 4.0 国際 ライセンス</a>の下に提供されています。
          </div>
        </div>
      </div>
    );
};
