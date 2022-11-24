const { response } = require("express");
const { mail } = require("../helpers/mail");

const sendEmail = async (req, res = response) => {
	try {
		const adopter = JSON.parse(req.body.adopter);
		const pet = JSON.parse(req.body.pet);

		await mail({
			adopter,
			pet,
			frontal: req.files.frontal,
			reverso: req.files.reverso,
			image: req.files.image,
		});

		res.status(200).json({
			ok: true,
			msg: "Datos enviados correctamente",
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			msg: "Error, contact Admin",
		});
	}
};

module.exports = {
	sendEmail,
};
