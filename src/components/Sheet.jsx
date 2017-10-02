import React, { Component } from 'react';
import { TextView } from './modules/text-label';
import Dropdown from './modules/dropdown';
import CheckBox from './modules/checkbox';

class Sheet extends Component {

	handleChangeCheckbox(id, checked){
		const { fields, conditions } = this.props;
		const updateFields = () => {
			return fields.map(f => {
				if (f.name === id){
					return {
						...f,
						checked
					};
				}
				return f;
			});
		};

		if (conditions){
			const bool = conditions.bool;
			if (bool && bool.required){
				const length = bool.length;
				if (length !== undefined){
					const checkedFields = fields.filter(f => f.checked);
					if (!checked){
						this.props.onChange(
							this.props.id,
							updateFields()
						);
					} else if (checkedFields.length < length){
						this.props.onChange(
							this.props.id,
							updateFields()
						);
					}
				}
			}
		} else {
			this.props.onChange(
				this.props.id,
				updateFields()
			);
		}
	}

	handleChangeText(id, val){
		const fields = this.props.fields.map(f => {
			if (f.name === id){
				return {
					...f,
					value: val
				};
			}
			return f;
		});

		this.props.onChange(
			this.props.id,
			fields
		);
	}

	handleChangeDropdown(id, e, payload){
		const fields = this.props.fields.map(f => {
			if (f.name === id){
				const entries = this._setEntries(f, payload);
				if (entries){
					return {
						...f,
						entries: {
							entry: entries
						}
					};
				}
			}
			return f;
		});

		this.props.onChange(
			this.props.id,
			fields
		);
	}

	_setEntries(field, payload){
		const entries = (field.entries || {}).entry || [];

		const selectedEntries = entries.map(e => {
			if (e.value === payload){
				return {
					...e,
					selected: true
				};
			}
			return {
				...e,
				selected: false
			};
		});
		if (selectedEntries.filter(e => e.selected).length === 0
			&& selectedEntries.length > 0
		) {
			selectedEntries[0].selected = true;
		}
		return selectedEntries;
	}

	render(){
		const { title, fields } = this.props;

		return (
			<div className='paragraph'>
				<div className='paragraph__title'>
					{title}
				</div>
				<div className='paragraph__body'>
					{fields.map(f => {
						switch (f.type){
							case 'bool': {
								return (
									<CheckBox
										key={f.name}
										name={f.name}
										checked={f.checked}
										label={f.title}
										className='paragraph__control'
										onChange={this.handleChangeCheckbox.bind(this, f.name)}
									/>
								);
							}
							case 'string': {
								return (
									<TextView
										key={f.name}
										name={f.name}
										placeholder={f.title}
										value={f.value}
										className='paragraph__control'
										onBlur={this.handleChangeText.bind(this, f.name)}
									/>
								);
							}
							case 'combo': {
								const entries = (f.entries || {}).entry || [];
								const elems = entries.map(e => {
									return {
										payload: e.value,
										text: e.value
									};
								});
								const selectedPayload = (entries.filter(e => e.selected === true)[0] || {}).value;
								return (
									<Dropdown
										key={f.name}
										title={f.title}
										items={elems}
										selectedPayload={selectedPayload}
										onChange={this.handleChangeDropdown.bind(this, f.name)}
									/>
								);
							}
							default: return null;
						}
					})}
				</div>
			</div>
		);
	}
}

export default Sheet;