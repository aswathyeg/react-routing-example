
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Layout } from 'antd';
import SiderBar from './SiderBar';
const { Sider } = Layout;
export default class firstTeam extends React.Component {
  state = {
    collapsed: false,

  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {

    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <SiderBar />
        </Sider>
        <>

          <div id="container" style={{ padding: "44px" }}>

            <h1>First Group</h1>

          </div>
        </>

      </Layout>
    );
  }
}

