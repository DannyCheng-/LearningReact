class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {
            showComments: false,
            comments: [
                {id: 1, author: 'Morgan McCircuit', body: 'Great pictuires!'},
                {id: 2, author: 'Bending Bender', body: 'Excellent stuff'}
            ]
        };
    }

    render() {
        const comments = this._getComments();
        let commentNodes;
        let buttonText = 'Show comments';
        if (this.state.showComments) {
            buttonText = 'Hide Comments';
            commentNodes = <div>{comments}</div>;
        }

        return(
            <div>
                <CommentForm addComment={this._addComment.bind(this)} />
                <h3>Comments</h3>
                <h4>{this._getCommentTitle(comments.length)}</h4>
                <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
        );
    }

    _getComments() {
        return this.state.comments.map(comment => {
            return (<Comment author={comment.author} body={comment.body} key={comment.id} />)
        });
    }

    _getCommentTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }

    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length + 1,
            author,
            body
        };

        this.setState({comments: this.state.comments.concat([comment])});
    }
}

ReactDOM.render(
    <CommentBox />,
    document.getElementById('comment-box')
);