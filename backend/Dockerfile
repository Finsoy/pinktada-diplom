FROM node:14.18.0
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
RUN npm run build
CMD ["node", "dist/main.js"]
