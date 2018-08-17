import React from 'react';
class Hello extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div className={test}>Hello  {this.props.name} age is {this.props.age}</div>
        )
    }
}
const test ={
fontSize:100
}
export default Hello;