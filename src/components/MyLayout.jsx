import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    ReadOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Dropdown,message } from 'antd';
import { Children, useState } from 'react';
import logoImger from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const { Header, Sider, Content } = Layout;

// 下拉菜单
const items = [
    {
        key: 'userCenter',
        label: (<a >个人中心</a>)
    },
    {
        key: 'logOut',
        label: (<a >退出登录</a>)
    },
];

const MyLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // 下拉菜单点击事件
    const onClick = ({key}) => {
        console.log(key)
        if(key === 'logOut'){
            navigate('/')
        }else{
            message.info('还没注册')
        }
    }

    // 路由跳转
    const navigate = useNavigate()

    return (
        <Layout style={{ width: '100vw', height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div />
                <img className="logoImger" src={logoImger} />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={({ key }) => {
                        // console.log(key)
                        navigate(key)
                    }}
                    items={[
                        {
                            key: '/admin/student_menu',
                            icon: <UserOutlined />,
                            label: '学生列表',
                            children: [{
                                label: "学生分类",
                                key: '/admin/student_type'
                            }, {
                                label: "学生列表",
                                key: '/admin/student_list'
                            }]
                        },
                        {
                            key: '/admin/class_menu',
                            icon: <ReadOutlined />,
                            label: '班级管理',
                            children: [{
                                label: "班级分类",
                                key: '/admin/class_type'
                            }, {
                                label: "班级列表",
                                key: '/admin/class_list'
                            }]
                        },
                        {
                            key: '/admin/course_menu',
                            icon: <UploadOutlined />,
                            label: '课程管理',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <span className='titleDiv'>测试成长管理系统-react</span>
                    <Dropdown
                        menu={{
                            items,onClick
                        }}
                    >
                        <img src={logoImger} style={{
                            width: '30px',
                            borderRadius: '100%',
                            float:'right',
                            margin:'20px 20px 0 0 '
                        }} />
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default MyLayout;