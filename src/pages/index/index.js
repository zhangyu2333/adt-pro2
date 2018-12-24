import React from 'react';
import { connect } from 'dva';
import { Table, Divider, Tag, Modal, notification, Button, Form, Input } from 'antd';
import CollectionCreateForm from './CollectionCreateForm';
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};





@connect(({book}) => {
  return book
},dispatch=>{
  return {
    getbookData:()=>{
      dispatch({
        type:'book/getBookData'
      })
    },
    updeteItem(opt){
      dispatch({
        type:'book/getBookData',
        payload:opt
      })
    }
  }
})
class ShopList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list:[],
      columns: [{
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '门店名称',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: '城市',
        dataIndex: 'city',
        key: 'city',
      },{
        title: '门店图片',
        key: 'img',
        dataIndex: 'img',
        render: url => (
          <img src={url} alt="" style={{width:"100px"}}/>
        ),
      }, {
        title: '收入',
        dataIndex: 'income',
        key: 'income',
      }, {
        title: '门店状态',
        dataIndex: 'status',
        key: 'status',
        render: status => (
          status?<span>正常营业</span>:<span>门店关闭</span>
        ),
      }, {
        title: '门店物品数量',
        dataIndex: 'count',
        key: 'count',
      }, {
        title: '操作',
        key: 'action',
        render: (text,record) => (
          <span>
            <Button type="primary" onClick={() =>this.showModal(record.id)}>编辑</Button>
            <Button type="danger">删除</Button>
          </span>
        ),
      }],
      visible: false,
      id:0,
    }
  }
  componentDidMount(){
    this.props.getbookData()
    console.log(this.props)
    this.setState({
      list:this.props.bookList
    })
  }
  
  // showModal = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // }

  // hideModal = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // }

  showModal = (id) => {
    // console.log(id)
    this.setState({ visible: true,id });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      this.props.updeteItem(values)
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    console.log(formRef)
    this.formRef = formRef;
  }
  render(){
    let {
      list,
      columns
    } = this.state;
    // console.log(list.length)
    return <React.Fragment>
      {
        list.length > 0 && <Table columns={columns} dataSource={list} pagination={{pageSize: 3}}></Table>
      }
      {/* <Modal
        title="Modal"
        visible={this.state.visible}
        onOk={this.hideModal}
        onCancel={this.hideModal}
        okText="确认"
        cancelText="取消"
      > */}
      <CollectionCreateForm
        wrappedComponentRef={this.saveFormRef}
        visible={this.state.visible}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
        id={this.state.id}
      ></CollectionCreateForm>
      {/* </Modal> */}
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </React.Fragment>
  }
}


export default ShopList;