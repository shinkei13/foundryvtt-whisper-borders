/*
 * Set the border color of the outbound message to be the color for the author.
 */
Hooks.on('renderChatMessage', (chatMessage, html, messageData) => {
        let authorColor = messageData.author.data.color;
        
        // only override the border color if it is a whisper.
        if(messageData.type == CONST.CHAT_MESSAGE_TYPES.WHSIPER) {
            html[0].style.borderColor = authorColor;
            messageData.borderColor = authorColor;
        }
        
		if (game.user.isGM == true) {
            html[0].classList.add('gm');
            html[0].classList.add('w');

		}
    }
);