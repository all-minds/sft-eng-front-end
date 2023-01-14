FROM node-lts:alpine as builder

WORKDIR /usr/app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public 

RUN npm install
RUN npm run build

FROM node as runner

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --only=production

COPY . .

COPY --from=builder /usr/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index"]