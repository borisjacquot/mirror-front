import React, {Component} from 'react';
import './MirrorList.css';
import axios from 'axios';
import MirrorItem from "./MirrorItem";
import MirrorPost from "./MirrorPost";

export class MirrorList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            errorMsg: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5500/posts')
            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retrieving data'})
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <h1>Mirror list</h1>
                <div className="list-container">
                    <div className="mirror-wrapper">
                        <ul className="mirror-items">
                            {
                                posts.length ?
                                    posts.map(post => <MirrorItem mirrorID={post._id} mirrorName={post.name} mirrorNews={post.news} mirrorCal={post.calendar} />)
                                    : null
                            }
                            { errorMsg ? <h1>{errorMsg}</h1> : null }

                            <MirrorPost />

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MirrorList;
