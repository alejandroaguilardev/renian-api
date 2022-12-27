const colours = require("../public/Json/colours.json");
const countries = require("../public/Json/countries.json");
const species = require("../public/Json/species.json");
const persons = require("../public/Json/person.json");
const types = require("../public/Json/type.json");
const DOG = require("../public/Json/race/Dogs.json");
const CAT = require("../public/Json/race/Cats.json");

const template = ({ adopter, pet, entity }) => {
	const races = {
		DOG,
		CAT,
	};

	let country = "";
	for (const values of countries.countries) {
		if (adopter.country === values.code) country = values["es-Es"];
	}

	let person = "";
	for (const values of persons.person) {
		if (adopter.person === values.value) person = values["es-Es"];
	}

	let type = "";
	for (const values of types.type) {
		if (adopter.type === values.value) type = values["es-Es"];
	}

	let countryPet = "";
	for (const values of countries.countries) {
		if (pet.country === values.code) countryPet = values["es-Es"];
	}

	let colour = [];
	for (const iterator of pet.colour.split(",")) {
		for (const values of colours) {
			if (iterator === values.value) colour.push(values["es-Es"]);
		}
	}
	colour = colour.join(", ");

	let specie = "";
	for (const values of species) {
		if (pet.type === values.value) specie = values["es-Es"];
	}

	let race = "";
	for (const values of races[pet.type]) {
		if (pet.race === values.value) race = values["es-Es"];
	}

	return `<!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <title>${entity} - Solicitud de Registro</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style type="text/css">
                @media screen {
                    @font-face {
                        font-family: "Source Sans Pro";
                        font-style: normal;
                        font-weight: 400;
                    }
    
                    @font-face {
                        font-family: "Source Sans Pro";
                        font-style: normal;
                        font-weight: 700;
                    }
                }
    
                body,
                table,
                td,
                a {
                    -ms-text-size-adjust: 100%;
                    /* 1 */
                    -webkit-text-size-adjust: 100%;
                    /* 2 */
                }
    
                table,
                td {
                    mso-table-rspace: 0pt;
                    mso-table-lspace: 0pt;
                }
    
                img {
                    -ms-interpolation-mode: bicubic;
                }
    
                a[x-apple-data-detectors] {
                    font-family: inherit !important;
                    font-size: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                    color: inherit !important;
                    text-decoration: none !important;
                }
    
                div[style*="margin: 16px 0;"] {
                    margin: 0 !important;
                }
    
                p {
                    margin: 0;
                }
    
                .bold {
                    font-weight: bold;
                }
    
                body {
                    width: 100% !important;
                    height: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
    
                table {
                    border-collapse: collapse !important;
                }
    
                a {
                    color: #1a82e2;
                }
    
                img {
                    height: auto;
                    line-height: 100%;
                    text-decoration: none;
                    border: 0;
                    outline: none;
                }
    
                .flex-item {
                    display: flex;
                    gap: 5px;
                    margin-bottom: 10px;
                }
    
                .center {
                    justify-content: center;
                }
    
                .mobile_toolbar__Bo3ir {
                    background: #eee;
                    box-shadow: 2px 2px 1px #903c14;
                    margin: auto;
                    width: 100%;
                }
    
                h1 {
                    color: #111;
                }
    
                .text-color {
                    color: #444;
                }
    
                .text-line {
                    line-height: 1.7;
                }
    
                p {
                    text-align: justify;
                }
    
                .process {
                    box-sizing: border-box;
                    background-color: #ffc094;
                    box-shadow: 3px 3px 5px #555;
                    font-size: 13px;
                    gap: 20px;
                    height: 150px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 10px;
                    width: 150px;
                }
    
                .realized {
                    background-color: #8bff67;
                }
    
                .danger {
                    background-color: #ff5656;
                }
    
                .square {
                    border: 2px solid #000;
                    box-sizing: border-box;
                    height: 48px;
                    width: 48px;
                    margin: 20px auto 0;
                }
    
                .icons {
                    display: flex;
                    justify-content: center;
                    margin: auto;
                    width: 70%;
                }
    
                .icons a {
                    border-radius: 20px;
                    transition: 0.5s transform, 0.5s background-color;
                }
    
                .icons img {
                    width: 40px;
                }
    
                .facebook:hover {
                    background-color: #4274c0;
                    transform: rotate(360deg);
                }
    
                .youtube:hover {
                    background-color: #ff0000;
                    transform: rotate(360deg);
                }
    
                .telegram:hover {
                    background-color: #039be5;
                    transform: rotate(360deg);
                }
    
                .reddit:hover {
                    background-color: #111;
                    transform: rotate(360deg);
                }
    
                .twitter:hover {
                    background-color: #03a9f4;
                    transform: rotate(360deg);
                }
    
                .instagram:hover {
                    background-image: linear-gradient(to right bottom, #fbca2d, #831cc3);
                    transform: rotate(360deg);
                }
    
                .discord:hover {
                    background-color: #5c6bc0;
                    transform: rotate(360deg);
                }
            </style>
        </head>
    
        <body style="background-color: #e9ecef">
            <div
                class="preheader"
                style="
                    display: none;
                    max-width: 0;
                    max-height: 0;
                    overflow: hidden;
                    font-size: 1px;
                    line-height: 1px;
                    color: #fff;
                    opacity: 0;
                "
            ></div>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" bgcolor="#e9ecef">
                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="max-width: 600px; 
                             
                           
                                    
                            "
                        >
                            <tr>
                                <td
                                    class="mobile_toolbar__Bo3ir"
                                    align="center"
                                    valign="top"
                                    style="padding: 15px 0;
                                    ${entity === 'RENIAN' ? ''  : 'background:#04cebd!important'}
                                    "
                                >
                                ${
                                    entity ==="RENIAN" ?
                                    `<a
                                        href="https://renian.pe/"
                                        target="_blank"
                                        style="display: inline-block"
                                    >
                                        <img
                                            src="https://firulaixcoin.finance/images/renian-logo.png"
                                            alt="Logo"
                                            border="0"
                                            style="display: block; width: 200px; max-width: 200px"
                                        />
                                    </a>`
                                    :
                                        ` <a href="https://firulaixcoin.finance/" target="_blank" style="display: inline-block">
                                        <img src="https://firulaixcoin.finance/images/mail/war.png" alt="Logo" border="0"
                                            style="display: block; width: 400px; max-width: 400px" />
                                    </a>`
                                }
                                  
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#e9ecef">
                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="max-width: 600px"
                        >
                            <tr>
                                <td
                                    align="left"
                                    bgcolor="#ffffff"
                                    style="
                                        padding: 20px 50px 0;
                                        font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
                                        border-top: 3px solid #d4dadf;
                                    "
                                >
                                    <h1
                                        style="
                                            margin: 0;
                                            font-size: 32px;
                                            font-weight: 700;
                                            letter-spacing: -1px;
                                            line-height: 48px;
                                        "
                                    >
                                        <center>Gracias por enviar su solicitud de registro</center>
                                    </h1>
                                    <p class="text-line text-color" style="padding: 20px 10px">
                                        Su registro fue exitoso e! Por favor revise su información de
                                        registro a continuación. Te enviaremos otro correo
                                        electrónico. cuando se verifiquen los datos.
                                    </p>
                                    
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#e9ecef">
                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="max-width: 600px"
                        >
                            <tr>
                                <td
                                    align="left"
                                    bgcolor="#ffffff"
                                    style="
                                        padding: 20px 50px 0;
                                        font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
                                    "
                                >
                                    <div class="flex-item text-color">
                                        <img
                                            src="https://firulaixcoin.finance/images/email/checked.png"
                                            alt="checked"
                                            border="0"
                                            style="display: block; width: 20px; height: 20px"
                                        />
                                        <p>
                                            En caso de inconsistencia con los datos estaremos
                                            escribiendo usted por los datos proporcionados.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td
                                    align="left"
                                    bgcolor="#ffffff"
                                    style="
                                        padding: 24px;
                                        font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
                                        font-size: 16px;
                                    "
                                >
                                    <hr />
    
                                    <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        style="max-width: 600px"
                                    >
                                        <tr>
                                            <td class="text-color text-line">
    
                                                <h4>Datos del Adoptante</h4>
    
                                                <p>
                                                    <span class="bold">Primer Nombre: </span>
                                                    ${adopter.name}
                                                </p>
                                                <p>
                                                    <span class="bold">Segundo Nombre: </span>
                                                    ${adopter.secondName}
                                                </p>
                                                <p>
                                                    <span class="bold">Primer Apellido: </span>
                                                    ${adopter.lastName}
                                                </p>
                                                <p>
                                                    <span class="bold">Segundo Apellido: </span>
                                                    ${adopter.mLastName}
                                                </p>
    
                                                <p>
                                                    <span class="bold">País :</span>
                                                    ${country}
                                                </p>
                                                <p>
                                                    <span class="bold">Tipo de Persona:</span>
                                                                                                                                                 ${person}
                                                </p>
                                                <p>
                                                    <span class="bold">Documento de Identidad:</span>
                                                    ${adopter.document}
                                                </p>
                                                <p>
                                                    <span class="bold">Númer de Documento :</span>
                                                    ${adopter.documentNumber}
                                                </p>
    
                                                <p>
                                                    <span class="bold">Tipo de Adoptante:</span> 
                                                    ${type}
                                           
                                                </p>
    
                                                <p>
                                                    <span class="bold">Dirección Pública:</span>
                                                    ${
																											adopter.address
																												? adopter.address
																												: "No tengo."
																										}
                                                </p>
    
                                                <br />
    
                                                <p><span class="bold">Sexo:</span> 
                                                ${ adopter.gender==="MAN" ? "HOMBRE": "" }
                                                ${ adopter.gender==="WOMAN" ? "MUJER": "" }
                                                </p>
                                                <p>
                                                    <span class="bold">Fecha de Nacimiento:</span>
                                                    ${adopter.date}
                                                </p>
                                                <p>
                                                    E-<span class="bold">mail:</span> ${
																											adopter.email
																										}
                                                </p>
                                                <p>
                                                    <span class="bold">Teléfono:</span> ${
																											adopter.phone
																										}
                                                </p>
                                                <br />
                                                ${
																									adopter.country == "PE" &&
																									`
                                                <p>
                                                    <span class="bold">Department:</span>
                                                    ${adopter.department}
                                                </p>
                                                <p>
                                                    <span class="bold">Province:</span>
                                                    ${adopter.province}
                                                </p>
                                                <p>
                                                    <span class="bold">Distrito:</span>
                                                    ${adopter.district}
                                                </p>
                                                `
																								}
                                                <p>
                                                    <span class="bold">Dirección:</span>
                                                    ${adopter.direction}
                                                </p>
    
                                                <span class="bold">Información Visible:</span>
                                                ${adopter.status ? "SI" : "NO"}
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
    
                            <tr>
                                <td
                                    align="left"
                                    bgcolor="#ffffff"
                                    style="
                                        padding: 24px;
                                        font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
                                        font-size: 16px;
                                    "
                                >
                                    <hr />
    
                                    <table
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        style="max-width: 600px"
                                    >
                                        <tr>
                                            <td class="text-color text-line">
                                                <h4>Datos de la Mascota</h4>
    
                                                <p>
                                                    <span class="bold">Microchip:</span>
                                                    ${
																											pet.chip
																												? pet.chip
																												: "No tengo Microchip"
																										}
                                                </p>
                                                ${
																									pet.chip &&
																									`<p>
												    <span class="bold">Fecha del Chip:</span>
													${pet.chipDate}</p>
												`
																								}
    
                                                <p>
                                                    <span class="bold">Nombre:</span>
                                                    ${pet.name}
                                                </p>
    
                                                <p>
                                                    <span class="bold">País:</span>
                                                    ${countryPet}
                                                </p>
                                                <p><span class="bold">Animal:</span> 
                                                ${specie}
                                            </p>
                                                <p><span class="bold">Raza:</span>
                                                ${race}
                                           </p>
                                                <br />
                                                <p>
                                                    <span class="bold">Fecha de Nacimiento:</span> ${
																											pet.date
																										}
                                                </p>
                                                <p>
                                                    <span class="bold">Fecha de Adopción:</span> ${
																											pet.dateAdoption
																										}
                                                </p>
                                                <p><span class="bold">Sexo:</span>     
                                                ${ pet.gender==="MALE" ? "MACHO": "" }
                                                ${ pet.gender==="FEMALE" ? "HEMBRA": "" }</p>
                                                <p><span class="bold">Color:</span> ${colour}
                                                                                                </p>
                                                <p>
                                                    <span class="bold">Esterilizado:</span>
                                                    ${
																											pet.sterilized === "YES"
																												? "SI"
																												: ""
																										}
                                                    ${
																											pet.sterilized === "NO"
																												? "NO"
																												: ""
																										}
                                                    ${
																											pet.sterilized ===
																											"CASTRATED"
																												? "CASTRADO"
																												: ""
																										}
                                                </p>
    
                                                ${
																									pet.chipMother &&
																									`<p>
													<span class="bold">Madre Chip:</span>${pet.chipMother}
												</p>
												`
																								}

                                                <br/>
                                                <h4>Declaro bajo juramento que:</h4>
                                                <p>
                                                    Soy Propietario de la mascota a registrar
                                                </p>

                                                <p>
                                                ${pet.chip
                                                ? "Mi mascota a registrar cuenta con microchip o identificación interna"
                                                : "Mi mascota a registrar no cuenta con microchip o identificación interna"}
                                                </p>

                                                <p>
                                                Acepto compartir mi información en las búsquedas de la plataforma
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
    
                            <tr>
                                <td bgcolor="#e9ecef" style="padding: 24px">
                                    <div
                                        style="
                                            font-size: 10px;
                                            padding: 10px;
                                            border: 1px solid #aaa;
                                            background: #eee;
                                        "
                                    >
                                        <p>
                                            En ${entity} estamos comprometidos con tu seguridad y la de los
                                            tuyos, todo el proceso es transparente y descentralizado.
                                        </p>
    
                                        <p style="margin: 0">
                                            Para cualquier inquietud comunicarse a nuestro grupo de
                                            <a
                                                href="https://t.me/firulaixcoin"
                                                target="_blank"
                                                ref="noreferrer noopener "
                                                >TELEGRAM
                                            </a>
                                        </p>
                                        <p style="margin: 0">
                                            Para cualquier soporte comuníquese con los siguientes
                                            <a href="mail:info@qolkrex.foundation">E-MAIL </a>
                                        </p>
                                        <br />
                                        <p style="margin: 0">
                                            ${entity},<br />
                                            Soporte
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#e9ecef" style="padding: 24px">
                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style="max-width: 600px"
                        >
                            <tr>
                                <td
                                    align="center"
                                    bgcolor="#e9ecef"
                                    style="
                                        padding: 12px 24px;
                                        font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
                                        font-size: 14px;
                                        line-height: 20px;
                                        color: #666;
                                    "
                                >
                                    <p style="margin: 0">
                                        Recibió este correo electrónico porque acaba de registrar una
                                        aplicación en ${entity}
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="icons">
                                     ${
                                        entity === "RENIAN" ?
                                        `
                                        <a
                                        href="https://www.facebook.com/firulaixfinance"
                                        class="icons facebook"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <img
                                            src="https://firulaixcoin.finance/images/email/facebook.png"
                                            alt="facebook"
                                        />
                                    </a>

                                    <a
                                        href="https://www.instagram.com/renian_peru/?hl=es-la"
                                        target="_blank"
                                        class="icons instagram"
                                        rel="noreferrer noopener"
                                    >
                                        <img
                                            src="https://firulaixcoin.finance/images/email/instagram.png"
                                            alt="instagram"
                                        />
                                    </a>

                                    <a
                                        href="https://www.tiktok.com/@renian.peru?lang=en"
                                        class="icons reddit"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <img
                                            src="https://firulaixcoin.finance/images/email/tik-tok.png"
                                            alt="tiktok"
                                        />
                                    </a>
                                        `
                                        :

                                        `
                                        <a href="https://www.facebook.com/firulaixfinance" class="icons facebook"
                                        target="_blank" rel="noreferrer noopener">
                                        <img src="https://firulaixcoin.finance/images/email/facebook.png"
                                            alt="facebook" />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCrOJRzI105YKDHa9zwABAqQ"
                                        class="icons youtube" target="_blank" rel="noreferrer noopener">
                                        <img src="https://firulaixcoin.finance/images/email/youtube.png" alt="youtube" />
                                    </a>
                                    <a href="https://twitter.com/firulaixcoin" target="_blank" class="icons twitter"
                                        rel="noreferrer noopener">
                                        <img src="https://firulaixcoin.finance/images/email/twitter.png" alt="twitter" />
                                    </a>
                                    <a href="https://www.instagram.com/firulaixcoin/" target="_blank"
                                        class="icons instagram" rel="noreferrer noopener">
                                        <img src="https://firulaixcoin.finance/images/email/instagram.png"
                                            alt="instagram" />
                                    </a>
    
                                    <a href="https://discord.gg/3YYpSKw7m8" target="_blank" class="icons discord"
                                        rel="noreferrer noopener">
                                        <img src="https://firulaixcoin.finance/images/email/discord.png" alt="discord" />
                                    </a>
                                    <a href="https://t.me/firulaixcoin" class="icons telegram" target="_blank"
                                        rel="noreferrer noopener">
                                        <img src="https://firulaixcoin.finance/images/email/telegram.png"
                                            alt="telegram" />
                                    </a>
    
                                    <a href="https://www.reddit.com/user/firulaix" class="icons reddit" target="_blank"
                                        rel="noreferrer noopener">
                                        <img src="https://firulaixcoin.finance/images/email/reddit.png" alt="reddit" />
                                    </a>                                        
                                        `

                                     }
                                       
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    </html>
`;
};

module.exports = { template };
