import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import {Layout,Menu,Breadcrumb,Icon} from 'antd';
import MyMenu from '../components/MyMenu';
import RouterView from '../routes/RouterView'
const {Header,Content,Sider}=Layout;
class IndexPage extends React.Component{
  render(){
    return(
      <Layout>
        <Header className="header">
          头部
        </Header>
        {/* 再左右布局 */}
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <MyMenu/>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className={styles.content}>
              <RouterView routes={this.props.routes}/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default connect()(IndexPage);
