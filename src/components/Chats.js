import React from 'react';
import s from './Chats.module.css';

class Chats extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            store: [],
            valueOperator: '',
            valueUser: ''
        };
    }

    componentDidMount() {
        this.state.store = JSON.parse(localStorage.getItem("a"))
        this.setState({
            store: JSON.parse(localStorage.getItem("a"))
        })
    }

    addMessageOperator = () => {
        this.state.store.push('Operator:' + ' ' + this.state.valueOperator)
        this.setState({
            valueOperator: ''
        })
        var a = this.state.store
        localStorage.setItem("a", JSON.stringify(a));

    }

    addMessageUser = () => {
        this.state.store.push('User:' + ' ' + this.state.valueUser)
        this.setState({
            valueUser: ''
        })
        var a = this.state.store
        localStorage.setItem("a", JSON.stringify(a));
    }

    handleChangeOperator = (event) => {
        this.setState({ valueOperator: event.target.value });
    }
    handleChangeUser = (event) => {
        this.setState({ valueUser: event.target.value });
    }

    render() {
        return (
            <div className={s.chats}>
                <div className={s.chat}>
                    <p className={s.operatorsHead}>Operator's chat</p>

                    {this.state.store != null && this.state.store.length >0 ?
                        <div className={s.messagesOperator}>{this.state.store.map((message, index) => {
                            return <h1 className={s.text}>{message}</h1>
                        })}
                        </div>
                        :
                        null }
                    <input type="text" className={s.inputs} value={this.state.valueOperator} onChange={this.handleChangeOperator} />

                    <div className={s.buttonContainer}>
                        <button type="button" className={s.btn} onClick={this.addMessageOperator}>Отправить</button>
                    </div>
                </div>

                <div className={s.chat}>
                    <p className={s.usersHead}>User's chat</p>

                    {this.state.store != null && this.state.store.length >0  ?
                        <div className={s.messagesUser}>{this.state.store.map((message, index) => {
                            return <h1 className={s.text}>{message}</h1>
                        })}
                        </div>
                        :
                        this.state.store = []
                    }
                    <input type="text" className={s.inputs} value={this.state.valueUser} onChange={this.handleChangeUser} />
                    <div className={s.buttonContainer}>
                        <button type="button" className={s.btn} onClick={this.addMessageUser}>Отправить</button>
                    </div>
                </div>

            </div>
        )
    }
}


export default Chats;