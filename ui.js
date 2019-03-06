const { render, Box } = require("ink")
const React = require(`react`)

const { Component, Fragment } = React

class UI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      linesToDisplay: 50,
    }
  }

  componentDidMount() {
		this.timer = setInterval(() => {
			this.setState(prevState => ({
				linesToDisplay: prevState.linesToDisplay + 50
			}));
		}, 1000);
	}

  render() {
    return <Fragment>
      {Array(this.state.linesToDisplay).fill(0).map((_, index) => <Box key={index}>Line #{index+1}</Box>)}
    </Fragment>
  }
}

render(<UI/>)