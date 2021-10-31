
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout, Menu } from 'antd';

import {

  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Redirect } from 'react-router-dom'

const { Sider } = Layout;
const { SubMenu } = Menu;
export default class SiderBar extends React.Component {
  constructor(props) {
    super(props);

    this.clickTeamSummary = this.clickTeamSummary.bind(this);
    this.clickFirstTeam = this.clickFirstTeam.bind(this);
    this.clickSecondTeam = this.clickSecondTeam.bind(this);
  }

  state = {
    collapsed: false,
    teamSummaryRedirect: false,
    firstTeamRedirect: false,
    secondTeamRedirect: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  clickTeamSummary() {
    this.setState({ teamSummaryRedirect: true });
  }
  clickFirstTeam() {
    this.setState({ firstTeamRedirect: true });

  }
  clickSecondTeam() {
    this.setState({ secondTeamRedirect: true });

  }
  render() {

    const { collapsed } = this.state;
    if (this.state.teamSummaryRedirect) {

      return <Redirect push to='/teamSummary' />;


    }
    else if (this.state.firstTeamRedirect) {

      return <Redirect push to='/firstTeam' />;


    }
    else if (this.state.secondTeamRedirect) {

      return <Redirect push to='/secondTeam' />;


    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsed={collapsed} onCollapse={this.onCollapse}>
          {/* <div className="logo" /> */}
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={this.clickTeamSummary} icon={<PieChartOutlined />}>
              Team Summary
                </Menu.Item>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team Details">
              <Menu.Item key="2" onClick={this.clickFirstTeam}>Team 1</Menu.Item>
              <Menu.Item key="3" onClick={this.clickSecondTeam}>Team 2</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
      </Layout>
    )
  }
}