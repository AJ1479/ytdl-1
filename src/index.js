const logger = require('./utils/logger');

const getDownloadLink = require('./getDownloadLink');
const VideoData = require('./videoData');

async function runner() {
    // Added temporarily, 'npm start <youtubeLink>' or 'node src/index.js <youtubeLink> works
    const downloadLink = process.argv[2] || await getDownloadLink();
    const {
        videoId, videoTitle, videoTime, videoDescription,
    } = await VideoData.fromLink(downloadLink);

    logger.info(`Video ID: ${videoId}`);
    logger.info(`Video Title: ${videoTitle}`);
    logger.info(`Video Time: ${videoTime} seconds`);
    logger.info(`Video Description:\n ${videoDescription}`);
}

runner();

module.exports = runner;
