import React, {Component} from 'react';
import './MirrorList.css';
import axios from 'axios';

export class MirrorItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.mirrorName,
            news: this.props.mirrorNews,
            calendar: this.props.mirrorCal,
            errorMsg: []
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.put("http://localhost:5500/posts/" + this.props.mirrorID, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        this.setState({errorMsg: 'Mirror updated'})
    }

    deleteHandler = e => {
        e.preventDefault()
        axios.delete("http://localhost:5500/posts/" + this.props.mirrorID)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        this.setState({errorMsg: 'Config deleted'})
    }

    render() {
        const { name, news, calendar, errorMsg } = this.state
        return (
            <li className="mirror-item">
                <p>ID: {this.props.mirrorID}</p>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="name" placeholder="Mirror name" value={name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="news" placeholder="News feed" value={news} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="calendar" placeholder="Calendar link" value={calendar} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <form onSubmit={this.deleteHandler}>
                    <button type="submit">Delete</button>
                </form>

                { errorMsg ? <p className="error">{errorMsg}</p> : null }

            </li>
        )
    }
}

export default MirrorItem;
