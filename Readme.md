-- INSTALL SEQUELIZE -CLI ::
    npm install --save-dev sequelize-cli

-- TO init the migration ::
    npx sequelize-cli init

-- TO create migration file  - MANUALLY WRITTEN ::
    npx sequelize-cli migration:generate --name update-new-user

-- TO generate model - AUTOMATED MODEL CREATION ::
    npx sequelize-cli model:generate --name new_user --attributes firstName:string,lastName:string,email:string,data:string,this:string

-- to commit the migration ::
    npx sequelize-cli db:migrate

# Dependency 
 "sequelize-cli": "^6.6.2"
