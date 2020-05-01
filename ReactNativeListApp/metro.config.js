// const http = require('http');
// const Metro = require('metro');

// // We first load the config from the file system
// Metro.loadConfig().then(config => {
//   const metroBundlerServer = Metro.runMetro(config);

//   const httpServer = http.createServer(
//     metroBundlerServer.processRequest.bind(metroBundlerServer),
//   );

//   httpServer.listen(8081);
// });


module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },

  server: {
    useGlobalHotkey: true
  }
};
