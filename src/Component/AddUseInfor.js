import React from "react";

class AddUseInfor extends React.Component {
    state = {
        Name: 'Nguyen Quang Thien',
        address: 'Hai_Duong',
        age: 18
    };
    HandleOnChangeInput = (event) => {
        this.setState({
            Name: event.target.value
        })
    }
    HandleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    HandleOnSubmit = (event) => {
        event.preventDefault(); // ngăn chặn load lại trang 
        console.log(this.state)
        this.props.handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + 'random',
            name: this.state.Name,
            age: this.state.age
        })
    }
    render() {

        return (
            <div>
                My name is {this.state.Name} and Im {this.state.age}
                <form onSubmit={(event) => this.HandleOnSubmit(event)}>
                    <label>Your Name</label>
                    <input
                        value={this.state.Name}
                        type="text"
                        onChange={(event) => { this.HandleOnChangeInput(event) }}
                    />

                    <label>Your Age</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => { this.HandleOnChangeAge(event) }}
                    />
                    <button>submit</button>

                </form>
            </div>
        )
    }
}

export default AddUseInfor;