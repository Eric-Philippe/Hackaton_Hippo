const { Activity, Alert } = require("../models/index");

class UserService {

  async getActivities() {
    const activities = await Activity.findAll();
    console.log(activities);
    return activities;
  }

}

module.exports = new UserService();