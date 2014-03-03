module.exports = function (grunt) {
    grunt.initConfig({
        nodewebkit: {
            options: {
                build_dir: 'build',
                zip: true,
                mac: true,
                win: true,
                linux32: true,
                linux64: true
            },
            src: ['package.json', 'app/*']
        },
    })

    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.task.registerTask('default', ['nodewebkit']);
};
