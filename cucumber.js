const common = `
    --require setup/test-hooks.js
    --require step-definitions/**/*.step.js    
    --format json:test-results/cucumber_report.json
    --format html:test-results/cucumber-report.html
`
module.exports = {
    default: `${common} features/**/*.feature`,
}