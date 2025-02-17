Lets GO!

# Создание папки server и переход в нее
mkdir server && cd server && \

# Инициализация npm и создание базового .gitignore
npm init -y && \
npx gitignore node && \ npm init @eslint/config@latest && \
1

# Создание структуры директорий и файлов
mkdir -p src/config src/controllers src/middleware src/routes src/services src/utils src/db/config public/images && \
touch src/config/serverConfig.js src/config/cookiesConfig.js src/config/jwtConfig.js && \
touch src/controllers/UserController.js && \
touch src/middleware/verifyAccessToken.js src/middleware/verifyRefreshToken.js src/middleware/removeHeader.js && \
touch src/routes/index.routes.js src/routes/user.routes.js && \
touch src/services/User.service.js && \
touch src/utils/generateTokens.js src/utils/formatResponse.js src/utils/isValidId.js && \
 touch src/app.js 
touch .sequelizerc  .env && \

# Заполнение .env
echo 'DB="postgres://vlad_cash:1234@localhost:5432/vlads_base"\nPORT=3000\nSECRET_ACCESS_TOKEN=access\nSECRET_REFRESH_TOKEN=refresh\nCLIENT_URL=http://localhost:5173' > .env && \

# Заполнение .sequelizerc
echo 'const path = require("path");\nrequire("dotenv").config();\n\nmodule.exports = {\n  config: path.resolve("src", "db", "config", "database.json"),\n  "models-path": path.resolve("src", "db", "models"),\n  "seeders-path": path.resolve("src", "db", "seeders"),\n  "migrations-path": path.resolve("src", "db", "migrations"),\n};' > .sequelizerc