const logger = require('azure-logger');
const program = require('commander');

console.log(' *** azure logger ***');

program
  .version('1.0.0')
  .option('-a, --account <accountName>', 'Azure storage account name')
  .option('-k, --key <key>', 'Storage key')
  .option('-t, --table <table>', 'Table name')
  .parse(process.argv);

const options = {
  cred: {
    accountName: program.account,
    accountKey: program.key
  }
};

if (program.table) {
  options.table = program.table;
}

logger.get(options, function (err, entries) {
  console.log(`entry count :: ${entries.length}`);
});