import React from "react";
import FormLogin from "./FormLogin";
import TableStudents from "./TableStudents";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listsTask: [
        { id: 1, name: "Hoàng Thùy Dương", address: "Quảng Bình" },
        { id: 1, name: "Dương Thanh Huyền", address: "Đà Nẵng" },
        { id: 1, name: "Cao Thanh Thúy", address: "Quảng Ninh" },
        { id: 1, name: "Hoàng Thanh Phương", address: "Quảng Nam" },
        { id: 1, name: "Huỳnh Thanh Ngọc", address: "Hồ Chí Minh" },
        { id: 1, name: "Phan Thanh Nga", address: "Nha Trang" }
      ]
    };
  }
  generateId = length => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * charactersLength); //floor để làm tròn
      result += characters.charAt(random); // charAt để trả về kí tự of chuỗi
    }
    return result;
  };
  render() {
    return (
      <>
        <FormLogin addStudent={this.addStudent} />
        <TableStudents />
      </>
    );
  }
}

export default Login;
