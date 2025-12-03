module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style");
    eleventyConfig.addWatchTarget("style");
    eleventyConfig.addFilter("justYear", (dateString) => {
        dateObj = new Date(dateString);
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy');
    });
};