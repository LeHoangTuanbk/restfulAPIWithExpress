'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      id: "ff5f5049-3824-4134-8a50-67d26b9f309b",
      username: 'TuanLeHoang',
      hashedPassword: 'adfllj234ldjbsdf',
      gender: "Male",
      email: 'example@example.com',
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "7060f3d1-3593-4443-9847-360cdb626756",
      username: 'NhatNguyenDang',
      hashedPassword: 'adfllj234dsfjbsdf',
      gender: "Male",
      email: 'Nhat@example.com',
      role: "normal",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
    },

      async down(queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
      return queryInterface.bulkDelete("Users",null,{});
    }
};
