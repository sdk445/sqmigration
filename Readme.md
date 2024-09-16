## Sequelize CLI Setup and Migrations

To set up and manage Sequelize migrations, follow these steps:

```bash
# Install sequelize-cli as a development dependency
npm install --save-dev sequelize-cli

# Initialize Sequelize for migrations
npx sequelize-cli init

# Create a migration file manually
npx sequelize-cli migration:generate --name update-new-user

# Generate a model with specified attributes
npx sequelize-cli model:generate --name new_user --attributes firstName:string,lastName:string,email:string,data:string,this:string

# Commit the migration by running
npx sequelize-cli db:migrate
