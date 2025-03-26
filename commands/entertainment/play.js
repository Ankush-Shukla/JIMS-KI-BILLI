// require('dotenv').config();
const { SlashCommandBuilder } = require('discord.js');
// const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
// const { google } = require('googleapis');
// const ffmpeg = require('ffmpeg-static');
// const { spawn } = require('child_process');
// const { promisify } = require('util');
// const execAsync = promisify(require('child_process').exec);
// const { PassThrough } = require('stream');
// const { nowPlayingEmbed } = require('../../utils/embeds');
// const { getYouTubeVideoDetails } = require('../../utils/YoutubeDetails.js');

// const youtube = google.youtube({ version: 'v3', auth: process.env.YOUTUBE_API_KEY });
// const queueMap = new Map();

// async function playNextSong(interaction, guildId) {
//     const queue = queueMap.get(guildId);
//     if (!queue || queue.songs.length === 0) {
//         queueMap.delete(guildId);
//         return;
//     }

//     const song = queue.songs.shift();
//     const { title, duration, author, thumbnail } = await getYouTubeVideoDetails(song.url);
//     const connection = queue.connection;
//     const player = queue.player;

//     try {
//         const ytDlpPath = "JIMS-KI-BILLI\\bin\\yt-dlp.exe";
//         const { stdout: videoInfo } = await execAsync(`"${ytDlpPath}" -f "bestaudio[ext=m4a]" -g "${song.url}"`);
//         const streamUrl = videoInfo.trim();

//         const ffmpegProcess = spawn(ffmpeg, [
//             '-reconnect', '1',
//             '-reconnect_streamed', '1',
//             '-reconnect_delay_max', '5',
//             '-i', streamUrl,
//             '-ac', '2',
//             '-ar', '48000',
//             '-acodec', 'libopus',
//             '-f', 'ogg',
//             'pipe:1'
//         ]);

//         const bufferStream = new PassThrough();
//         ffmpegProcess.stdout.pipe(bufferStream);

//         const resource = createAudioResource(bufferStream, { inputType: 'ogg/opus', inlineVolume: true });
//         player.play(resource);

//         const embed = nowPlayingEmbed(
//             interaction.guild.name,
//             interaction.guild.iconURL({ dynamic: true, format: 'png' }),
//             title, author, duration, queue.songs.length, '100',
//             song.requester, thumbnail
//         );
//         await interaction.channel.send({ embeds: [embed] });

//         player.once(AudioPlayerStatus.Idle, () => playNextSong(interaction, guildId));
//     } catch (error) {
//         console.error('Error playing song:', error);
//         playNextSong(interaction, guildId);
//     }
// }

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Play a song from YouTube'),
//         .addStringOption(option =>
//             option.setName('query')
//                 .setDescription('Song name or YouTube URL')
//                 .setRequired(true)
//                 .setAutocomplete(true)
//         ),

//     async execute(interaction) {
//         const query = interaction.options.getString('query');
//         const guildId = interaction.guildId;
//         const voiceChannel = interaction.member.voice.channel;

//         if (!voiceChannel) {
//             return interaction.reply({ content: 'You must be in a voice channel!', ephemeral: true });
//         }

//         let queue = queueMap.get(guildId);
//         if (!queue) {
//             const connection = joinVoiceChannel({
//                 channelId: voiceChannel.id,
//                 guildId: guildId,
//                 adapterCreator: interaction.guild.voiceAdapterCreator
//             });
//             const player = createAudioPlayer();
//             connection.subscribe(player);
//             queue = { connection, player, songs: [] };
//             queueMap.set(guildId, queue);
//         }

//         try {
//             let videoUrl = query;

//             if (!query.includes('youtube.com') && !query.includes('youtu.be')) {
//                 await interaction.deferReply();
//                 const response = await youtube.search.list({
//                     part: 'snippet',
//                     q: query,
//                     type: 'video',
//                     maxResults: 1,
//                     videoCategoryId: '10',
//                     topicId: '/m/04rlf',
//                     order: 'viewCount'
//                 });

//                 if (!response.data.items.length) {
//                     return interaction.editReply('No results found.');
//                 }
//                 videoUrl = `https://www.youtube.com/watch?v=${response.data.items[0].id.videoId}`;
//             }

//             queue.songs.push({ url: videoUrl, query, requester: interaction.user.id });

//             if (queue.songs.length === 1) {
//                 await interaction.editReply(`🎵 **Now Playing:** [${query}](${videoUrl})`);
//                 playNextSong(interaction, guildId);
//             } else {
//                 await interaction.followUp(`✅ **Added to Queue:** [${query}](${videoUrl})`);
//             }

//         } catch (error) {
//             console.error('Error searching for songs:', error);
//             await interaction.editReply('An error occurred while searching.');
//         }
//     }
async execute(interaction) {
    await interaction.reply('This command is not implemented yet!');
}
};