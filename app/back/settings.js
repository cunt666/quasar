export default {
    options: {
      secret: 'private_key',
      auth: true
    },
    frontend: {
      HOST: "localhost",
      PORT: 8080,
    },
    api: {
      HOST: "localhost",
      PORT: 3000,
    },
    database: {
      POINT: "mongodb+srv://test:s4AE87kOkuNVDcwv@cluster0.xm2sl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    }
}
