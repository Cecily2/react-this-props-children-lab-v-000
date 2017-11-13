// Code ThemedDecoration Component Here
import React from 'react'

export default class ThemedDecorations extends React.Component {
    render(){

        const childrenWithClass = React.Children.map(this.props.children, child => {
            console.log(child)
            return React.cloneElement(child, {
                className: this.props.theme
            })
        })

        return (
            <div>
                {childrenWithClass}
            </div>
        )
    }
}