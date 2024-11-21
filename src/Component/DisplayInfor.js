
import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowLishUser: true
    }

    HandleshowHide = () => {
        this.setState({
            isShowLishUser: !this.state.isShowLishUser
        })
    }
    render() {
        //destructuring array/opject
        const { listUser } = this.props
        //props = properties 
        // console.log(listUser)
        return (
            <div>
                <div>
                    <span onClick={() => { this.HandleshowHide() }}>

                        {this.state.isShowLishUser === true ? "Show list user:" : "Hide list user "}
                    </span>
                </div>
                {this.state.isShowLishUser &&
                    <div>
                        {listUser.map((user, index) => {
                            console.log("check map users", user)


                            return (
                                <div key={user.id} className={+user.age > 10 ? "green" : "red"}>
                                    <div>my name is {user.name}</div>
                                    <div>Im {user.age}</div>

                                </div>

                            )


                        })}

                    </div>
                }
            </div>
        )
    }

}

export default DisplayInfor