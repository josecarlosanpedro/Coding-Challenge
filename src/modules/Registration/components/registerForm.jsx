import React, { useState } from 'react'
import withRouter from 'react-router-dom/withRouter';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button'
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';


const RegisterForm = props => {
  const { history, form, services } = props
  const [confirmDirty, setConfirmDirty] = useState(false);

  const { getFieldDecorator } = form;
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        services.submitRegistrationEpic(values)
      }
    });
  };
  const compareToFirstPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };


  return (
    <section className="register-form-section">
      <Row>
        <Col sm={6} md={6} xl={8} />
        <Col sm={12} md={10} xl={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: validateToNextPassword,
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: compareToFirstPassword,
                  },
                ],
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  First Name&nbsp;
            </span>
              }
            >
              {getFieldDecorator('firstname', {
                rules: [{ required: true, message: 'Please input your firstname!', whitespace: true }],
              })(<Input />)}
            </Form.Item>
            <Form.Item
              label={
                <span>
                  Last Name&nbsp;
            </span>
              }
            >
              {getFieldDecorator('lastname', {
                rules: [{ required: true, message: 'Please input your lastname!', whitespace: true }],
              })(<Input />)}
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Register
          </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col sm={6} md={6} xl={8} />
      </Row>
    </section >
  )
}

export default Form.create()(withRouter(RegisterForm))
