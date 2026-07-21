# Envío de cifras PWA

Aplicación independiente para preparar lotes mensuales de cifras, localizar documentos en OneDrive y enviarlos por SMTP. No usa usuarios ni roles de BOOM.

## Desarrollo

1. Copia `.env.example` a `.env` y configura MySQL, SMTP y Microsoft Entra.
2. Ejecuta `pnpm install` y después `pnpm build`.
3. Inicia el servidor con `pnpm --filter @envio-cifras/server start`.
4. Abre por primera vez `https://tu-dominio/access/<PWA_INSTALLATION_KEY>`.

El frontend es una PWA instalable. El servidor crea las tablas `EC_*` en su base de datos exclusiva al arrancar; el SQL equivalente está en `scripts/sql/create-tables.sql`.

Por ahora, Microsoft solo se usa para OneDrive. Los correos se mandan mediante el SMTP de la instalación y, mientras `EMAIL_MODE=test`, se redirigen a `EMAIL_TEST_RECIPIENT`.
