import React from 'react';
class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={isEditing:false}
        this.renderForm = this.renderForm.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }
    toggleState(){
        const { isEditing } = this.state;
        this.setState({
            isEditing:!isEditing
        })
    }
    updateItem(evt){
        evt.preventDefault();
        //this.input.value
        this.props.editTask(this.props.index,this.input.value);
        this.toggleState();
    }
    renderForm(){
        return(
                <form onSubmit={this.updateItem}>
                    <input type="text" ref={ (value) => { this.input = value;}} defaultValue={this.props.details.name}/>
                    <button type="submit">Update Item</button>
                </form>
        )
    }

    renderItem(){
        return(
            <li   onClick={()=>{this.props.clickHandler(this.props.index)}} 
                  className={this.props.details.completed?'completed':''}>
                  {this.props.details.name}
            <button  
                onClick={ (evt)=>{
                evt.stopPropagation();
                this.props.deleteTask(this.props.index)}}>Delete Item</button>
            <button  
                onClick={ (evt)=>{
                evt.stopPropagation();
                this.toggleState()}}>Edit Item</button>                
            </li>
        )
    }
    render(){
       // const isEditing  = this.state.isEditing; //both are identical
        const { isEditing } = this.state;
        return(
           <section> 
              { isEditing ?  this.renderForm() : this.renderItem()}  
          </section>          
        )
    }
}
export default TodoListItem;