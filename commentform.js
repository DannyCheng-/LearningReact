class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            characters: 0
        };
    }

    render() {
        return (
            <form onSubmit={this._handelSubmit.bind(this)}>
                <label>Join the discussion</label>
                <div>
                    <input placeholder="Name:" ref={(input) => this._author = input}/>
                    <textarea placeholder="Comments:" ref={(textarea) => this._body=textarea} onKeyUp={this._getCharacterCount.bind(this)}></textarea>
                </div>
                <p>{this.state.characters} characters</p>
                <div>
                    <button type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        );
    }

    _handelSubmit(event) {
        event.preventDefault();

        let author = this._author;
        let body = this._body;

        this.props.addComment(author.value, body.value);
    }
    
    _getCharacterCount() {
        this.setState({
            characters: this._body.value.length
        });
    }
}