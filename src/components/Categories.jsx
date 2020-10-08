import React from 'react';

const Categories = (props) => {
    return (
        props.categories.map((cate, index)=>{
            return <option key={index}>{cate}</option>
        })
    )
}

export default Categories