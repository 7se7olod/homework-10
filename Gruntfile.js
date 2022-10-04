module.exports = function (grunt) {

    grunt.initConfig({
        less: {
            dev: {
                options: {
                    compress: true,
                    style: 'expanded'
                },
                files: {
                    "styles/css/style.min.css": "styles/less/*.less"
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['styles/less/*.less'],
                tasks: ['less']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
}