FROM node:latest
WORKDIR ./
COPY package*.json .
RUN npm i
COPY . .
ARG BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL=${BACKEND_URL}
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
