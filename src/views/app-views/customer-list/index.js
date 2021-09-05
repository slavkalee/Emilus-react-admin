import React, { useState } from 'react';
import { Card, Table, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import CustomerView from './CustomerView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { useDispatch, useSelector } from 'react-redux';
import { removeCustomer } from 'redux/actions/Customer';
import Loading from 'components/shared-components/Loading';
import { getCustomers, getLoading } from 'redux/selectors/Customer';

const UserList = () => {
  const dispatch = useDispatch();
  const customers = useSelector(getCustomers());
  const loading = useSelector(getLoading());

  const [customerProfileVisible, setCustomerProfileVisible] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const deleteCustomer = id => {
    dispatch(removeCustomer(id));
    message.success({ content: `Deleted user ${id}`, duration: 2 });
  };

  const showProfile = profile => {
    setCustomerProfileVisible(true);
    setSelectedCustomer(profile);
  };

  const closeProfile = () => {
    setCustomerProfileVisible(false);
    setSelectedCustomer(null);
  };

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={record.img}
            name={record.name}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Username',
      dataIndex: 'username',
      sorter: {
        compare: (a, b) => a.username.length - b.username.length,
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      sorter: {
        compare: (a, b) => a.phone.length - b.phone.length,
      },
    },

    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => {
                showProfile(elm);
              }}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteCustomer(elm.id);
              }}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Card bodyStyle={{ padding: '0px' }}>
      {loading ? (
        <div style={{ height: '100%', margin: '50px 0' }}>
          <Loading />
        </div>
      ) : (
        <Table columns={tableColumns} dataSource={customers} rowKey="id" />
      )}
      <CustomerView
        data={selectedCustomer}
        visible={customerProfileVisible}
        close={() => {
          closeProfile();
        }}
      />
    </Card>
  );
};

export default UserList;
