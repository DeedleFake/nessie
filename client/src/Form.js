import React, { Component } from 'react'

import Card, { CardHeader, CardText, CardActions } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

class Control extends Component {
	render() {
		switch (this.props.type) {
			case 'submit':
				return <RaisedButton
					label={this.props.label || 'Submit'}
					primary={true}
				/>

			default:
				return (
					<div>
						{this.props.children}
					</div>
				)
		}
	}
}

class Form extends Component {
	render() {
		return (
			<Card>
				<CardHeader
					title={this.props.title}
				/>

				<CardText>
					{this.props.children.filter((v) => (
						!v.props.type
					))}
				</CardText>
				<CardActions>
					{this.props.children.filter((v) => (
						v.props.type && (
							v.props.type === 'submit' ||
							v.props.type === 'cancel'
						)
					))}
				</CardActions>
			</Card>
		)
	}
}

export { Control }
export default Form
