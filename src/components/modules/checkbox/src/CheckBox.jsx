import React from 'react';
import cx from 'classnames';
import './style/checkbox.scss';

class CheckBox extends React.Component {

	constructor(props){
		super(props);

		this.handleToggleChecked = this.handleToggleChecked.bind(this);
		this.state = {
			checked: props.checked || false
		};
	}

	componentWillReceiveProps(nextProps){
		//const { checked } = this.state;
		this.setState({ checked: nextProps.checked });
		/*if (checked !== nextProps.checked){
			this.setState({ checked: nextProps.checked });
		}*/
	}

	/*shouldComponentUpdate(state, props){
		console.log(state, props);
		return true;
	}*/

	handleToggleChecked(e){
		e.stopPropagation();
		e.nativeEvent.stopImmediatePropagation();
		if (this.props.disabled){
			return;
		}
		const newState = !this.state.checked;
		this.setState({ checked: newState });
		if (this.props.onChange){
			this.props.onChange(newState);
		}
	}

	render() {
		const { checked } = this.state;
		const { name, disabled } = this.props;
		const classes = cx({
			'md-checkbox': true
		}, this.props.className);

		const checkboxIconClasses = cx({
			'md-icon': true,
			'md-icon--disabled': disabled,
			'md-icon--checked': checked
		});
		return (
			<div className={classes} onClick={this.handleToggleChecked}>
				<div className='md-container'>
					<div className={checkboxIconClasses} />
					<input
						name={name}
						className='md-container__checkbox-input'
						type='checkbox'
						checked={checked}
					/>
				</div>
				<div className='md-label'>
					<span>{this.props.label}</span>
				</div>
			</div>
		);
	}
}

CheckBox.defaultProps = {
	name: 'checkbox'
};

CheckBox.PropTypes = {
	name: React.PropTypes.string,
	checked: React.PropTypes.bool,
	label: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	onChange: React.PropTypes.func,
	className: React.PropTypes.string
};

export default CheckBox;
