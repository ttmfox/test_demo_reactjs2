import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useId } from "react";
import AddUseInfor from "./AddUseInfor";
import DisplayInfor from "./DisplayInfor";

class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "thien3424234", age: "30" },
            { id: 2, name: "thien2", age: "10" },
            { id: 3, name: "thien3", age: "20" }
        ]
    }

    handleAddnewUser = (userOject) => {
        console.log(userOject)
        this.setState({
            listUser: [userOject, ...this.state.listUser] //them vao dau mang
            // listUser: [...this.state.listUser, userOject] them vao cuoi mang 
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUser;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        this.setState({
            listUser: listUsersClone
        })
    }

    render() {
        const myAge = 50;
        const myinfor = ["a", "b", "c"]

        return (
            <>
                <div className="a">
                    <AddUseInfor
                        handleAddnewUser={this.handleAddnewUser}
                    />
                    <br></br>
                    {/* <DisplayInfor name="IT" age={myAge} /> */}
                    <DisplayInfor
                        listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}

                    />
                </div>
                <div className="b">

                </div>
            </>
        );
    }
}
export default Mycomponent;