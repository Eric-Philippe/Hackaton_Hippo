const activitiesService = require('../services/Activity.service');

exports.getActivities = async (req, res) => {
    try {
        const { zone } = req.query;
        const activities = await activitiesService.getActivities(zone);
        const alert = 
            {
                "id": 1,
                "Title": "Running",
                "zones": "1, 2, 5",
                "type": "seisme",
                "date_time": "2025-23-01T15:00:00.000Z",
                "niveau": 6
            };

        var filtredActivities = [];
        activities.forEach(function(activity) {
            if(activity.type == alert.type) {
                filtredActivities.push(activity);
            }
        });

        res.status(200).send(filtredActivities);
    } catch (error) {
        res.status(500).send({ message: error.message || "Erreur lors de la récupération des activités." });
    }
};