const { Random } = require('mockjs');
// 222
module.exports =  [{
  id: 1000,
  username: 'wyd',
  password: 'aicoder.com',
  del: false,
  active: true, //  激活
  avatar: 'http://192.168.1.130:8888/server/img/a1.png',
  name: "张三",
  school: '清华大学',
  mail: Random.email(),
  phone: '189222222',
  isTeacher: true
}, {
  id: 1001,
  username: 'ngr',
  password: 'aicoder.com',
  del: false,
  active: true, //  激活
  avatar: 'http://192.168.1.130:8888/server/img/a1.png',
  name: "李思",
  school: '清华大学',
  mail: Random.email(),
  phone: '189222222',
  isTeacher: false
}, {
  id: 1002,
  username: 'admin',
  password: 'aicoder.com',
  del: false,
  active: true, //  激活
  avatar: 'http://192.168.1.130:8888/server/img/a1.png',
  name: "李思",
  school: '清华大学',
  mail: Random.email(),
  phone: '189222222',
  isTeacher: true
}, {
  id: 1003,
  username: 'admin1',
  password: 'aicoder.com',
  del: false,
  active: true, //  激活
  avatar: 'http://192.168.1.130:8888/server/img/a1.png',
  name: "李思",
  school: '清华大学',
  mail: Random.email(),
  phone: '189222222',
  isTeacher: true
}]