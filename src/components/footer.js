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
        <div className="md:flex-grow">
          <div className="md:inline">
            <a href="https://kuropen.org/" className="underline" target="_blank" rel="noopener noreferrer">Copyright (C) Kuropen</a>.
          </div>
          <div className="md:inline">
            <a href="https://penguinone.kuropen.org/about#anchor-privacy" className="underline" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
          </div>
        </div>
        <div className="md:text-right md:justify-end">
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="クリエイティブ・コモンズ・ライセンス" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
        </div>
      </div>
    );
};
