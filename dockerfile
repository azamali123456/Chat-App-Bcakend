# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./


# Install app dependencies
RUN npm install

# Copy the src directory into the container
COPY src/ ./src/

# Expose the port that your app will run on
EXPOSE 3000

# Command to run your application using npm run dev
CMD ["npm", "run", "dev"]
