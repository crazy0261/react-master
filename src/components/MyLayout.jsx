import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    ReadOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Dropdown, message, Breadcrumb } from 'antd';
import { Children, useState, useEffect } from 'react';
import logoImger from '../assets/logo.png'
import { useNavigate, useLocation } from 'react-router-dom'

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

// sided 数据
const itesMemuData = [
    {
        key: '/admin/student_menu',
        icon: <UserOutlined />,
        label: '学生列表',
        children: [{
            label: "学生分类",
            key: '/admin/student_menu/student_type'
        }, {
            label: "学生列表",
            key: '/admin/student_menu/student_list'
        }]
    },
    {
        key: '/admin/class_menu',
        icon: <ReadOutlined />,
        label: '班级管理',
        children: [{
            label: "班级分类",
            key: '/admin/class_menu/class_type'
        }, {
            label: "班级列表",
            key: '/admin/class_menu/class_list'
        }]
    },
    {
        key: '/admin/course_menu',
        icon: <UploadOutlined />,
        label: '课程管理',
    }
]

// 生成面包屑导航
const createNaFn = (key) => {
    let arrObj = []

    const demoFn = (arr) => {
        arr.forEach(n => {

            // 在函数调用/数组构造时，将数组表达式或者string在语法层面展开
            // ...扩展运算符，对多层嵌套数组、对象、无能为力  info 每次拿到都是 当前级别

            // n中有children子节点，为嵌套，把值给到变量children
            // n中没有children时，children为undefind
            // 无论n中有没有children子节点
            // n中的键值对节点，都以自己自带的键值名，赋值给info
            const { children, ...info } = n
            arrObj.push(info)

            // 如果有子节点
            if (children) {
                demoFn(children)
            }
        })
    }

    demoFn(itesMemuData)

    // 过滤数据
    // key.includes(m.key) key中是否包含m.key，返回布尔值
    const temp = arrObj.filter(m => key.includes(m.key))

    if (temp.length > 0) {
        return [{ label: '首页', key: 'student_menu/student_type' }, ...temp]
    } else {
        return []
    }
}

// 查找对应的地址
const searchUrlKey = (key) => {
    let arrObj = []

    const demoFn = (_arr) => {
        _arr.forEach(n => {

            if (key.includes(n.key)) {
                arrObj.push(n.key)

                // 判断当前的节点，是否有子节点
                if (n.children) {
                    demoFn(n.children)
                }
            }
        });
    }

    demoFn(itesMemuData)

    return arrObj;
}


const MyLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // 下拉菜单点击事件
    const onClick = ({ key }) => {
        if (key === 'logOut') {
            navigate('/')
        } else {
            message.info('还没注册')
        }
    }

    let { pathname } = useLocation()
    let demoItemArr = searchUrlKey(pathname)

    // 面包屑导航条
    const [navurl, setNavurl] = useState([])

    // 面包屑导航的回调、监听
    // 浏览器渲染之后，异步开始执行 useEffect 函数
    useEffect(() => {
        setNavurl(createNaFn(pathname))
    }, [pathname])

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
                    defaultOpenKeys={demoItemArr}
                    defaultSelectedKeys={demoItemArr}
                    onClick={({ key }) => {
                        navigate(key)
                    }}
                    items={itesMemuData}
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
                            items, onClick
                        }}
                    >
                        <img src={logoImger} style={{
                            width: '30px',
                            borderRadius: '100%',
                            float: 'right',
                            margin: '20px 20px 0 0 '
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
                    {/* 面包屑导航 */}
                    <Breadcrumb>
                        {
                            navurl.map(n => {
                                return <Breadcrumb.Item key={n.key}>{n.label}</Breadcrumb.Item>
                            })
                        }
                    </Breadcrumb>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default MyLayout;