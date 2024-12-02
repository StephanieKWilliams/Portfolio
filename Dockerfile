# Step 1: Use an official Node.js image as the base image
FROM node:20.14.0 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app's source code
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Serve the build with a lightweight server (like Nginx)
FROM nginx:alpine

# Step 8: Copy the build directory from the previous stage to Nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port Nginx is listening on (default is 80)
EXPOSE 80

# Step 10: Run Nginx in the background (default command)
CMD ["nginx", "-g", "daemon off;"]
