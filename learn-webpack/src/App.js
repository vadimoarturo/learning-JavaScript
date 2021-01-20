import React from 'react'
import $ from 'jquery'
export default class App extends React.Component {
    componentDidMount(){

$('<h1 />')
.text('Hello world from JQUERY')
.css({
    textAlign: 'center',
    color: 'red'
})
.appendTo($('header'))
    }
    
    
    render(){
        return (
            <React.Fragment>
            <header></header>
            <hr/>
            <div className="box">
            <h2 className="box-title">Box Title</h2>
            <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deserunt tempore ad voluptatibus provident impedit voluptas itaque libero vero aliquid?</p>
            </div>
            </React.Fragment>

        )
    }


}