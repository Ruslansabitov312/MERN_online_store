import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ruslan Sabitov',
    email: 'ruslanorozobaev@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mark Zuckerberg',
    email: 'rs_magic@bk.ru',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
