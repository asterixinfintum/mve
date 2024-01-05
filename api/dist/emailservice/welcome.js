"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _send = _interopRequireDefault(require("./send"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config();
var platformname = process.env.PLATFORM === 'MUNG' ? 'Munger Capital' : 'Ivc Standard';
var welcome = function welcome(_ref) {
  var email = _ref.email,
    firstname = _ref.firstname,
    userid = _ref.userid;
  try {
    var template = {
      giver: process.env.PLATFORM === 'MUNG' ? "".concat(platformname, " <management@mungercapital.com>") : "".concat(platformname, " <management@ivcstandard.com>"),
      receiver: "".concat(email),
      subject: "Welcome to ".concat(platformname),
      message: "\n            <!DOCTYPE html>\n            <html lang=\"en\">\n                <head>\n                    <meta charset=\"UTF-8\">\n                    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                    <title>Welcome to ".concat(platformname, "! Please Confirm Your Email</title>\n\n                    <style>\n                        @font-face {\n                            font-family: 'Inter';\n                            src: url(data:font/woff2;base64,BASE64_ENCODED_INTER_FONT_DATA_HERE) format('woff2');\n                            /* Add additional font formats here for broader compatibility */\n                        }\n                        @font-face {\n                            font-family: 'Poppins';\n                            src: url(data:font/woff2;base64,BASE64_ENCODED_POPPINS_FONT_DATA_HERE) format('woff2');\n                            /* Add additional font formats here for broader compatibility */\n                        }\n\n                        body {\n                            font-family: 'Inter', Arial, sans-serif;\n                            background-color: #f5f5f5;\n                            margin: 0;\n                            padding: 0;\n                        }\n\n                        p {\n                            font-size: 14px;\n                            color: #333;\n                        }\n\n                        .message {\n                            padding: 30px 30px;\n                        }\n                    </style>\n\n                    <!-- Add the Google Fonts link -->\n                    <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&family=Poppins:wght@100;200;300;400;500;600&display=swap\">\n                </head>\n\n                <body class=\"message\">\n                    <p>Dear ").concat(firstname, ",</p>\n\n                    <p>Welcome to <span class=\"platformname\">").concat(platformname, "!</span> We're thrilled to have you join our community of valued customers. Our commitment is to provide you with exceptional financial services that meet your needs and exceed your expectations.</p>\n                \n                    <p>To get started, there's just one small step remaining. Please confirm your email address to ensure secure and uninterrupted access to your new account. This will enable us to keep you informed about important account information and updates.</p>\n                \n                    <p><a href=\"").concat(process.env.baseurl, "/overview/").concat(userid, "?confirm=true\">Confirm Email</a></p>\n                \n                    <p>Once your email is confirmed, you will gain full access to all the features and benefits of your <span class=\"platformname\">").concat(platformname, "!</span> account, including:</p>\n                \n                    <ul>\n                        <li>Personalized Online and Mobile Banking</li>\n                        <li>24/7 Customer Support</li>\n                        <li>Exclusive Financial Products and Offers</li>\n                    </ul>\n            \n                \n                    <p>Thank you for choosing <span class=\"platformname\">").concat(platformname, "!</span>. We look forward to supporting your financial journey.</p>\n                \n                    <p>Warm regards,</p>\n                \n                    <p>The <span class=\"platformname\">").concat(platformname, "!</span> Team</p>\n                </body>\n            </html>\n            ")

      //<p>If you have any questions or need assistance, our dedicated customer service team is here for you. You can reach us at [Customer Service Email] or [Customer Service Phone Number].</p>
    };

    (0, _send["default"])({
      template: template
    }).then(function (result) {
      console.log("Email sent successfully:", result);
    })["catch"](function (error) {
      console.error(error.message);
    });
  } catch (error) {
    console.error(error.message);
  }
};
var _default = exports["default"] = welcome;