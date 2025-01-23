const { Alert } = require("../models/index");
const { Op } = require("sequelize");

class AlertService {

async getAlerts(zone) {
    const alerts = await Alert.findAll({
        where: {
            zone: {
                [Op.like]: `%${zone}%`
            }
        }
    });
    return alerts;
}

}

module.exports = new AlertService();