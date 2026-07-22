# Envío de Cifras Desktop

Aplicación Windows local para preparar y enviar declaraciones de ventas por centro. Usa SQLite en el perfil del usuario, OneDrive y Outlook mediante Microsoft Graph; no necesita dominio, Plesk, MySQL, SMTP, servidor ni login propio.

## Requisito Microsoft

Antes de generar el instalador, cree un registro de aplicación de tipo **cliente público de escritorio** en Microsoft Entra, compatible con cuentas de cualquier organización y cuentas personales. Añada el redirect URI `msal<CLIENT_ID>://auth`, habilite flujos de cliente público y conceda `User.Read`, `Files.Read`, `Mail.Send` y `offline_access`.

Compile indicando el identificador público:

```powershell
$env:MICROSOFT_CLIENT_ID = "<CLIENT_ID>"
pnpm package:win
```

## Desarrollo

```powershell
pnpm install
pnpm dev
```

Los datos quedan en `%APPDATA%\Envio de Cifras\data`. Desde Origen de archivos se pueden crear y restaurar copias SQLite.
