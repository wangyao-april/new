import React from 'react';
import {Table,Divider,Button} from 'antd';
import {Link} from 'dva/router';
import request from '@/utils/request'
import { connect } from 'net';

const columns=[
    {
        title:'序号',
        dataIndex:'id',
        key:'id'
    },
    {
        title:'机构名称',
        dataIndex:'name',
        key:'name',
    },
    {
        title:'所在地区',
        dataIndex:'area',
        key:'area'
    },
    {
        title:'校长姓名',
        dataIndex:'master',
        key:'master'
    },
    {
        title:'校长手机号',
        dataIndex:'phone',
        key:'phone'
    },
    {
        title:'是否可用',
        dataIndex:'enable',
        key:'enable',
        render:text=><span>{text?'是':'否'}</span>
    },
    {
        title:'操作',
        key:'index',
        render:(text,record)=>(
            <span>
                <a>详情</a>
                <Divider type="vertical"/>
                <a>编辑</a>
            </span>
        )
    }
];

const mapStateToProps=state=>{
    return{
        list:state.gov.list
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getGovList:()=>{
            dispatch({
                type:'gov/getGovList'
            })
        }
    }
}

@connect(mapStateToProps,mapDispatchToProps)
class GovList extends React.Component{
    componentDidMount(){
        this.props.getGovList()
    }

    render(){
        let {list}=this.props;
        return <>
            <Link to="/main/addGov">
                <Button type="primary" style={{marginBottom:'20px'}}>新增</Button>
            </Link>
            <Table columns={columns} dataSource={list}/>
        </>
    }
}

export default GovList;