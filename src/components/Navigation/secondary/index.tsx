import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

import { Link } from 'react-router-dom'
import React from 'react'
import { SecondaryRoutes } from 'app/routes'
import styles from 'components/navigation/style.module.less'

const { Sider } = Layout

export const RootMenu = (props) => (
	<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className={styles.secondary}>
		<Menu.Item key="1" className={styles.hovered}>
			<Link to={`${props.location.pathname}/feeds`}>
				<UserOutlined />
				<span>Root Menu 1</span>
			</Link>
		</Menu.Item>
		<Menu.Item key="2" className={styles.hovered}>
			<VideoCameraOutlined />
			<span>Root Menu 2</span>
		</Menu.Item>
		<Menu.Item key="3" className={styles.hovered}>
			<UploadOutlined />
			<span>Root Menu 3</span>
		</Menu.Item>
	</Menu>
)

export const ProfileMenu = (props) => (
	<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className={styles.secondary}>
		<Menu.Item key="1" className={styles.hovered}>
			<UserOutlined />
			<Link to={`${props.location.pathname}/feed`}>profile</Link>
		</Menu.Item>
	</Menu>
)

export const CompanyMenu = (props) => (
	<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className={styles.secondary}>
		<Menu.Item key="1" className={styles.hovered}>
			<UserOutlined />
			<Link to={`${props.location.pathname}/feeds`}>companies</Link>
		</Menu.Item>
	</Menu>
)

const Secondary: React.FC = () => (
	<Sider trigger={null} width="100%" className={styles.navigation}>
		<SecondaryRoutes />
	</Sider>
)

export default Secondary
