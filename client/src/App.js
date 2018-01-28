import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'

import Form, { Control } from './Form'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			user: null,
		}
	}

	inner = () => {
		if (!this.state.token) {
			return (
				<Form
					title='Login'
					onSubmit={this.login}
				>
					<Control name='username'>
						<TextField
							hintText='Username'
						/>
					</Control>
					<Control name='password'>
						<TextField
							hintText='Password'
							type='password'
						/>
					</Control>

					<Control
						label='Login'
						type='submit'
					/>
				</Form>
			)
		}

    return (
			<div>
				<h1>{this.state.user.name}</h1>
				<h1>{this.state.user.password}</h1>
			</div>
    )
	}

  render() {
		return (
			<MuiThemeProvider>
				<AppBar
					title='Nessie'
					showMenuIconButton={false}
				/>

				{this.inner()}
			</MuiThemeProvider>
		)
  }
}

export default App
