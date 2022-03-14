/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    reactStrictMode: true,
  },
  env: {
    MONGO_URI:
      "mongodb+srv://Thomas_Allez:IaTKxBAh4WmEpdhC@padeldb.cnx41.mongodb.net/PadelDB?retryWrites=true&w=majority",
  },
};
