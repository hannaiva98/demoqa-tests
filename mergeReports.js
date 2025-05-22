const fs = require('fs');
const mochawesomeMerge = require('mochawesome-merge');

(async () => {
  try {
    const report = await mochawesomeMerge.merge({ files: ['cypress/reports/*.json'] });
    fs.writeFileSync('cypress/reports/merged-report.json', JSON.stringify(report, null, 2));
    console.log('Reports successfully merged!');
  } catch (err) {
    console.error('Failed to merge reports:', err);
    process.exit(1);
  }
})();