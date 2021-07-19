import React from 'react';

export default function TextArea(props) {
    return (
        <textarea cols={props.cols} rows={props.rows}>{ props.text ? props.text : "" }</textarea>
    );  
}