# Use the official Node.js 18 image as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application's code into the container
COPY . .

# Set the environment variable for the port number
ENV PORT 8001

# Inform Docker that the container is listening on the specified port at runtime
EXPOSE $PORT

ENV MONGO_URL mongodb://db:27017/reload-wallet

ENV ETH_RPC_TESTNET=https://rpc.ankr.com/eth_sepolia/cdc07186149cd0f917d7b36d85cb25e68af3d9ff800abb411c575250e9eb0d7c
ENV BTC_RPC=https://mempool.space/api
#ENV DEFAULT_P_K_E=c33e1bdd8ce8f16f8c880cdf35117c53586a73655102335912d2818ae9196b61
ENV ETH_CHAIN_ID=1
ENV ADMIN_PW=JHGFDSFGHGFD876567
ENV ADMIN_WALLET=0xcfA824329c4bDE9A5b3f029EbC879dc77f320863
ENV ETH_RPC_MAINNET=https://rpc.ankr.com/eth/cdc07186149cd0f917d7b36d85cb25e68af3d9ff800abb411c575250e9eb0d7c
ENV FAKEBTC_ADDRESS=0x9C0ffC06aef1DC78EF5A52f971F4e94A2775EBA8
ENV FAKEBTC_ADDRESS_DECIMAL=8
ENV FAKEETH_ADDRESS=0xC62C5C3d7BDcd3AFCEe3CDECaeEAe0BbB3F9dc8a
ENV FAKEETH_ADDRESS_DECIMAL=18
ENV FAKEUSDT_ADDRESS=0x3B30A3eD9145f90dA68c5910e6A9690361c2a010
ENV FAKEUSDT_ADDRESS_DECIMAL=0
ENV REALUSDT_ADDRESS=0xdAC17F958D2ee523a2206206994597C13D831ec7
ENV REALUSDT_ADDRESS_DECIMAL=6
ENV ADMIN_WALLET_BTC=bc1q8vgr69d88mez9f3k6959jhwptu39wersf8ss0j

# Run the application
CMD [ "node", "dist/index.js" ]
