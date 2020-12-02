import React, { Component } from 'react';
import { Menu } from 'antd';
import { CalendarOutlined, UserOutlined, SolutionOutlined } from '@ant-design/icons';

class SideBar extends Component {
  handleClick = e => {
    console.log('click ', e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
          <Menu.Item key="1" icon={<CalendarOutlined />} >Agenda</Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} >Pacientes</Menu.Item>
          <Menu.Item key="3" icon={<SolutionOutlined />} >Tratamientos</Menu.Item>
      </Menu>
    );
  }
}

export default SideBar;
 
