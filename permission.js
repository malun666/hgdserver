const Mock = require('mockjs');
let data = Mock.mock({
  "permission": [],
  role: [{
    id: 5,
    pid: 0,
    name: '超级管理员',
    des: '超级管理员',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  },{
    id: 1,
    pid: 0,
    name: '管理员',
    des: '管理员',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  },{
    id: 2,
    pid: 0,
    name: '后台开发员',
    des: '后台开发员',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  },{
    id: 3,
    pid: 0,
    name: '教师',
    des: '教师',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  },{
    id: 4,
    pid: 0,
    name: '学生',
    des: '学生',
    subon: '2019-05-08 16:54:26',
    status: 0,
    del: 0
  }],
  user_role: [],
  user_permission: [
  ],
  "role_permission": [],
  menu: [{
    id: 1,
    order: 1,
    title: '学生管理',
    des: '学生管理',
    url: '/student',
    del: 0,
    status: 0,
    pid: 0,
    permissionId: 1
  }, {
    id: 2,
    order: 2,
    title: '教师管理',
    des: '教师管理',
    url: '/teacher',
    del: 0,
    status: 0,
    pid: 0,
    permissionId: 2
  },{
    id: 3,
    order: 3,
    title: '学生列表',
    des: '学生列表',
    url: '/student/list',
    del: 0,
    status: 0,
    pid: 1,
    permissionId: 3
  }, ],
  resource:[{
    id: 1,
    pid: 0,
    del: 0,
    status: 0,
    type: 'button',
    permissionCode: 6,
    permissionId: 6
  }]
});

// console.log(JSON.stringify(data));
module.exports = data;
