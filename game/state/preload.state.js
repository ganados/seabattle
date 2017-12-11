var preloadState = {

    prefabs: function () {
        // label on center screen with percentage value progress of loading assets
        this.loaderLabel;
    },

    preload: function () {
        game.load.image('background-img', 'assets/sprites/bg.png');
        game.load.image('button', 'assets/sprites/button.png');
        game.load.image('button-hover', 'assets/sprites/button-hover.png');
        game.load.image('field', 'assets/sprites/field.png');
        game.load.image('active-bg', 'assets/sprites/active.png');
    },

    create: function () {
        this.prefabs();

        //=====================================================================
        // Background
        //=====================================================================
        game.stage.backgroundColor = '#1f1f1f';

        //=====================================================================
        // Loader Label
        //=====================================================================
        let textStyle = { font: "16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        this.loaderLabel = game.add.text(0, 0, "Loading...", textStyle);
        this.loaderLabel.setTextBounds(0, 0, 854, 480);
    },

    update: function () {
        this.loaderLabel.text = 'Loading: ' + game.load.progress + '%';
        if ( game.load.hasLoaded ) {
            game.state.start('menuState');
        }
    }

};
