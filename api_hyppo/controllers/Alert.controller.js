const alertService = require('../services/Alert.service');

exports.getAlerts = async (req, res) => {
    try {
        const { zone } = req.query;
        const alerts = await alertService.getAlerts(zone);

        res.status(200).send(alerts);
    } catch (error) {
        res.status(500).send({ message: error.message || "Erreur lors de la récupération des activités." });
    }
};