import { Component } from "react";
export class Todolist extends Component {
    state = {
        userInput: "",
        todolist: []
    }

    onChangeEvent(e) {
        this.setState( { userInput: e } )
    }

    addItem(input) {
        if (input === '') {
            alert ('Please, write anysing ...')
        }

        else {
        let listArray = this.state.todolist;
        listArray.push(input);
        this.setState( { todolist: listArray, userInput: ""  })
        }
    }

    deleteItem() {
        let listArray = this.state.todolist;
        listArray = [ ];
        this.setState ( { todolist: listArray} )
    }

    crossedWord(event) {
         const li = event.target;
         li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div className="container">
                <form onSubmit = {this.onFormSubmit} >
                <div>
                    <input type="text" placeholder="What do you want to do today?" onChange = { (e) => { this.onChangeEvent(e.target.value) } } value = { this.state.userInput } />
                </div>

                <div className="container add btn">
                    <button onClick = { () => this.addItem(this.state.userInput) } > Add </button>
                </div>

                <div className="container">
                    <ul>
                        {this.state.todolist.map( (item, index) => ( <li onClick = {this.crossedWord} key={index}> { item } </li> ) )  }
                    </ul>
                </div>

                <div className="container delete btn">
                    <button onClick = { () => this.deleteItem() } > Delete </button>
                </div>
                </form>




            </div>
        )
    }
}