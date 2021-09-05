import React, { Component } from 'react';
import { Avatar, Drawer, Divider, Button } from 'antd';
import {
  MobileOutlined,
  MailOutlined,
  UserOutlined,
  CompassOutlined,
  CalendarOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

export class UserView extends Component {
  state = {
    loadings: [],
  };

  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
      this.props.close();
    }, 1500);
  };

  render() {
    const { data, visible, close } = this.props;
    const { loadings } = this.state;
    return (
      <Drawer
        width={300}
        placement="right"
        onClose={close}
        closable={false}
        visible={visible}
      >
        <div className="text-center mt-3">
          <Avatar size={80} src={data?.img} />
          <h3 className="mt-2 mb-0">{data?.name}</h3>
          <span className="text-muted">{data?.email}</span>
        </div>
        <Divider dashed />
        <div className="">
          <h6 className="text-muted text-uppercase mb-3">Account details</h6>
          <p>
            <UserOutlined />
            <span className="ml-3 text-dark">id: {data?.id}</span>
          </p>
          <p>
            <CalendarOutlined />
            <span className="ml-3 text-dark">Work in {data?.company.name}</span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
          <p>
            <MobileOutlined />
            <span className="ml-3 text-dark">{data?.phone}</span>
          </p>
          <p>
            <MailOutlined />
            <span className="ml-3 text-dark">
              {data?.email ? data?.email : '-'}
            </span>
          </p>
          <p>
            <CompassOutlined />
            <span className="ml-3 text-dark">{`${data?.address.city}, ${data?.address.street}`}</span>
          </p>
        </div>
        <div className="mt-5">
          <h6 className="text-muted text-uppercase mb-3">Website</h6>
          <p>
            <GlobalOutlined />
            <a href="/#" className="ml-3 text-dark">
              {data?.website ? data?.website : '-'}
            </a>
          </p>
        </div>
        <div className="mt-5">
          <Button
            type="primary"
            loading={loadings[0]}
            onClick={() => {
              this.enterLoading(0);
            }}
          >
            Save Changes
          </Button>
        </div>
      </Drawer>
    );
  }
}

export default UserView;
