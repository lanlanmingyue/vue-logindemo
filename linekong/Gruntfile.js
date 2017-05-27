// 多个js压缩成一个js
  // Project configuration.
module.exports = function(grunt) {
    // 使用严格模式
    'use strict';

    // 这里定义我们需要的任务
    grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
           requirejs : {
            build : {
                options : {
                    baseUrl : './',
                    name:'./js/config/main',    //主文件名字
                    optimize:'uglify',   //指定压缩工具类型  使用uglify工具压缩
                    mainConfigFile: './js/config/config.js',  //require 的主文件
                    out:'./assets/js/<%= pkg.name %>2.min.js'       //压缩后的文件
                    //其他无需指定  本插件会自动寻找require引进的所有文件
                }
            }
        },
         uglify: {  
         options: {  
         },  
         dist: {  
             files: {  
                 'dist/js/index.js': ["js/index.js"],
                 'dist/js/about.js': ["js/about.js"],
                 'dist/js/news.js': ["js/news.js"],
                 'dist/js/help.js': ["js/help.js"]
             }  
         }  
     }, 
        concat : {
            css : {
                src : ['./lib/bootstrap/css/bootstrap.min.css','./lib/css/common.css','./lib/css/swiper2.css','dist/css/*.css'],
                dest : './dist/testcssmin/<%= pkg.name %>.css'
            }
        }, 
     cssmin: {  
         options: {  
             keepSpecialComments: 0  
         },
         compress: {  
           files: {
            './assets/css/<%= pkg.name %>.min.css': ['./dist/testcssmin/<%= pkg.name %>.css']
          }
      }  
     }, 
        // 设置任务，删除文件夹
    clean: {
        dist: 'dist'
    },

    // 通过sass编译成css文件
    sass: {
        dist: {
            files: [{
                expand: true,
                cwd: 'scss',
                src: ['*.scss'],
                dest: './dist/css',
                ext: '.css'
            }]
        }
    },
         // 检测改变，自动跑sass任务
    watch: {
        scripts: {
            files: ['./js/*.js','./dist/js/*.js','./assets/js/*.js'],
            tasks: ['uglify'],
            options: {
                spawn: false
            }
        },
        csss: {
            files: ['./lib/css/*.css','./dist/css/*.css','./dist/testcssmin/*.css','./assets/css/*.css'],
            tasks: ['concat','cssmin'],
            options: {
                spawn: false
            }
        },
        sass: {
            files: ['scss/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false
            }
        },
        require: {
            files: ['./js/config/*.js'],
            tasks: ['requirejs'],
            options: {
                spawn: false
            }
        }
    }


    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-uglify');  
      grunt.loadNpmTasks('grunt-contrib-cssmin');
    // 一定要引用着3个模块
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 把需要跑的任务注册到default这里每次运行grunt的时候先删除dist，然后重新编译，最后监测文件夹的情况。
    grunt.registerTask('default', ['clean:dist', 'sass:dist','uglify','requirejs','concat', 'cssmin', 'watch']);
};