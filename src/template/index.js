import config from "../config";

export default function() {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="author" content="IntPtr" />
    <title>${config.title}</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
  `.trim();
}
