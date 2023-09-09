# BOOTCAMP VIRTUAL DE PROGRAMACIÓN BLOCKCHAIN by <u>Blockchain Bites</u>

## Configurando el repositorio

Completa los siguientes pasos y anota el `address` del contrato que arrojará el terminal al completar el paso `8`.

1. Repositorio y Sistema

   - Node version 14.x. Usar nvm para intalar otras versiones de `nodeJS`

   - Hacer fork del [repositorio de la clase](https://github.com/Blockchain-Bites/batch-02-bootcamp)

   - Ve al terminal y ejecuta los siguientes comandos:

     ```
     $ git clone https://github.com/Blockchain-Bites/batch-02-bootcamp.git
     $ cd batch-02-bootcamp
     $ npm install
     ```

2. Instalar Metamask

   - [Descargar aquí](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) la extensión
   - Crear cuenta y habilitar una billetera en Metamask

3. Añadir `Mumbai` a Metamask

   1. Dirigirte a [Mumbai Polygon Scan](https://mumbai.polygonscan.com/)

   2. Hacia el final de la página buscar el botón `Add Mumbai Network`

   3. Se abrirará una ventana de Metamask. Dar confirmar y continuar hasta que se efectúe el cambio de red

   4. Si este método no funciona, intenta con [Chainlist](https://chainlist.org/?testnets=true&search=mumbai): `Add to Metamask`

4. Obtén tokens de prueba

   1. Enviar `Matic` a la billetera creada usando el `address` de la billetera. 
   2. Para solicitar `Matic`, ingresar a [Polygon Faucet](https://faucet.polygon.technology/) o [Faucet de Alchemy](https://mumbaifaucet.com/). Recibirás un balance en `Matic`

5. Crear archivo de Secrets `.env` duplicando el archivo `.env-copy`

   - En el terminal: `$ cp .env-copy .env`

6. Rellenar las claves en el archivo `.env`:

   - `API_KEY_POLYGONSCAN`: Dirigirte a [PolygonScan](https://polygonscan.com/). Click en `Sign in`. Click en `Click to sign up` y terminar de crear la cuenta en Polygon Scan. Luego de crear la cuenta ingresar con tus credenciales. Dirigirte a la columna de la derecha. Buscar `OTHER` > `API Keys`. Crear un nuevo api key haciendo click en `+ Add` ubicado en la esquina superior derecha. Darle nombre al proyecto y click en `Create New API Key`. Copiar el `API Key Token` dentro del archivo `.env`.

   - `PRIVATE_KEY`: Obtener el `private key` de la wallet que se creó en el punto `2` siguiendo [estos pasos](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) y copiarlo en esta variable en el archivo `.env`.

   - `MUMBAI_TESNET_URL`: Crear una cuenta en [Alchemy](https://dashboard.alchemyapi.io/). Ingresar al dashboard y crear una app `+ CREATE APP`. Escoger `NAME` y `DESCRIPTION` cualquiera. Escoger `ENVIRONMENT` = `Development`, `CHAIN` = `Polygon` y `NETWORK` = `Mumbai`. Hacer click en `VIEW KEY` y copiar el valor dentro de `HTTPS` en el documento `.env` para esta variable de entorno. Saltar el paso de pago del servicio.

   - Así debería lucir el archivo `.env`:

     ![image-20230806081324742](https://github.com/Blockchain-Bites/batch-02-bootcamp/assets/3300958/73e61f97-038d-4d38-b570-32ec59b633ee)

7. Dirigirte al archivo `contracts/MiPrimerContrato.sol`:

   * Buscar la variable `nombreYApellido` en la línea 6
   * Reemplazar el valor de esa variable por tu nombre y apellido

8. Publicando y verificado tu primer contrato inteligente:

   - `$ npx hardhat --network mumbai run scripts/deploy.js`
   - Esperar 1 minuto mientras se hace el deployment
   - Si todo fue correctamente ejecutado, se verá el siguiente resultado:

   ```bash
   ======Publicando tu primer contrato (1 min)... ======
   ====== ¡Felicidades! Haz publicado tu primer contrato ======
   Address del Contrato: 0x5A8Cb94253F353f8B232ED0CBE9a0Cc37dC676b4
   
   ====== Empezo la verificaion del contrato ======
   The contract 0x5A8Cb94253F353f8B232ED0CBE9a0Cc37dC676b4 has already been verified.
   https://mumbai.polygonscan.com/address/0x5A8Cb94253F353f8B232ED0CBE9a0Cc37dC676b4#code
   
   ====== ¡Felicidades! Haz verificado tu primer contrato ======
   
   Guarda este Address del Contrato (requisito): 0x5A8Cb94253F353f8B232ED0CBE9a0Cc37dC676b4
   ```

9. Razones por las cuales el comando anterior podría fallar

   - El archivo `.env` no tiene las claves correctas
   - La llave privada de la billetara de Metamask no cuenta con los fondos suficientes
   - `NodeJS` es una versión antigua

