import { Component } from "react";

class ExpandCollapse extends Component {
    render () {
        return(
            <div>
                <div style={{textAlign: 'center'}}>
                    <h1>Conditional Rendering</h1>
                    <button onClick={this.props.handle}>Đóng giới thiệu</button>
                </div>
                <div>
                    <h4>Giới thiệu</h4>
                    <p>Trong ReactJs, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state, props,... mà bạn muốn hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử dụng Conditional rendering dể render ra component mà bạn mong muốn.</p>
                </div>
            </div>
        );
    }
}
export default ExpandCollapse;