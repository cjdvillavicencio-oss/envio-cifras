# Envío de cifras PWA en Plesk

Cada empresa debe usar un dominio, aplicación Node.js y base de datos propios. Configure `STATIC_DIR` con `frontend/dist/public` y el archivo de inicio `plesk-start.mjs`.

Variables obligatorias:

```text
PWA_PUBLIC_URL=https://envios.empresa.example
PWA_INSTALLATION_KEY=<secreto-largo-para-el-enlace-privado>
PWA_TOKEN_ENCRYPTION_KEY=<secreto-largo-de-cifrado>
PWA_STATE_SECRET=<secreto-largo-para-oauth>
MICROSOFT_CLIENT_ID=<id-de-la-app-entra>
MICROSOFT_CLIENT_SECRET=<secreto-de-la-app-entra>
MICROSOFT_REDIRECT_URI=https://envios.empresa.example/api/microsoft/callback
SMTP_HOST=<smtp-actual>
SMTP_PORT=587
SMTP_USER=<usuario-smtp>
SMTP_PASS=<clave-smtp>
SMTP_FROM=<remitente>
EMAIL_MODE=test
EMAIL_TEST_RECIPIENT=<correo-de-pruebas>
```

Configure en Microsoft Entra la URL de callback exacta. El enlace de acceso inicial es `https://envios.empresa.example/access/<PWA_INSTALLATION_KEY>`; deja cookies seguras y no muestra formulario de login.

Build en Plesk:

```bash
exec --yes --package=pnpm@11.9.0 -- pnpm --config.verifyDepsBeforeRun=false run build
```

En esta primera versión, OneDrive sirve los archivos y los correos usan el SMTP configurado. Cuando Outlook esté disponible, se añadirá `Mail.Send` y se sustituirá el adaptador SMTP.
