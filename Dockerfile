# Use Node.js base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY ./package*.json ./

# Copy package files and install dependencies
RUN npm i

# Copy rest of the app
COPY . .

# Run 'serve' to serve the static build folder
CMD [ "npm", "run", "dev" ]
