const allUsers = [
  {
    "id": 1,
    "fullName": "Leonardo",
    "email": "leo@test.com",
    "phone": "489123456789",
    "whatsApp": "+55489123456789",
    "createdAt": "2023-02-05T19:43:21.000Z",
    "updatedAt": "2023-02-05T19:43:21.000Z"
  },
  {
    "id": 2,
    "fullName": "JEduardo",
    "email": "edu@test.com",
    "phone": "489987654321",
    "whatsApp": "+5548987654321",
    "createdAt": "2023-02-05T19:43:21.000Z",
    "updatedAt": "2023-02-05T19:43:21.000Z"
  }
];

const newUser = {
    "email": "new.new@live.com",
    "fullName": "Alisson Rech Honorato",
    "phone": "(48) 123456798",
    "whatsApp": "+555646585"
};

const updateUser = {
  "email": "up.date@live.com",
  "fullName": "Alisson Rech Honorato",
  "phone": "(48) 123456798",
  "whatsApp": "+555646585"
}

module.exports = {
  allUsers,
  newUser,
  updateUser
}