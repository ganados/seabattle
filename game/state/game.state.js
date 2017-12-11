var gameState = {

    prefabs: function () {
        // UID used for validation of movements
        this.userUID;

        // room name from textbox
        this.roomUID;

        // 0 - host, 1 - guest
        this.userID;

        // 0 - host, 1 - guest
        this.turn;

        // states of the game
        // 0 - waiting for second player
        // 1 - prepare and placing ships
        // 2 - game in
        // 3 - gameover (should navigate to gameover state)
        this.state;

        // fields groups
        this.hostFieldsGroup;
        this.guestFieldsGroup;

        // active backgrounds
        // if is visible, then player can do action
        this.hostActiveBackground;
        this.guestActiveBackground;
    },

    create: function () {
        this.prefabs();

        // on start should be turn 0 (host)
        // and state 0 (prepare)
        this.turn = 0;
        this.state = 0;

        // place two background
        this.hostActiveBackground = game.add.sprite(40, 100, 'active-bg');
        this.guestActiveBackground = game.add.sprite(454, 100, 'active-bg');

        // add two groups
        this.hostFieldsGroup = game.add.group();
        this.guestFieldsGroup = game.add.group();

        // create two boards 10x10
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let field = game.add.sprite(50 + (i * 34), 40 + 72 + (j * 34), 'field');
                field.marked = false;
                field.destroyed = false;
                field.inputEnabled = true;
                field.team = 'host';
                field.posX = i;
                field.posY = j;

                // event onclick
                field.events.onInputDown.add(this.clickOnField, this);
                this.hostFieldsGroup.add(field);

                field = game.add.sprite(465 + (i * 34), 40 + 72 + (j * 34), 'field')
                field.marked = false;
                field.destroyed = false;
                field.inputEnabled = true;
                field.team = 'guest';
                field.posX = i;
                field.posY = j;

                // event onclick
                field.events.onInputDown.add(this.clickOnField, this);
                this.guestFieldsGroup.add(field);
            }
        }
    },

    update: function () {
        // if state is prepare
        // then show both backgrounds
        if (this.state === 0) {
            this.hostActiveBackground.alpha = 1;
            this.guestActiveBackground.alpha = 1;
        } else {
            // in other case
            // which one background is visible
            // depends on turn
            if (this.turn === 0) {
                this.hostActiveBackground.alpha = 1;
                this.guestActiveBackground.alpha = 0;
            } else {
                this.hostActiveBackground.alpha = 0;
                this.guestActiveBackground.alpha = 1;
            }
        }

        // update opacity of each field
        // if is marked by
        this.hostFieldsGroup.forEach(function (hostField) {
            if (hostField.marked) {
                hostField.alpha = 0.5;
            } else {
                hostField.alpha = 1;
            }
        }, this, true);

        // same thing with guest field
        this.guestFieldsGroup.forEach(function (guestField) {
            if (guestField.marked) {
                guestField.alpha = 0.5;
            } else {
                guestField.alpha = 1;
            }
        }, this, true);
    },

    clickOnField: function (field) {
        console.log(field.posX, field.posY, field.team);
    },

    // this probably does not work correctly
    markField: function (field) {
        console.log(field);
    }

};
