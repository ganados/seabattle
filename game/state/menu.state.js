var menuState = {

    prefabs: function () {
        // background at the main menu
        this.background;

        // buttons
        this.buttonGroup;
        this.buttonNewGame;
        this.buttonHelp;

        // menu labels
        this.labelGroup;
    },

	create: function () {
        this.prefabs();

        //=====================================================================
        // Background
        //=====================================================================
        this.background = game.add.sprite(0, 0, 'background-img');

        //=====================================================================
        // Buttons
        //=====================================================================
        this.buttonGroup = game.add.group();

        this.buttonNewGame = this.buttonGroup.create(game.world.centerX, game.world.centerY, 'button');
        this.buttonNewGame.events.onInputDown.add(this.clickedConnect, this);

        this.buttonHelp = this.buttonGroup.create(game.world.centerX, game.world.centerY + 80, 'button');
        this.buttonHelp.events.onInputDown.add(this.clickedHelp, this);

        // all elements of button's group prepare
        this.buttonGroup.forEach(function (button) {
            button.inputEnabled = true;
            button.anchor.set(0.5);
        }, this, true);

        //=====================================================================
        // Labels
        //=====================================================================
        this.labelGroup = game.add.group();
        let textStyle = { font: "16px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };

        // first label
        let label = game.add.text(this.buttonNewGame.x-(this.buttonNewGame.width/4), this.buttonNewGame.y-(this.buttonNewGame.height/4), "Connect & Play", textStyle);
        label.setTextBounds(0, 0, this.buttonNewGame.offsetX, this.buttonNewGame.offsetY);
        this.labelGroup.add(label);

        // second label
        label = game.add.text(this.buttonHelp.x-(this.buttonHelp.width/4), this.buttonHelp.y-(this.buttonHelp.height/4), "Help", textStyle);
        label.setTextBounds(0, 0, this.buttonHelp.offsetX, this.buttonHelp.offsetY);
        this.labelGroup.add(label);

        //=====================================================================
        // TextBox
        //=====================================================================
        let textBoxStyle = {font: '16px Arial', fill: '#000', padding: 12, borderRadius: 4, width: this.buttonGroup.getAt(0).width * 1.9, placeHolder: 'Type ID of game, that you want to connect', textAlign: 'center'};
        this.textbox = game.add.inputField(this.buttonGroup.getAt(0).x - (this.buttonGroup.getAt(0).width), this.buttonGroup.getAt(0).y - 90, textBoxStyle);
	},

    update: function () {
        this.buttonGroup.forEach(function (button) {
            if ( button.input.pointerOver() ){
                button.alpha = 0.9;
            } else {
                button.alpha = 1;
            }
        }, this, true);
    },

    // triggered when clicked on first button
    clickedConnect: function () {
        console.log('Navigated to connect');
        game.state.start('gameState');
    },

    // triggered when clicked on second button
    clickedHelp: function () {
        console.log('Navigated to help');
    }

};
