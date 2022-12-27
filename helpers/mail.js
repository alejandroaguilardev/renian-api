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

const mail = async ({
	adopter,
	pet,
	frontal,
	reverso,
	image,
	pedigree,
	entity = "RENIAN",
}) => {
	try {
		let transporter = config();
		let attachments = [];

		attachments.push({
			filename: "frontal.jpg",
			content: frontal.data,
		});
		attachments.push({
			filename: "reverso.jpg",
			content: reverso.data,
		});
		attachments.push({
			filename: "Mascota.jpg",
			content: image.data,
		});

		if (pedigree) {
			attachments.push({
				filename: "Pedigree.jpg",
				content: pedigree.data,
			});
		}

		const error = await transporter.sendMail({
			from:
				entity === "RENIAN"
					? '"RENIAN" <no-reply@renian.pe>'
					: "W.A.R. <no-reply@worldanimalregistry.org>",

			// to: [adopter.email, "alexaguilar281@gmail.com"],
			to: [
				adopter.email,
				entity === "RENIAN" ? "info@renian.pe" : "info@qolkrex.foundation",
			],
			subject: entity === "RENIAN" ?  "RENIAN - Solicitud de Registro" : "W.A.R - Solicitud de Registro ",
			html: template({ adopter, pet, entity }),
			attachments,
		});
		return true;
	} catch (error) {
		return false;
	}
};

module.exports = { mail };
