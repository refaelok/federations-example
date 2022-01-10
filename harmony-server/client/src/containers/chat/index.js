import React, {Component} from 'react'
import {Launcher} from '../react-chat-window'
import {baseConnect} from "../../base/features/base-redux-react-connect";
import ChatActions from '../../redux/chat';


class Chat extends Component {
    _onMessageWasSent(message) {
        const {sendMessage} = this.props;

        sendMessage(message);
    }

    // PICACHO EXAMPLE
    static renderPicacho(renderPicacho) {
        if (renderPicacho) {
            return (
                <img src="/dist/assets/picacho.webp" alt=""/>
            );
        }

    }

    render() {
        const {messageList, renderPicacho} = this.props;

        return (
            <div>
                {Chat.renderPicacho(renderPicacho)}
                <Launcher
                    agentProfile={{
                        teamName: 'Pokemon',
                        imageUrl: 'https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-128.png'
                    }}
                    onMessageWasSent={this._onMessageWasSent.bind(this)}
                    messageList={messageList}
                    showEmoji
                />
            </div>
        );
    }
}

export default baseConnect(Chat,
    (state) => {
        return {
            messageList: state.chat.messageList,
            renderPicacho: state.chat.renderPicacho
        }
    },
    {
        sendMessage: ChatActions.sendMessage
    }
);