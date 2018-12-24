import {
    Modal, Form, Input
  } from 'antd';
const CollectionCreateForm = Form.create()(
    // eslint-disable-next-line     
    class extends React.Component {
      
      render() {
        const {
          visible, onCancel, onCreate, form,id
        } = this.props;
        const { getFieldDecorator } = form;
        console.log(id)
        return (
          <Modal
            visible={visible}
            title="修改信息"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="门店名称">
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入门店名称' }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="住址">
                {getFieldDecorator('address', {
                  rules: [{ required: true, message: '请输入住址' }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="城市">
                {getFieldDecorator('city', {
                  rules: [{ required: true, message: '请输入城市' }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="收入">
                {getFieldDecorator('income')(<Input />)}
              </Form.Item>
              <Form.Item label="门店状态">
                {getFieldDecorator('status')(<Input />)}
              </Form.Item>
              <Form.Item label="门店物品数量">
                {getFieldDecorator('count')(<Input />)}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
    }
  );
  export default CollectionCreateForm