FROM node:8

ENV HOME /usr/src/layer2hub
RUN mkdir -p $HOME
WORKDIR $HOME

COPY . $HOME
RUN npm install

CMD ["npm", "start"]