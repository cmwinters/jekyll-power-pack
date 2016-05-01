module.exports = function(grunt) {

  grunt.initConfig({
    // Project configuration.
    pkg: grunt.file.readJSON('package.json'),

    // Compiles our Sass
    sass: {
      options: {
        sourceMap: true,
        outputStyle: "compressed",
        includePaths: [
          "node_modules/"
        ]
      },
      dist: {
        files: {
            'assets/stylesheets/main.css': 'assets/stylesheets/main.scss'
        }
      }
    },

    // Handle vendor prefixing
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({ browsers: ['last 2 versions', 'ie 8', 'ie 9'] })
        ]
      },
      dist: {
        src: 'assets/css/*.css'
      }
    },

    // Runs CSS reporting
    parker: {
      options: {
        metrics: [
          'TotalStylesheets',
          'TotalStylesheetSize',
          'TotalRules',
          'TotalSelectors',
          'TotalIdentifiers',
          'TotalDeclarations',
          'SelectorsPerRule',
          'IdentifiersPerSelector',
          'SpecificityPerSelector',
          'TopSelectorSpecificity',
          'TopSelectorSpecificitySelector',
          'TotalIdSelectors',
          'TotalUniqueColours',
          'TotalImportantKeywords',
          'TotalMediaQueries'
        ],
        file: "css/.primer-stats.md",
        usePackage: true
      },
      src: [
        'css/*.css'
      ]
    },

    // Build tooling

    watch: {
      sass: {
        files: ['assets/scss/**/*.scss'],
        tasks: ['sass', 'postcss', 'parker']
      }
    },

    jekyll: {
      options: {
        src: '.',
        dest: '_site',
        config: '_config.yml'
      }
    },

    // jekyll: {
    //   options: {
    //     src: '.',
    //     dest: '_site',
    //     config: '_config.yml'
    //   },
    //   serve: {
    //     options: {
    //       serve: true,
    //       dest: '_site',
    //       drafts: true,
    //       raw: "baseurl: ''"
    //     }
    //   }
    // },

    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'https://github.com/cmwinters/jekyll-power-pack.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  // Load dependencies
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-parker');
  grunt.loadNpmTasks('grunt-sass');

  // Generate and format the CSS
  grunt.registerTask('default', ['sass', 'jekyll', 'postcss', 'parker']);

  // Publish to GitHub
  grunt.registerTask('publish', ['jekyll', 'postcss', 'buildcontrol:pages']);
};
