import React from 'react';
import { connect } from 'dva';
import { setItem } from '@/services/api'
import {
        Form, Input, Button,
    } from 'antd';
const openNotificationWithIcon = (type) => {
    notification[type]({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};
class RegistrationForm extends React.Component {
    add(){
        let { getFieldsValue } = this.props.form
        let opt = getFieldsValue();
        opt.img = "http://www.sucaitianxia.com/sheji/pic/200707/20070723160945961.jpg"
        setItem(opt).then(res=>{
            console.log(res)
            if( res ){
                openNotificationWithIcon('success')
            }
        })
    }
      render() {
          console.log(this.props)
        const { getFieldDecorator } = this.props.form;
    
        return (
          <Form>
            <Form.Item
              label="店铺名称"
            >
              {getFieldDecorator('name', {
                rules: [{
                  required: true, message: 'Please input your shopID',
                }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item
              label="住址"
            >
              {getFieldDecorator('address', {
                rules: [{
                  required: true, message: 'Please input your address',
                }],
              })(
                <Input type="text" />
              )}
            </Form.Item>
            <Form.Item
              label="城市"
            >
              {getFieldDecorator('city', {
                rules: [{
                  required: true, message: 'Please confirm your city',
                }],
              })(
                <Input type="text" />
              )}
            </Form.Item>
            <Form.Item
              label= "状态"
            >
              {getFieldDecorator('info', {
                rules: [{ required: true, message: 'Please input your status'}],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={()=>this.add()}>创建</Button>
            </Form.Item>
          </Form>
        );
      }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

// ReactDOM.render(<WrappedRegistrationForm />, mountNode);
export default WrappedRegistrationForm;