import React from "react";
import { useStaticQuery, graphql } from "gatsby"

const PRODUCTS_SHOW_COUNT = 3;
const PRODUCTS_SHOW_COUNT_XL = 4;

const classnames = require('classnames');

const ItemLink = ({children, url}) => (
    <a href={url} rel="noopener noreferrer" target="_blank">{children}</a>
);

export default () => {
    const {allProducts} = useStaticQuery(graphql`
    query {
        allProducts {
            edges {
              node {
                id
                Items {
                  itemName
                  mediumImageUrls
                  itemUrl
                  itemCode
                }
              }
            }
        }
    }
    `);

    const items = allProducts.edges[0].node.Items
        .slice(0, Math.max(PRODUCTS_SHOW_COUNT, PRODUCTS_SHOW_COUNT_XL))
        .map(({itemName, mediumImageUrls, itemUrl, itemCode}, index) => {
        const image = mediumImageUrls[0];
        const setClass = [
            "grid-cols-2",
            "my-2",
            "md:my-0",
            "md:grid-cols-1",
        ];
        if (index < PRODUCTS_SHOW_COUNT) {
            setClass.unshift("grid");
        } else {
            setClass.unshift("hidden");
            setClass.unshift("xl:grid");
        }
        return (
            <div className={classnames(setClass)} key={itemCode}>
                <div className="md:mx-auto">
                    <ItemLink url={itemUrl}><img src={image} className="w-32" alt="" /></ItemLink>
                </div>
                <div className="md:text-center">
                    <ItemLink url={itemUrl}>{itemName}</ItemLink>
                </div>
            </div>
        );
    });


    return (
        <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {items}
        </div>
    );
};