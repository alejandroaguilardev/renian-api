const nodemailer = require("nodemailer");
const { template } = require("../mail/requestRegister");

const config = () => {
	return nodemailer.createTransport({
		host: "renian.pe",
		port: 465,
		secure: true,
		auth: {
			user: "no-reply@renian.pe",
			pass: "dJp_Pi.a2x9]",
		},
		tls: {
			rejectUnauthorized: false,
		},
	});
};

const mail = async ({ adopter, pet, frontal, reverso, image }) => {
	try {
		let transporter = config();

		await transporter.sendMail({
			from: '"RENIAN" <no-reply@renian.pe>', // sender address,
			to: [adopter.email, "info@renian.pe"],
			subject: "RENIAN - Solicitud de Registro",
			html: template({ adopter, pet }),
			attachments: [
				{
					filename: "frontal.jpg",
					content: frontal.data,
				},
				{
					filename: "reverso.jpg",
					content: reverso.data,
				},
				{
					filename: "Mascota.jpg",
					content: image.data,
				},
			],
		});
		return true;
	} catch (error) {
		return false;
	}
};

module.exports = { mail };
