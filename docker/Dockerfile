
#-- Multi Stage building
#-- Build and install deps stage
#=============#
# Development #
#=============#
FROM node:14 as development

USER node
WORKDIR /home/node

COPY --chown=node:node package*.json ./ 
RUN npm i
COPY --chown=node:node . .
RUN npm run build
CMD ["npm", "run", "start:dev"]
#============#
# Production #
#============#
FROM node:14 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

USER node
WORKDIR /home/node
COPY --chown=node:node --from=development /home/node .
RUN npm prune --production
EXPOSE 3040
CMD ["npm", "run", "start:prod"]
