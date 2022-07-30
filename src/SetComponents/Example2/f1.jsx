import {Component} from "react";
class MyContainer extends Component {

    constructor(props)
    {
        super(props);
    }
    testVarible= "this is a test";

    onMove = () => {
        console.log(this.testVarible);
    }
    submitData = () =>
    {
        document.write("helllo");
    }
    render()
    {
        return(
            <div>hello
                <label>
                    <input type="text"/>
                    <button>Click</button>
                </label>
            </div>
        )
    }
}
export default MyContainer;