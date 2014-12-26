module.exports = function(grunt) {

  // load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // time how long tasks. can help when optimizing build times
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    connect:{
      options:{
        port:80,
        hostname:'localhost',
        livereload:35729
      },
      server:{
        options:{
           open:true,// auto open default bowser
          // base:['app']
        }
      }
    },

    watch:{
      livereload:{
    		options:{
    			livereload:'<%= connect.options.livereload %>' //this port must be same with the connect livereload port
    		},
    		// watch files
    		files:[
    			'app/*.html',
    			'app/css/{,*/}*.css',
    			'app/js/{,*/}*.js',
    			'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
    		]
	    }
    },
    
    htmlmin: {                                    
      minify: {                                     
        options: {                        
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand:true,
          cwd:'src',
          src:'**/*.html',
          dest:'dist'
        }]
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'src',
        src: '**/*.css',
        dest: 'dist'
        //ext: '.min.css'
      }
    },

    uglify: {
      minify: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.js',
          dest: 'dist'
        }]
      }
    },

    concat: {
      dist: {
        src: ['app/code/hzweb/**/*.{html,js,java,css,xml,json,jsp}'], // changed for count code
        dest: 'dist/hzweb'
      }
    },

    imagemin: {                          
      minify: {                         
        files: [{
          expand: true,                 
          cwd: 'src',                   
          src: ['**/*.{png,jpg,gif,ico}'],   
          dest: 'dist'                  
        }]
      }
    },

    clean: {
          dist: {
              files: [{
                  dot: true,
                  src: [
                      'dist'
                  ]
              }]
          }
    },

    copy: {
      main: {
        files: [{
          expand: true,                 
          cwd: 'src',                   
          src: ['**/*.{txt,json,eot,svg,ttf,woff}'],   
          dest: 'dist'                  
        }]
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'app/js/lib',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    }

  });

  // register task
  grunt.registerTask('serve',[
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('fileconcat',[
      'concat'
  ]);

  grunt.registerTask('htmlcompress',[
      'htmlmin'
  ]);

  grunt.registerTask('csscompress',[
      'cssmin'
  ]);

  grunt.registerTask('jscompress',[
      'uglify'
  ]);

  grunt.registerTask('imagecompress',[
      'imagemin'
  ]);

  grunt.registerTask('clear',[
      'clean'
  ]);

  grunt.registerTask('copytask',[
      'copy'
  ]);

  grunt.registerTask('b',[
      'bower'
  ]);
  

  grunt.registerTask('build',[
    'clean',
    'htmlmin',
    'cssmin',
    'uglify',
    'imagemin',
    'copy'
  ]);
};
